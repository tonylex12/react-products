import { Outlet, Link, useLoaderData } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

import "../assets/css/Products.module.css";

export default function Products() {
  const products = useLoaderData();
  return (
    <div>
      <Outlet></Outlet>
      <div className="container">
        <h1 className="my-4">Productos</h1>
        <Button variant="warning" className="my-2">
          <Link className="nav-link" to="/products/create-product">
            Nuevo Producto
          </Link>
        </Button>

        <Table responsive striped bordered className="mt-4">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>% de Descuento</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Marca</th>
              <th>Peso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              let editarProducto = "edit-product/" + item.id;
              let eliminarProducto = "delete-product/" + item.id;
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>{item.rating}</td>
                  <td>{item.stock}</td>
                  <td>{item.brand}</td>
                  <td>{item.weight}</td>
                  <td>
                    <Link
                      style={{ marginRight: "10px", marginLeft: "10px" }}
                      to={item.id}
                    >
                      <FaEye />
                    </Link>
                    <Link
                      style={{ marginRight: "10px", marginLeft: "10px" }}
                      to={editarProducto}
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      style={{ marginRight: "10px", marginLeft: "10px" }}
                      to={eliminarProducto}
                    >
                      <FaTrash />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
