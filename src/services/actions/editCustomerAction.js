import { redirect } from "react-router-dom";

export default async function editCustomerAction({ request, params }) {
  const formData = await request.formData();
  const customerData = Object.fromEntries(formData.entries());

  await fetch(`http://localhost:8080/customers/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(customerData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("Se editaron los datos correctamente.");
  return redirect("/customers");
}
