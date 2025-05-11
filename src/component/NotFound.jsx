import Message from "./Message";
import GoBack from "./GoBack";
import ErrorMessage from "./ErrorMessage";

export default function NotFound({ isDarkMode }) {

    try {
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Message isDarkMode={isDarkMode}>¡Not Found: Error 404!</Message>
                <GoBack isDarkMode={isDarkMode} />
            </div>
        )
    } catch (error) {
        console.log(error.message);
        return <ErrorMessage isDarkMode={isDarkMode} />
    }
};