
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./getAllProductSlice";

const useAllProduct = () => {
  const dispatch = useDispatch();
  const fetchAllProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    console.log(json);
    dispatch(addProduct(json));
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
};

export default useAllProduct;
