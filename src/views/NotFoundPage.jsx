import NotFound from "../component/NotFound";

export default function NotFoundPage({ isDarkMode }) {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <NotFound isDarkMode={isDarkMode} />
        </div>
    )
};