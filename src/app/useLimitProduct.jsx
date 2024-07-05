import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addLimitProduct } from './getLimitProductSlice';

const useLimitProduct = () => {
  const dispatch = useDispatch();
  const fetchAllProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const json = await response.json();
    console.log(json);
    dispatch(addLimitProduct(json));
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
}

export default useLimitProduct
