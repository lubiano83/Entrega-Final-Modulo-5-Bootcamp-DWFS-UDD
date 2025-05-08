import { Link } from "react-router-dom";
import Boton from "./Boton";

export default function GoBack({ isDarkMode }) {
    return (
        <Link to={"/"}>
            <Boton isDarkMode={isDarkMode}>Volver</Boton>
        </Link>
    )
};