import Card from "./componentes/Card";
import "./App.css";

function App() {
  const departamento = ["La Paz", "Cochabanba", "Oruro"];
  const colores = ["rojo","verde","cafe"]
  return (
    <>
      <div>
        {departamento.map((ciudades, index) => (
          <Card atributo={ciudades} colores={colores[index]}/>
        ))}
      </div>
    </>
  );
}

export default App;
