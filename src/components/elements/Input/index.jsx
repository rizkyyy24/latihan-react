import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(({ label, name, type, placeholder }, ref) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;
