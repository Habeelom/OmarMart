import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import dp1_img from './popular.p2.png'
import dp2_img from './popular.p4.png'
import dp3_img from './popular_p3.png'
import dp4_img from './popular.p5.png'
import np1_img from "./collections.p1.png";
import np2_img from "./collections.p2.png";
import np3_img from "./collections.p3.png";
import np4_img from "./collections.p4.png";
import np5_img from "./collections.p5.png";
import np6_img from "./collections.p6.png";
import np7_img from "./collections.p7.png";

let all_product = [
  {
    id: 1,
    name: "Ruffles Chips",
    category: "grocery",
    image: p1_img,
    new_price: 5.29,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Takis Chips",
    category: "grocery",
    image: p2_img,
    new_price: 4.55,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Oreo Double Stuff",
    category: "grocery",
    image: p3_img,
    new_price: 3.45,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Kosher Dill Pickle",
    category: "grocery",
    image: p4_img,
    new_price: 4.55,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Cheaddar Broccoli Rice",
    category: "grocery",
    image: p5_img,
    new_price: 7.11,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Long Grain Rice",
    category: "grocery",
    image: p6_img,
    new_price: 2.55,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Texas Toast",
    category: "grocery",
    image: p7_img,
    new_price: 3.65,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Pizza Rolls",
    category: "grocery",
    image: p8_img,
    new_price: 5.55,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Potato Rounds",
    category: "grocery",
    image: p9_img,
    new_price: 3.78,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Cinnamon Pancake Mix",
    category: "grocery",
    image: p10_img,
    new_price: 6.32,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Jif Peanut Butter",
    category: "grocery",
    image: p11_img,
    new_price: 3.54,
    old_price: 120.5,
  },
  
  {
    id: 13,
    name: "Bose Speaker",
    category: "electronics",
    image: p13_img,
    new_price: 85.99,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "360 Camera",
    category: "electronics",
    image: p14_img,
    new_price: 249.99,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Tile Tracker",
    category: "electronics",
    image: p15_img,
    new_price: 24.99,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "FitBit Versa",
    category: "electronics",
    image: p16_img,
    new_price: 129.99,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Ember Heated Mug",
    category: "electronics",
    image: p17_img,
    new_price: 79.99,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Bose QuietComfort Headphones",
    category: "electronics",
    image: p18_img,
    new_price: 259.99,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "PlayStation HandHeld",
    category: "electronics",
    image: p19_img,
    new_price: 210.99 ,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "USB Hub",
    category: "electronics",
    image: p20_img,
    new_price: 11.99,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "TWS Earbuds",
    category: "electronics",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Samsung Galaxy Tab A6 (2022)",
    category: "electronics",
    image: p22_img,
    new_price: 149.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "White Step Trashcan",
    category: "furniture",
    image: p24_img,
    new_price: 89.99,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Billiard Pool table",
    category: "furniture",
    image: p25_img,
    new_price: 579.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Wine Cooler Stainless Steel Fridge",
    category: "furniture",
    image: p26_img,
    new_price: 655.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Gray Modern Barstool",
    category: "furniture",
    image: p27_img,
    new_price: 149.99,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Beige Entryway chair",
    category: "furniture",
    image: p28_img,
    new_price: 349.99,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Black Ottoman",
    category: "furniture",
    image: p29_img,
    new_price: 49.99,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Gray Beanbag Floor Chair",
    category: "furniture",
    image: p30_img,
    new_price: 149.99,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Decorative Beanbag Chair",
    category: "furniture",
    image: p31_img,
    new_price: 99.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Modern Pink Accent Chair",
    category: "furniture",
    image: p32_img,
    new_price: 199.99,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Decorative Wall Mirror",
    category: "furniture",
    image: p33_img,
    new_price: 78.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Gray Sectional Couch With Ottoman",
    category: "furniture",
    image: p34_img,
    new_price: 1199.99,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Green Sectional Couch",
    category: "furniture",
    image: p35_img,
    new_price: 799.99,
    old_price: 120.5,
  },
  {
    id:51,
    name:"Modern Gray Bedroom Set",
    image:dp1_img,
    new_price:1570.00,
    old_price:1700.00,
  },
  {id:52,
    name:"LG OLED Monitor",
    image:dp2_img,
    new_price:450.0,
    old_price:120.50,
  },
  {id:53,
    name:"Apple Watch Ultra",
    image:dp3_img,
    new_price:599.99,
    old_price:100.50,
  },
  {id:54,
    name:"Dinner Table Set",
    image:dp4_img,
    new_price:999.99,
    old_price:150.00,
  },

  {
    id: 41,
    name: "LG Wireless Mouse",
    image: np1_img,
    new_price: 69.99,
    old_price: 80.5,
  },
  {
    id: 42,
    name: "RGB Gaming Keyboard",
    image: np2_img,
    new_price: 89.99,
    old_price: 120.5,
  },
  {
    id: 43,
    name: "Razer Wired Gaming Headset",
    image: np3_img,
    new_price: 49.99,
    old_price: 100.5,
  },
  {
    id: 44,
    name: "Xbox Elite Controller",
    image: np4_img,
    new_price: 99.99,
    old_price: 150.0,
  },
  {
    id: 45,
    name: "Hyper-X RGB Microphone",
    image: np5_img,
    new_price: 78.99,
    old_price: 80.5,
  },
  {
    id: 46,
    name: "Black Gaming Chair",
    image: np6_img,
    new_price: 129.99,
    old_price: 120.5,
  },
  {
    id: 47,
    name: "Samsung G4 Gaming Monitor",
    image: np7_img,
    new_price: 299.99,
    old_price: 100.5,
  }
];

export default all_product;
