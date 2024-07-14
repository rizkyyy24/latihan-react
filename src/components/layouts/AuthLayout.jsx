import { Link } from "react-router-dom";

const AuthLayout = ({ title, children }) => {
  return (
    <div className="w-full max-w-xs border border-slate-200 shadow-lg rounded-lg p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
      <p className="text-base font-semibold text-slate-700 mb-6">
        Please enter your details!
      </p>
      {children}
      {title === "Login" ? (
        <p className="text-slate-700 text-base font-semibold text-center">
          Don't have an account?{" "}
          <Link className="text-blue-600 font-bold text-base" to="/register">
            Register Here!
          </Link>
        </p>
      ) : (
        <p className="text-slate-700 text-base font-semibold text-center">
          Have an account?{" "}
          <Link className="text-blue-600 font-bold text-base" to="/login">
            Login Here!
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthLayout;
