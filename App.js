import React, { useState } from "react";
import FestividadCard from "./FestividadCard"; 

const estilos = {
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    padding: "2rem",
  },
  titulo: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
};

function App() {
  const festividadesIniciales = [
    {
      id: 1,
      nombre: "Inti Raymi",
      provincia: "Imbabura",
      descripcion:
        "Celebración ancestral en honor al sol y la cosecha, especialmente importante para los pueblos indígenas.",
      fecha: "21 de junio",
    },
    {
      id: 2,
      nombre: "Carnaval",
      provincia: "Tungurahua",
      descripcion:
        "Celebración con agua, espuma y música que antecede la Cuaresma.",
      fecha: "Febrero (varía según el año)",
    },
    {
      id: 3,
      nombre: "Diablada de Píllaro",
      provincia: "Tungurahua",
      descripcion:
        "Fiesta popular donde personas se disfrazan de diablos y danzan por las calles.",
      fecha: "1 al 6 de enero",
    },
    {
      id: 4,
      nombre: "Fiesta de la Mama Negra",
      provincia: "Cotopaxi",
      descripcion:
        "Festividad mestiza en honor a la Virgen de las Mercedes, mezcla de tradiciones indígenas, africanas y españolas.",
      fecha: "Septiembre y noviembre",
    },
    {
      id: 5,
      nombre: "Día de los Difuntos",
      provincia: "Todo el país",
      descripcion:
        "Día de conmemoración de los seres queridos fallecidos, acompañado de comida tradicional como colada morada y guaguas de pan.",
      fecha: "2 de noviembre",
    },
  ];

  const [favoritos, setFavoritos] = useState([]);
  const [clicks, setClicks] = useState({});
  const [detallesVisibles, setDetallesVisibles] = useState({});

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const toggleDetalle = (id) => {
    const nuevoEstado = !detallesVisibles[id];

    setDetallesVisibles((prev) => ({
      ...prev,
      [id]: nuevoEstado,
    }));

    if (nuevoEstado) {
      setClicks((prevClicks) => ({
        ...prevClicks,
        [id]: (prevClicks[id] || 0) + 1,
      }));
    }
  };

  return (
    <div style={estilos.app}>
      <h1 style={estilos.titulo}>Festividades Tradicionales del Ecuador</h1>
      <div style={estilos.grid}>
        {festividadesIniciales.map((fest) => (
          <FestividadCard
            key={fest.id}
            festividad={fest}
            esFavorito={favoritos.includes(fest.id)}
            detalleVisible={detallesVisibles[fest.id]}
            clickCount={clicks[fest.id] || 0}
            toggleDetalle={toggleDetalle}
            toggleFavorito={toggleFavorito}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
