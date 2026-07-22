export async function obtenerItems() {
  const res = await fetch("/api/mcItems/", { credentials: "include" });

  // Convierte la response en json
  const data = await res.json();

  // Si no devuelve 200 OK
  if (!res.ok) {
    throw new Error(data.message);
  }

  // Deveulve los items
  return data.items;
}
