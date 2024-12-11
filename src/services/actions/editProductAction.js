import { redirect } from "react-router-dom";

export default async function editProductAction({ request, params }) {
  const formData = await request.formData();
  const productData = Object.fromEntries(formData.entries());

  await fetch(`http://localhost:8080/products/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(productData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("Se editaron los datos correctamente.");
  return redirect("/products");
}
