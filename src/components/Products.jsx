import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import image1 from "../Images/Menu 1.png";
import image2 from "../Images/Menu 2.png";
import image3 from "../Images/Menu 3.png";
import image4 from "../Images/Menu 4.png";
import image5 from "../Images/Menu 5.png";
import image6 from "../Images/Menu 6.png";
import image7 from "../Images/Menu 7.png";
import image8 from "../Images/Menu 8.png";
import { ProductSec } from "./style";

const Meals = [
  {
    id: 1,
    image: image1,
    price: "$9.99",
    name: "Fried Eggs",
    description: "Made with eggs, lettuce, salt, oil and other ingredients",
    category: "breakfast",
  },
  {
    id: 2,
    image: image2,
    price: "$15.99",
    name: "Hawaiian Pizza",
    description: "Made with eggs, lettuce, salt, oil and other ingredients",
    category: "dessert",
  },
  {
    id: 3,
    image: image3,
    price: "$7.25",
    name: "Martinez Cocktail",
    description: "Made with eggs, lettuce, salt, oil and other ingredients",
    category: "drink",
  },
  {
    id: 4,
    image: image4,
    price: "$20.99",
    name: "Butterscotch Cake",
    description: "Made with eggs, lettuce, salt, oil and other ingredients",
    category: "dessert",
  },
  {
    id: 5,
    image: image5,
    price: "$5.89",
    name: "Mint Lemonade",
    description: "Made with eggs, lettuce, salt, oil and other ingredients",
    category: "drink",
  },
  {
    id: 6,
    image: image6,
    price: "$18.05",
    name: "Chocolate Icecream",
    description: "Made with eggs, lettuce, salt, oil and other ingredients",
    category: "dessert",
  },
  {
    id: 7,
    image: image7,
    price: "$12.55",
    name: "Cheese Burger",
    description: "Made with eggs, lettuce, salt, oil and other ingredients",
    category: "main-dish",
  },
  {
    id: 8,
    image: image8,
    price: "$15.99",
    name: "Classic Waffles",
    description: "Made with eggs, lettuce, salt, oil and other ingredients",
    category: "main-dish",
  },
];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredMeals, setFilteredMeals] = useState(Meals);

  const filterMeals = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      setFilteredMeals(Meals);
      return;
    }

    setFilteredMeals(Meals.filter((meal) => meal.category === category));
  };

  return (
    <ProductSec>
      <div className="container">
        <div className="title">
          <h1>Our Menu</h1>
          <h6>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </h6>
          <div className="menu-btns">
            <button
              className={activeCategory === "all" ? "active" : ""}
              onClick={() => filterMeals("all")}
            >
              All
            </button>

            <button
              className={activeCategory === "breakfast" ? "active" : ""}
              onClick={() => filterMeals("breakfast")}
            >
              Breakfast
            </button>

            <button
              className={activeCategory === "main-dish" ? "active" : ""}
              onClick={() => filterMeals("main-dish")}
            >
              Main Dishes
            </button>

            <button
              className={activeCategory === "drink" ? "active" : ""}
              onClick={() => filterMeals("drink")}
            >
              Drinks
            </button>

            <button
              className={activeCategory === "dessert" ? "active" : ""}
              onClick={() => filterMeals("dessert")}
            >
              Dessert
            </button>
          </div>
        </div>
        <div className="main">
          {filteredMeals.map((meal) => (
            <div key={meal.id}>
              <img src={meal.image} alt="" />
              <h5>{meal.price}</h5>
              <h6>{meal.name}</h6>
              <p>{meal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ProductSec>
  );
};

export default Product;
