import { Outlet, useLoaderData } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const Customers = () => {
  const customers = useLoaderData();
  return (
    <div>
      <Outlet></Outlet>
      <div className="container">
        <h1>Clientes</h1>
        <Button variant="warning">
          <Link className="nav-link" to="/customers/create-customer">
            Nuevo Cliente
          </Link>
        </Button>

        <Table responsive striped bordered className="mt-4">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Direccion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link
                      style={{ marginRight: "10px", marginLeft: "10px" }}
                      to={`/customers/${item.id}`}
                    >
                      <FaEye />
                    </Link>
                    <Link
                      style={{ marginRight: "10px", marginLeft: "10px" }}
                      to={`/customers/edit-customer/${item.id}`}
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      style={{ marginRight: "10px", marginLeft: "10px" }}
                      to={`/customers/delete-customer/${item.id}`}
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
};

export default Customers;
