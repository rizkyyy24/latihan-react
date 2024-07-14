import { Fragment, useState, useEffect, useRef } from "react";
import ProductCard from "../components/fragments/ProductCard";
import Button from "../components/elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const user = useLogin();

  useEffect(() => {
    getProducts((datas) => {
      setProducts(datas);
      console.log(datas);
    });
  }, []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="flex justify-end items-center bg-blue-600 px-10 py-2">
        <div className="px-4 font-semibold text-white">{user}</div>
        <Button className="bg-red-500" onClick={handleLogout} type="button">
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-4">
        <div className="w-4/6 flex flex-wrap justify-center">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <ProductCard key={product.id}>
                  <ProductCard.Header image={product.image} />
                  <ProductCard.Body title={product.title}>
                    {product.description}
                  </ProductCard.Body>
                  <ProductCard.Footer
                    price={product.price}
                    id={product.id}
                    handleAddToCart={handleAddToCart}
                  />
                </ProductCard>
              );
            })}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)}...</td>
                      <td>
                        Rp{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        Rp{" "}
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td className="font-bold">
                  Rp{" "}
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
