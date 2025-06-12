const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb",
});

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar con la BD:", err);
    return;
  }
  console.log("Conexión a MySQL exitosa");
});

module.exports = connection;
