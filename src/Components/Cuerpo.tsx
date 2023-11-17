import { Coberturas } from "./Coberturas";
type Props = {
  Titulo: string;
  Descripcion: string;
  Coberturas: string[];
};

export function Cuerpo(props: Props) {
  const dividirEnPares = (arreglo: string[]) => {
    var resultado = [];

    for (var i = 0; i < arreglo.length; i += 2) {
      var par = [arreglo[i], arreglo[i + 1]];
      resultado.push(par);
    }

    return resultado;
  };

  return (
    <div className="grid grid-cols-12 items-center">
      <div className="md:col-span-6 col-span-12 p-5">
        <div className="rows-2 mb-5">
          <h1 className="text-2xl text-center">
            {props.Titulo}
          </h1>
        </div>
        <div className="rows-2">
          <span className="text-justify text-sm">
           {props.Descripcion}
          </span>
        </div>
      </div>
      <div className="md:col-span-6 col-span-12 p-5">
        <div className="rows-2 flex justify-center mb-5">
          <div className="text-center">
            <div className="uppercase">
              Principales <span className="font-bold">Coberturas</span>
            </div>
            <div className="border-t-2 border-red-600 w-24 mx-auto mt-1"></div>
          </div>
        </div>
        <div className="rows-2">
          <div className="grid grid-cols-12 text-center md:text-left ">
            {dividirEnPares(props.Coberturas).map((par, index) => (
              <Coberturas
                key={index}
                Cobertura1={par[0]}
                Cobertura2={par.length == 2 ? par[1] : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
