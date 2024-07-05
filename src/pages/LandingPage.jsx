import React, { useState } from "react";
import useAllProduct from "../app/useAllProduct";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "@/components/ProductCarousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const LandingPage = () => {
  useAllProduct();
  const products = useSelector((state) => state.getAllProduct.allProducts);
  console.log(products);
  let itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);

  return (
    <div className=" p-4 sm:p-8">
      <div className="flex justify-center items-center mb-8">
        <div className="w-full sm:w-3/4 lg:w-2/3 flex justify-center">
          <ProductCarousel />
        </div>
      </div>
      <p className="font-bold">All Items</p>
      <div className="flex flex-wrap justify-center gap-6 p-4 sm:p-10 ">
        {products?.slice(startIndex, endIndex).map((product) => (
          <ProductCard
            key={product?.id}
            image={product?.image}
            category={product?.category}
            price={product?.price}
            rating={product?.rating?.rate}
          />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              isActive
              className={
                startIndex == 0 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(Math.max(startIndex - itemsPerPage, 0));
                setEndIndex(Math.max(endIndex - itemsPerPage, itemsPerPage));
              }}
            />
          </PaginationItem>
          <PaginationItem>
            {Math.floor(endIndex / itemsPerPage) - 1}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              {endIndex / itemsPerPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            {Math.floor(endIndex / itemsPerPage) + 1}
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className={
                endIndex >= 20 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(startIndex + itemsPerPage);
                setEndIndex(endIndex + itemsPerPage);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default LandingPage;
