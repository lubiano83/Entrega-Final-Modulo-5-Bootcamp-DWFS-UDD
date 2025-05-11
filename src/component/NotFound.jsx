import Message from "./Message";
import GoBack from "./GoBack";

export default function NotFound({ isDarkMode }) {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Message isDarkMode={isDarkMode}>¡Not Found: Error 404!</Message>
            <GoBack isDarkMode={isDarkMode} />
        </div>
    )
};