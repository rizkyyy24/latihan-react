import AuthLayout from "../components/layouts/AuthLayout";
import RegisterForm from "../components/fragments/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AuthLayout title="Register">
        <RegisterForm />
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
