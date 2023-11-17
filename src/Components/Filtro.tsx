import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "./Input";
import { BotonCotizacion } from "./BotonCotizacion";
import { GET, GETprueba, POST, POSTprueba, validarRUT } from "../utils";
import { Actividades, Respuesta } from "../model/Respuesta";
import Swal from "sweetalert2";
import { useState } from "react";

export function Filtro() {
  const [actividades, setActividades] = useState<Actividades[]>([]);
  const formik = useFormik({
    initialValues: {
      rut: "",
      actividad: [],
    },
    validationSchema: Yup.object().shape({
      rut: Yup.string()
        .nullable()
        .test("valida-rut", "RUT inválido", function (value) {
          return validarRUT(value);
        })
        .required("El campo es obligatorio"),
      actividad: Yup.array()
        .nullable()
        .test(
          "al-menos-una-opcion",
          "Debes seleccionar una Actividad ",
          (value: any) => {
            return value && value.length > 0;
          }
        )
        .required("El campo es obligatorio")
        ,
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      var resultado: Respuesta = POST("https://finfasteastussoapapi.azurewebsites.net/api/Test/GetSecurePrime", {
        RUT: values.rut,
        ActivityCodes: [values.actividad],
      });

      // var resultado: Respuesta = POSTprueba(
      //   "https://finfasteastussoapapi.azurewebsites.net/api/Test/GetSecurePrime",
      //   {
      //     RUT: values.rut,
      //     ActivityCodes: values.actividad.map((x: any) => x.value),
      //   }
      // );

      if (!resultado.success) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: resultado.message,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Cotización",
          text:
            "Su cotización tiene el costo de $" +
            resultado.dataValue.amount.toLocaleString("es-ES"),
        });
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
      className="grid grid-cols-12"
    >
      <div className="md:col-span-3 col-span-12">
        <Input
          formik={formik}
          name="rut"
          type="mask"
          mask="rut"
          Encabezado="Rut empresa"
          onChange={async (value) => {
            if (validarRUT(value)) {
              let resultado: Respuesta = await GET(
                `https://finfasteastussoapapi.azurewebsites.net/api/test/getactivities?rut=${value}`
              );    
            //  let resultado: Respuesta = GETprueba(
            //     `https://finfasteastussoapapi.azurewebsites.net/api/test/getactivities?rut=${value}`
            //   );
              if (!resultado.success) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: resultado.message,
                });
              } else {
                setActividades(resultado.dataList);
              }
            }
            // let resultado: Respuesta = await GET(`https://finfasteastussoapapi.azurewebsites.net/api/test/getactivities?rut=${value}`);
          }}
        />
      </div>
      <div className="md:col-span-5 col-span-12">
        <Input
          type="select"
          placeholder="Seleccione una actividad"
          options={actividades.map((actividad) => {
            return {
              label: actividad.actividad,
              value: actividad.codigo.toString(),
            };
          })}
          Encabezado="Actividad a asegurar"
          formik={formik}
          name="actividad"
        />
      </div>
      <div className="md:col-span-4 col-span-12 flex justify-center items-center">
        <BotonCotizacion
          type="submit"
          text="Cotizar seguro"
          disabled={!formik.isValid}
        />
      </div>
    </form>
  );
}
