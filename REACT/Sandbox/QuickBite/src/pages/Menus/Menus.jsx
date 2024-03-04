import OrderButton from "./OrderButton.jsx";
import MenuFromData from "./MenuFromData.jsx";

// He intentat de posar l'array dobjectes a un archiu menus.js pero no se per que no puc mapejar l'array un cop importo menu.js

const menus = [
  {
    id: "M001",
    name: "Menu Lisboa",
    contents: [
      "Meat Balls",
      "Salad with tomato",
      "Onion and carrot",
      "Fresh Tuna",
    ],
    price: 15.0,
    active: true,
    water: true,
  },
  {
    id: "M002",
    name: "Menu New York",
    contents: [
      "Meat Balls with Pulled Steak",
      "Salad with tomato",
      "Brown Rice",
      "Fresh Salmon",
    ],
    price: 25.0,
    active: true,
    water: true,
  },
  {
    id: "M003",
    name: "Menu Santiago",
    contents: [
      "Meat Chicken Curry",
      "Salad with tomato",
      "Carrot with edamame",
      "Fresh Tuna",
    ],
    price: 30.0,
    active: true,
    water: true,
  },
  {
    id: "M004",
    name: "Menu Barcelona",
    contents: [
      "Grilled 'calçots'",
      "Green salad",
      "Baked beans",
      "Fresh Sea Bass",
    ],
    price: 28.0,
    active: true,
    water: true,
  },
  {
    id: "M005",
    name: "Menu Manchester",
    contents: [
      "Fish and Chips",
      "Collard greens",
      "Potatoe Pie Slice",
      "Grilled Octopus",
    ],
    price: 35.0,
    active: true,
    water: true,
  },
  {
    id: "S001",
    name: "Menu Waygu",
    contents: [
      "Waygu Steak",
      "Rissotto with Black Truffle",
      "Caviar toasts",
      "Oyster egg",
    ],
    price: 60.0,
    active: true,
    water: true,
  },
];


export default function Menus (){


    return (
      <>
        <div class="w3-container w3-section">
          <h1>Menus</h1>

          <div class="w3-container">
            <h2>Available Menus</h2>
            <div class="w3-cell">
              <MenuFromData menu={menus[0]} />
            </div>
            <div class="w3-cell">
              <MenuFromData menu={menus[4]} />
            </div>
            <div class="w3-cell">
              <MenuFromData menu={menus[2]} />
            </div>
            <div class="w3-cell">
              <MenuFromData menu={menus[3]} />
            </div>
          </div>

          <div class="w3-container">
            <h2>Special QuickBite</h2>
            <div>
              <MenuFromData menu={menus[5]} />
            </div>
          </div>

          <div className="w3-container w3-text-line-through">
            <h2>Unavailable Menus</h2>
            <div class="w3-cell">
              <MenuFromData menu={menus[1]}/>
            </div>
          </div>

          
        </div>
        
      </>
    );
}