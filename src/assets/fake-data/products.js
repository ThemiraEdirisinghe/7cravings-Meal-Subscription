// all images imported from images directory
// import product_01_image_01 from "../images/product_01.jpg";
// import product_01_image_02 from "../images/product_01.1.jpg";
// import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [

  {
    id: "1",
    title: "Grilled Salmon with Quinoa",
    price: 12.99,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    meal_category: "High Protein",
    meal_Time: "Lunch",
    desc: "Delicious grilled salmon served with nutritious quinoa.",
  },

  {
    id: "2",
    title: "Vegetarian Buddha Bowl",
    price: 10.49,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    meal_category: "Healthy Choices",
    meal_Time: "Dinner",
    desc: "A balanced vegetarian bowl packed with fresh veggies and grains.",
  },

  {
    id: "3",
    title: "Protein Pancakes",
    price: 8.99,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    meal_category: "High Protein",
    meal_Time: "Breakfast",
    desc: "Fluffy pancakes rich in protein, perfect for a hearty breakfast.",
  },

  {
    id: "4",
    title: "Mediterranean Salad",
    price: 9.99,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    meal_category: "Healthy Choices",
    meal_Time: "Lunch",
    desc: "Fresh salad with Mediterranean flavors and a light dressing.",
  },

  {
    id: "5",
    title: "Chicken Stir-Fry",
    price: 11.49,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    meal_category: "Quick Meals",
    meal_Time: "Dinner",
    desc: "Savory chicken stir-fried with vegetables and served hot.",
  }

];

export default products;
