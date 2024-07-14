import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold mb-6">Oops!</h1>
      <p className="text-xl font-semibold">
        Sorry, Unexpected error has occured
      </p>
      <p className="text-lg font-semibold">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
