import './BotonCotizacion.css';
type Props = {
    disabled?: boolean;
    onClick?: () => void;
    text: string;
    type: "button" | "submit" | "reset";
}
export function BotonCotizacion(props: Props){
    return (<>
    <button type={props.type} className="btn-cotizacion" disabled={props.disabled} onClick={props.onClick}>{props.text}</button>
    </>)
}