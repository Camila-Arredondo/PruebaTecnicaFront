type Props = {
  Cobertura1: string;
  Cobertura2: string;
};

export function Coberturas(props: Props) {
  return (
    <div className="md:col-span-6 col-span-12 p-5">
      <div className=" mb-4">
        <p className="text-sm font-semibold">{props.Cobertura1}</p>
      </div>

      <div>
        {props.Cobertura2 ? (
          <>
            <div className="border-t border-gray-200 w-40 mx-auto mt-2"></div>
            <p className="text-sm font-semibold">{props.Cobertura2}</p>
          </>
        ): null}
      </div>
    </div>
  );
}
