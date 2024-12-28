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
import Img5 from "../images/air_freshner_acana_ozmo.webp";
import Img6 from "../images/air_freshner_air_wick_essential_oils.webp";
import Img7 from "../images/beef_xkxhnb.webp";
import Img8 from "../images/chicken_brest_ribcxo.webp";
import Img9 from "../images/cleaning_supply_glitz_glass_cleaner.webp";
import Img10 from "../images/cheese3.webp";
import Img12 from "../images/cheese1.webp";
import Img13 from "../images/cheese2.webp";
import Img14 from "../images/milk4.webp";
import Img15 from "../images/snack4.webp";
import Img16 from "../images/snack5.webp";
import Img17 from "../images/snack6.webp";
import Img18 from "../images/snack4.webp";
import Img19 from "../images/nuts1.webp";
import Img20 from "../images/nuts2.webp";
import Img21 from "../images/nuts3.webp";
import Img22 from "../images/nuts4.webp";
import Img23 from "../images/choco1.webp";
import Img24 from "../images/choco2.webp";
import Img25 from "../images/choco2.webp";
import Img26 from "../images/choco4.webp";
import Img27 from "../images/crips1.webp";
import Img28 from "../images/crips2.webp";
import Img29 from "../images/crips3.webp";
import Img30 from "../images/crips4.webp";
import Img31 from "../images/crips4.webp";
import Img32 from "../images/crips4.webp";
import Img33 from "../images/crips4.webp";
import Img34 from "../images/crips4.webp";

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
          img: Img15,
          label: "Chips",
          price: "$2.50",
          weight: "1lb",
        },
        {
           id:12 ,
          img: Img16,
          label: "Cookies",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 13,
          img: Img17,
          label: "Nuts",
          price: "$4.50",
          weight: "1lb",
        },
        {
           id: 14,
          img: Img18,
          label: "Candy",
          price: "$1.00",
          weight: "1lb",
        },
      ],
      "Nuts & Biscuits": [
        {
           id: 15,
          img: Img19,
          label: "Almonds",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id: 16,
          img: Img20,
          label: "Cashews",
          price: "$6.00",
          weight: "1lb",
        },
        {
           id:17 ,
          img: Img21,
          label: "Digestive",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 18,
          img: Img22,
          label: "Oreo",
          price: "$3.00",
          weight: "1lb",
        },
      ],
      Chocolates: [
        {
           id:19 ,
          img: Img23,
          label: "Dark Chocolate",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id: 20,
          img: Img24,
          label: "Milk Chocolate",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id:21 ,
          img: Img25,
          label: "White Chocolate",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id:22 ,
          img: Img26,
          label: "Chocolate Bar",
          price: "$3.00",
          weight: "1lb",
        },
      ],
      Crisps: [
        {
           id: 23,
          img: Img27,
          label: "Potato Chips",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 24,
          img: Img28,
          label: "Tortilla Chips",
          price: "$3.50",
          weight: "1lb",
        },
        {
           id: 25,
          img: Img29,
          label: "Pita Chips",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 26,
          img: Img30,
          label: "Veggie Chips",
          price: "$3.50",
          weight: "1lb",
        },
      ],
      "Noodles & Pasta": [
        {
           id: 27,
          img: Img31,
          label: "Spaghetti",
          price: "$4.00",
          weight: "1lb",
        },
        {
           id: 28,
          img: Img32,
          label: "Macaroni",
          price: "$3.50",
          weight: "1lb",
        },
        {
           id: 29,
          img: Img33,
          label: "Ramen",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id: 30,
          img: Img34,
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
          img: Img7,
          label: "Dog Food",
          price: "$10.00",
          weight: "1lb",
        },
        {
           id: 40,
          img: Img8,
          label: "Cat Food",
          price: "$8.00",
          weight: "1lb",
        },
        {
           id: 41,
          img: Img7,
          label: "Pet Treats",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id: 42,
          img: Img8,
          label: "Pet Toys",
          price: "$4.00",
          weight: "1lb",
        },
      ],
      "Home & Cleaning": [
        {
           id: 43,
          img: Img6,
          label: "Detergent",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id:44 ,
          img: Img5,
          label: "Disinfectant",
          price: "$6.00",
          weight: "1lb",
        },
        {
           id:45 ,
          img: Img9,
          label: "Broom",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 46,
          img: Img10,
          label: "Mop",
          price: "$4.00",
          weight: "1lb",
        },
      ],
      Dairy: [
        {
           id:47 ,
          img: Img10,
          label: "Milk",
          price: "$2.00",
          weight: "1lb",
        },
        {
           id:48 ,
          img: Img14,
          label: "Cheese",
          price: "$5.00",
          weight: "1lb",
        },
        {
           id:49 ,
          img: Img12,
          label: "Yogurt",
          price: "$3.00",
          weight: "1lb",
        },
        {
           id: 50,
          img: Img13,
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
