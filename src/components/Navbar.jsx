import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationMenu className="bg-gray-800 p-4 ">
      <NavigationMenuList className="container mx-auto flex justify-between items-center">
        <NavigationMenuItem
          className={`text-white text-2xl lg:block ${isOpen ? "hidden" : ""}`}
        >
          <Link to="/">Radiant</Link>
        </NavigationMenuItem>
        <div className="md:flex md:flex-wrap md:justify-around">
          <NavigationMenuItem className="block lg:hidden ">
            <Button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <FaBars />
            </Button>
          </NavigationMenuItem>
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto ${
              isOpen ? "" : "hidden"
            }`}
          >
            <div className="text-white lg:flex lg:justify-between">
              <NavigationMenuItem className="lg:px-4 py-2">
                <Link to="/" className="block">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="lg:px-4 py-2">
                <Link to="addproduct" className="block">
                  Add Product
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="lg:px-4 py-2">
                <Link to="#contact" className="block">
                  Contact
                </Link>
              </NavigationMenuItem>
            </div>
          </div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
