import "./App.css";
import { Cabecera } from "./Components/Cabecera";
import { Cuerpo } from "./Components/Cuerpo";
import { Separador } from "./Components/Separador";
import { BotonCotizacion } from "./Components/botoncotizacion";

function App() {
  return (
    <>
     
        <div className="mx-auto max-w-[1000px]">
          <Cabecera />

          <Cuerpo
            Titulo="Responsabilidad Civil General para Empresas"
            Descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate ipsum in nibh rhoncus, vel ornare nibh porta. Duis quis diam id odio tempus lobortis. Curabitur at augue vehicula, placerat felis et, blandit ex. Ut fermentum est ac nisl elementum consequat. Duis est urna, ultricies efficitur "
            Coberturas={[
              "Responsabilidad Civil Cruzada",
              "Responsabilidad Civil Patronal",
              "Responsabilidad Civil por transporte de personas",
              "Defensa penal del Asegurado",
            ]}
          />

          <Separador />

          <Cuerpo
            Titulo="Protección Financiera para Empleadores"
            Descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate ipsum in nibh rhoncus, vel ornare nibh porta. Duis quis diam id odio tempus lobortis. Curabitur at augue vehicula, placerat felis et, blandit ex. Ut fermentum est ac nisl elementum consequat. Duis est urna, ultricies efficitur "
            Coberturas={[
              "Responsabilidad Civil Cruzada",
              "Responsabilidad Civil Patronal",
              "Responsabilidad Civil por transporte de personas",
              "Defensa penal del Asegurado",
            
            ]}
          />
        </div>
   
    </>
  );
}

export default App;
