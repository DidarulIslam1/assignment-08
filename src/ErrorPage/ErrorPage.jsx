import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Oops...!!!</h1>
            <Link to="/">
                <button className="btn btn-accent mt-3 text-lg text-white font-bold">Go Back To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;