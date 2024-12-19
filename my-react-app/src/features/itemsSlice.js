import { createSlice } from '@reduxjs/toolkit';
import Apple from "../images/Apples.webp";
import Mangoes from "../images/Mangoes.webp";
import fish from "../images/fish.webp";
import BabySpinach from "../images/BabySpinach.webp";
import RedCherries from "../images/RedCherries.webp";
import strawberry from "../images/strawberry.webp";
import swordfish_smniuv from "../images/swordfish_smniuv.webp";
import VeggiePlatter from "../images/VeggiePlatter.webp";
import halibutjaz7ju from "../images/halibut_jaz7ju.webp";
import Img1 from "../images/img-1.webp";
import Img2 from "../images/img-2.webp";
import Img3 from "../images/img-3.webp";
import Img4 from "../images/img-4.webp";

const initialState = {
  items: {
    "Fruits & Vegetables": [
        {
          
          id: 1,
          img: Apple,
          label: "Apple",
          price: "$2.00",
          weight: "1lb",
        },
        {
           id: 2,
          img: Mangoes,
          label: "Mangoes",
          price: "$1.50",
          weight: "1lb",
        },
        {
           id:3 ,
          img: strawberry,
          label: "strawberry",
          price: "$3.00",
          weight: "2lb",
        },
        {
           id: 4,
          img: RedCherries,
          label: "RedCherries",
          price: "$4.00",
          weight: "3lb",
        },
        {
           id: 5,
          img: RedCherries,
          label: "RedCherries",
          price: "$4.00",
          weight: "3lb",
        },
      ],
      "Meat & Fish": [
        {
           id: 6,
          img: swordfish_smniuv,
          label: "Sword Fish",
          price: "$5.00",
          weight: "2lb",
        },
        {
           id:7 ,
          img: fish,
          label: "Golden Fish",
          price: "$10.00",
          weight: "1lb",
        },
        {
           id: 8,
          img: VeggiePlatter,
          label: "Veggie Platter",
          price: "$8.00",
          weight: "1lb",
        },
        {
           id: 9,
          img: halibutjaz7ju,
          label: "Halibut",
          price: "$7.00",
          weight: "1lb",
        },
        {
           id:10 ,
          img: BabySpinach,
          label: "Halibut",
          price: "$7.00",
          weight: "1lb",
        },
      ],
      Snacks: [
        {
           id:11 ,
          img: halibutjaz7ju,
          label: "Chips",
          price: "$2.50",
          weight: "1lb",
        },
        {
           id:12 ,
          img: fish,
          label: "Cookies",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 13,
          img: Img3,
          label: "Nuts",
          price: "$4.50",
          weight: "1lb",
        },
        {
           id: 14,
          img: Img4,
          label: "Candy",
          price: "$1.00",
          weight: "1lb",
        },
      ],
      "Nuts & Biscuits": [
        {
           id: 15,
          img: Img1,
          label: "Almonds",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id: 16,
          img: Img2,
          label: "Cashews",
          price: "$6.00",
          weight: "1lb",
        },
        {
           id:17 ,
          img: Img3,
          label: "Digestive",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 18,
          img: Img4,
          label: "Oreo",
          price: "$3.00",
          weight: "1lb",
        },
      ],
      Chocolates: [
        {
           id:19 ,
          img: Img1,
          label: "Dark Chocolate",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id: 20,
          img: Img2,
          label: "Milk Chocolate",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id:21 ,
          img: Img3,
          label: "White Chocolate",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id:22 ,
          img: Img4,
          label: "Chocolate Bar",
          price: "$3.00",
          weight: "1lb",
        },
      ],
      Crisps: [
        {
           id: 23,
          img: Img1,
          label: "Potato Chips",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 24,
          img: Img2,
          label: "Tortilla Chips",
          price: "$3.50",
          weight: "1lb",
        },
        {
           id: 25,
          img: Img3,
          label: "Pita Chips",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 26,
          img: Img4,
          label: "Veggie Chips",
          price: "$3.50",
          weight: "1lb",
        },
      ],
      "Noodles & Pasta": [
        {
           id: 27,
          img: Img1,
          label: "Spaghetti",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 28,
          img: Img2,
          label: "Macaroni",
          price: "$3.50",
          weight: "1lb",
        },
        {
           id: 29,
          img: Img3,
          label: "Ramen",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id: 30,
          img: Img4,
          label: "Fettuccine",
          price: "$4.50",
          weight: "1lb",
        },
      ],
      Sauce: [
        {
           id: 31,
          img: Img1,
          label: "Tomato Sauce",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 32,
          img: Img2,
          label: "Soy Sauce",
          price: "$3.50",
          weight: "1lb",
        },
        {
           id: 33,
          img: Img3,
          label: "Barbecue Sauce",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 34,
          img: Img4,
          label: "Hot Sauce",
          price: "$2.50",
          weight: "1lb",
        },
      ],
      Soup: [
        {
           id: 35,
          img: Img1,
          label: "Tomato Soup",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 36,
          img: Img2,
          label: "Chicken Soup",
          price: "$3.50",
          weight: "1lb",
        },
        {
           id: 37,
          img: Img3,
          label: "Vegetable Soup",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 38,
          img: Img4,
          label: "Minestrone",
          price: "$3.50",
          weight: "1lb",
        },
      ],
      "Pet Care": [
        {
           id: 39,
          img: Img1,
          label: "Dog Food",
          price: "$10.00",
          weight: "1lb",
        },
        {
           id: 40,
          img: Img2,
          label: "Cat Food",
          price: "$8.00",
          weight: "1lb",
        },
        {
           id: 41,
          img: Img3,
          label: "Pet Treats",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id: 42,
          img: Img4,
          label: "Pet Toys",
          price: "$4.00",
          weight: "1lb",
        },
      ],
      "Home & Cleaning": [
        {
           id: 43,
          img: Img1,
          label: "Detergent",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id:44 ,
          img: Img2,
          label: "Disinfectant",
          price: "$6.00",
          weight: "1lb",
        },
        {
           id:45 ,
          img: Img3,
          label: "Broom",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 46,
          img: Img4,
          label: "Mop",
          price: "$4.00",
          weight: "1lb",
        },
      ],
      Dairy: [
        {
           id:47 ,
          img: Img1,
          label: "Milk",
          price: "$2.00",
          weight: "1lb",
        },
        {
           id:48 ,
          img: Img2,
          label: "Cheese",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id:49 ,
          img: Img3,
          label: "Yogurt",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 50,
          img: Img4,
          label: "Butter",
          price: "$4.00",
          weight: "1lb",
        },
      ],
      Cooking: [
        {
           id: 51,
          img: Img1,
          label: "Olive Oil",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 52,
          img: Img2,
          label: "Vinegar",
          price: "$2.00",
          weight: "1lb",
        },
        {
           id: 53,
          img: Img3,
          label: "Spices",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 54,
          img: Img4,
          label: "Herbs",
          price: "$3.50",
          weight: "1lb",
        },
      ],
      Breakfast: [
        {
           id: 55,
          img: Img1,
          label: "Cereal",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 56,
          img: Img2,
          label: "Pancakes",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 57,
          img: Img3,
          label: "Oatmeal",
          price: "$3.50",
          weight: "1lb",
        },
        {
           id: 58,
          img: Img4,
          label: "Granola",
          price: "$4.00",
          weight: "1lb",
        },
      ],
      Beverage: [
        {
           id: 59,
          img: Img1,
          label: "Juice",
          price: "$2.50",
          weight: "1lb",
        },
        {
           id: 60,
          img: Img2,
          label: "Soda",
          price: "$2.00",
          weight: "1lb",
        },
        {
           id: 61,
          img: Img3,
          label: "Coffee",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 62,
          img: Img4,
          label: "Tea",
          price: "$2.50",
          weight: "1lb",
        },
      ],
      "Health & Beauty": [
        {
           id: 63,
          img: Img1,
          label: "Shampoo",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id: 64,
          img: Img2,
          label: "Conditioner",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 65,
          img: Img3,
          label: "Soap",
          price: "$2.00",
          weight: "1lb",
        },
        {
           id: 66,
          img: Img4,
          label: "Lotion",
          price: "$3.50",
          weight: "1lb",
        },
    ],
    // ... (include all other categories and items here)
  },
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // You can add reducers here if needed
  },
});

export const selectItems = (state) => state.items.items;
export default itemsSlice.reducer;
