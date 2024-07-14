import InputForm from "../elements/Input";
import Button from "../elements/Button";

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="name"
        placeholder="John Doe"
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmpassword"
        placeholder="******"
      />
      <Button className="bg-blue-600 w-full mb-2">Register</Button>
    </form>
  );
};

export default RegisterForm;
