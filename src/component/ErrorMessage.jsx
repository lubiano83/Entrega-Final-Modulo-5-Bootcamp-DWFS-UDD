import { Link } from "react-router-dom";
import Message from "./Message";
import Boton from "./Boton";

export default function ErrorMessage({ isDarkMode }) {
    return (
        <div className={`h-full w-full ${isDarkMode ? "bg-amber-50": "bg-green-50"} flex flex-col justify-center items-center p-8 gap-4`}>
            <Message isDarkMode={isDarkMode}>Ups, hubo un Error...</Message>
            <Link to={"/"}>
                <Boton isDarkMode={isDarkMode}>Volver</Boton>
            </Link>
        </div>
    )
};