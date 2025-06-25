import React from "react";

const estilos = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "1.5rem",
    transition: "box-shadow 0.3s ease",
    fontFamily: "'Poppins', sans-serif",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.75rem",
  },
  nombre: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#222",
  },
  botonFavorito: {
    fontSize: "1.7rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#ccc",
    transition: "transform 0.2s",
  },
  botonFavoritoActivo: {
    color: "#f1c40f",
    transform: "scale(1.2)",
  },
  textoInfo: {
    color: "#555",
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
  descripcion: {
    marginTop: "1rem",
    fontSize: "0.95rem",
    color: "#444",
    lineHeight: "1.4",
    maxHeight: "1000px",
    overflow: "hidden",
    transition: "opacity 0.3s ease-in-out",
    opacity: 1,
  },
  descripcionOculta: {
    maxHeight: 0,
    opacity: 0,
    overflow: "hidden",
  },
  botonesContainer: {
    marginTop: "1.25rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botonDetalle: {
    background: "none",
    border: "none",
    color: "#2980b9",
    cursor: "pointer",
    fontSize: "0.9rem",
    textDecoration: "underline",
  },
  contador: {
    fontSize: "0.9rem",
    color: "#555",
  },
};

const FestividadCard = ({
  festividad,
  esFavorito,
  detalleVisible,
  clickCount,
  toggleDetalle,
  toggleFavorito,
}) => {
  return (
    <div style={estilos.card}>
      <div style={estilos.cardHeader}>
        <h2 style={estilos.nombre}>{festividad.nombre}</h2>
        <button
          onClick={() => toggleFavorito(festividad.id)}
          style={{
            ...estilos.botonFavorito,
            ...(esFavorito ? estilos.botonFavoritoActivo : {}),
          }}
          title="Marcar como favorito"
        >
          {esFavorito ? "★" : "☆"}
        </button>
      </div>
      <p style={estilos.textoInfo}>
        <strong>Provincia:</strong> {festividad.provincia}
      </p>
      <p style={estilos.textoInfo}>
        <strong>Fecha:</strong> {festividad.fecha}
      </p>

      <div
        style={
          detalleVisible
            ? estilos.descripcion
            : { ...estilos.descripcion, ...estilos.descripcionOculta }
        }
      >
        {festividad.descripcion}
      </div>

      <div style={estilos.botonesContainer}>
        <span style={estilos.contador}>Clicks: {clickCount}</span>
        <button
          onClick={() => toggleDetalle(festividad.id)}
          style={estilos.botonDetalle}
        >
          {detalleVisible ? "Ocultar detalle" : "Ver más"}
        </button>
      </div>
    </div>
  );
};

export default FestividadCard;
