import express from "express";

// Crear una instancia de Express
const app = express();
const PORT = 3000;

// Ruta GET con parámetro de RUTA
// Solicitud: http://localhost:3000/user/123
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  console.log(`ID del usuario recibido: ${userId}`);
  res.send(`Perfil del usuario con ID: ${userId}`);
});

// Ruta con parámetro de CONSULTA
// Solicitud: http://localhost:3000/search?keyword=javascript
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  res.send(`Resultado de búsqueda para: ${keyword}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
