import AuthLayout from "../components/layouts/AuthLayout";
import LoginForm from "../components/fragments/LoginForm";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AuthLayout title="Login">
        <LoginForm />
      </AuthLayout>
    </div>
  );
}

export default LoginPage;
