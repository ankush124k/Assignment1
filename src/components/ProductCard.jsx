import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

const ProductCard = ({ image, category, price, rating }) => {
  return (
    // <div className="flex justify-center items-center p-4">

    // </div>
    <Card className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="relative h-48">
        <img alt="product" src={image} className="w-full h-full object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Category: {category}
        </h2>
        <p className="text-gray-600">Price: {price}</p>
        <p className="text-gray-600">Rating: {rating}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
