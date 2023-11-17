import { Filtro } from "./Filtro";
import './Cabecera.css';
export function Cabecera() {
  return (
<div>
    <div className="header-background relative md:mb-20 md:pt-10">
        <div className="grid grid-cols-12">
            <div className="md:col-span-8 col-span-12 md:pt-10">
                <h1 className="text-4xl font-bold md:pt-10">
                    Protege tu empresa con seguros 100% online
                </h1>
                <p className="text-lg mt-3">
                    Responsabilidad Civil General para Empresas
                </p>
                <p className="text-lg mt-1">
                    Protección Financiera para Empleadores
                </p>
            </div>
        </div>
        <div className="bg-white shadow-xl rounded-md	mt-3 md:right-0 mr-10 ml-10 hidden md:block" style={{
            marginTop: "5rem",
        }}>
            <Filtro />
        </div>
    </div>
    <div className="block md:hidden">
        <Filtro />
    </div>
</div>
  );
}
