import Button from "../elements/Button";

const ProductCard = ({ children }) => {
  return (
    <div className="max-w-xs bg-slate-600 rounded-lg shadow mx-2 my-2">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <a href="">
      <img
        src={image}
        alt="sepatu"
        className="rounded-t-md p-6 h-60 w-full object-cover"
      />
    </a>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="mt-2 px-4">
      <a href="">
        <h1 className="text-xl font-semibold text-white">
          {title.substring(0, 20)}...
        </h1>
        <p className="text-base text-white text-justify">
          {children.substring(0, 100)}...
        </p>
      </a>
    </div>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <span className="tex-base text-white font-semibold">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </div>
  );
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;
