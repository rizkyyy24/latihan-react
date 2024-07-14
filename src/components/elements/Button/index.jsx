const Button = ({
  type,
  className = "bg-black",
  children,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={`px-3 py-2 text-white rounded-md ${className} font-bold hover:opacity-70 animation duration-200 text-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
