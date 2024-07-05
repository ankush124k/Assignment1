import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import useLimitProduct from "@/app/useLimitProduct";
import { useSelector } from "react-redux";

const ProductCarousel = () => {
  useLimitProduct();
  const products = useSelector((state) => state.limitProduct.items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || !products || products.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered, products]);

  const handleNext = () => {
    if (products && products.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }
  };

  const handlePrevious = () => {
    if (products && products.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + products.length) % products.length
      );
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel
      className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CarouselContent className="flex justify-center">
        {products.map((product, index) => (
          <CarouselItem
            key={product.id}
            className={`flex justify-center ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <div className="p-1 flex justify-center">
              <Card className="w-64 flex justify-center">
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.category}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={handlePrevious} />
      <CarouselNext onClick={handleNext} />
    </Carousel>
  );
};

export default ProductCarousel;
