export function obtenerFechaFutura() {
  let fechaActual = new Date();
  fechaActual.setMonth(fechaActual.getMonth() + 1);

  // Formatear la fecha en "YYYY-MM-DD"
  let year = fechaActual.getFullYear();
  let month = String(fechaActual.getMonth() + 1).padStart(2, "0"); // Asegura dos dígitos
  let day = String(fechaActual.getDate()).padStart(2, "0"); // Asegura dos dígitos

  return `${year}-${month}-${day}`;
}

export function obtenerFechaActual() {
  let fechaActual = new Date();

  let year = fechaActual.getFullYear();
  let month = String(fechaActual.getMonth() + 1).padStart(2, "0"); // Asegura dos dígitos
  let day = String(fechaActual.getDate()).padStart(2, "0"); // Asegura dos dígitos
  return `${year}-${month}-${day}`;
}
