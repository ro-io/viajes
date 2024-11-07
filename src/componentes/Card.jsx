import React from "react";
import Encabezado from "./Encabezado";

const Card = ({ atributo }) => {
  return (
    <div>
      <Encabezado atributodos={atributo} />
      <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptatum quas a. Ducimus voluptatum laboriosam a nostrum ad deleniti nulla nemo, molestias dolor! Optio voluptates quisquam assumenda eos. Explicabo, neque.</span>
      <button>Comprar {atricolor}</button>
    </div>
  );
};

export default Card;
