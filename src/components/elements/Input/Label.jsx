const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block font-semibold text-base">
      {children}
    </label>
  );
};

export default Label;
