import React from "react";
import "./Encabezado.css";

const Encabezado = ({atributo}) => {
  return (
    <div>
      <div className={`encabezado ${atributo}`}>
        <span>Viaje a {atributo}</span>
      </div>
      <div>
        <span>$25</span>
      </div>
    </div>
  );
};

export default Encabezado;
