import "./Input.css";
import MaskedInput from "react-text-mask";
import createRutMask from "./rutMask";
import { MultiSelect, Option } from "react-multi-select-component";

type Props = {
  type: string;
  Encabezado: string;
  formik: any;
  name: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  options?:Option[];
  mask?: string;
};

export function Input(props: Props) {
  const rutMask = createRutMask();

  return (
    <div className="input-container">
      <label className="input-label">{props.Encabezado}</label>
      {props.type == "select" ? (
        <MultiSelect  
        labelledBy="Select"
      
        options={props.options ?? []}
        value={props.formik?.values[props.name]}
        onChange={(e:any) => {
          props.formik?.setFieldValue(props.name, e);
          if (props.onChange) props.onChange(e);

        }}
        />
         
      ) : props.type == "mask" ? (
        <MaskedInput
          mask={props.mask == "rut" ? rutMask : props.mask}
          type={props.type}
          showMask={false}
          placeholder="Buscar por RUT/RUN"
          className="input-field"
          {...props.formik?.getFieldProps(props.name)}
          onChange={(e) => {
            props.formik?.setFieldValue(props.name, e.target.value);
            if (props.onChange) props.onChange(e.target.value);

          }}
        />
      ) : (
        <input
          type={props.type}
          id="rutEmpresa"
          name="rutEmpresa"
          className="input-field"
          {...props.formik?.getFieldProps(props.name)}
          onChange={(e) => {
            props.formik?.setFieldValue(props.name, e.target.value);
            if (props.onChange) props.onChange(e.target.value);

          }}
        />
      )}

      {props.formik?.touched[props.name] &&
        props.formik?.errors[props.name] && (
          <div className="text-red-500 text-sm mt-1">
            {props.formik?.errors[props.name]}
          </div>
        )}
    </div>
  );
}
