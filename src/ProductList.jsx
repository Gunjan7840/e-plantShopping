import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/CartSlice";

const plantCategories = {
  "Indoor Plants": [
    { id: 1, name: "Snake Plant", price: 250, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Money Plant", price: 180, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Peace Lily", price: 300, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Aloe Vera", price: 200, image: "https://via.placeholder.com/150" },
    { id: 5, name: "ZZ Plant", price: 350, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Spider Plant", price: 220, image: "https://via.placeholder.com/150" }
  ],

  "Outdoor Plants": [
    { id: 7, name: "Rose", price: 150, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Hibiscus", price: 170, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Jasmine", price: 200, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Tulsi", price: 120, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Bougainvillea", price: 250, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Sunflower", price: 140, image: "https://via.placeholder.com/150" }
  ],

  "Succulents": [
    { id: 13, name: "Echeveria", price: 180, image: "https://via.placeholder.com/150" },
    { id: 14, name: "Haworthia", price: 160, image: "https://via.placeholder.com/150" },
    { id: 15, name: "Jade Plant", price: 220, image: "https://via.placeholder.com/150" },
    { id: 16, name: "Cactus", price: 130, image: "https://via.placeholder.com/150" },
    { id: 17, name: "Sedum", price: 170, image: "https://via.placeholder.com/150" },
    { id: 18, name: "Kalanchoe", price: 190, image: "https://via.placeholder.com/150" }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Plant Collection</h1>

      {Object.entries(plantCategories).map(([category, plants]) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "180px",
                  textAlign: "center"
                }}
              >
                <img src={plant.image} alt={plant.name} width="100%" />
                <h3>{plant.name}</h3>
                <p>₹{plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
