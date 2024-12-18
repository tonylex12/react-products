/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";

export default async function deleteCustomerAction({ request, params }) {
  const response = await fetch(`http://localhost:8080/customers/${params.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("No se pudo eliminar el producto");
  }

  alert("Cliente eliminado correctamente.");
  return redirect("/customers");
}
