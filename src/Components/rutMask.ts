export const convertToMask = (strNumber: string) =>
  strNumber.split("").map((char) => {
    if (char === ".") {
      return ".";
    } else if (char.toLowerCase() === "k") {
      return /[kK]/;
    }
    return /\d/;
  });

export const addThousandsSeparator = (number: number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const cleanRutPart = (
  toClean: string,
  includeThousandsSeparator = false
) => {
  const withoutNonDigits = toClean.replace(/[^\dkK]+/g, "");
  const withoutLeadingZeros = withoutNonDigits.replace(/^0+(0$|[^0])/, "$1");

  let rut = withoutLeadingZeros.slice(0, 8);
  rut = rut.replace(/[kK]+/g, "");

  const excess = withoutLeadingZeros.slice(8, 9);

  return {
    rut: includeThousandsSeparator ? addThousandsSeparator(Number(rut)) : rut,
    excess,
  };
};

export const splitByLast = (raw: string, part: string) => {
  const indexOfSeparator = raw.lastIndexOf(part);
  return [raw.slice(0, indexOfSeparator), raw.slice(indexOfSeparator + 1)];
};

const createRutMask = ({ includeThousandsSeparator = true } = {}) => {
  function rutMask(rawValue = "") {
    if (rawValue === "") {
      return [/\d/];
    }

    const indexOfVdSeparator = rawValue.lastIndexOf("-");
    let mask: (string | RegExp)[] = [];
    let rawRut = rawValue;
    let dv: any = [];

    if (indexOfVdSeparator !== -1) {
      [rawRut, dv] = splitByLast(rawValue, "-");
      dv = convertToMask(dv.replace(/[^\dkK]+/, ""));
    }

    const { rut, excess } = cleanRutPart(rawRut, includeThousandsSeparator);

    if (excess !== "" && dv.length === 0) {
      dv = convertToMask(excess);
    }

    mask = convertToMask(rut);

    if (rawValue[indexOfVdSeparator - 1] !== "-") {
      mask.push("[]");
    }

    mask.push("-", "[]");
    if (dv.length > 0) {
      dv = dv.slice(0, 1);
      mask = mask.concat(dv);
    }

    if (rawValue[indexOfVdSeparator] === "-" && dv.length === 0) {
      mask.push(/[\dkK]/);
    }

    return mask;
  }

  rutMask.instanceOf = "createRutMask";

  return rutMask;
};

export default createRutMask;
