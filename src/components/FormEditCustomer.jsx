import { Link, Form as MainForm, useLoaderData } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "./Modal";
import classes from "../assets/css/NewCustomer.module.css";

export default function FormEditCustomer() {
  const customer = useLoaderData();

  return (
    <Modal>
      <MainForm method="post" className={classes.form}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre del Cliente:</Form.Label>
          <Form.Control name="name" defaultValue={customer.name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Apellido del Cliente:</Form.Label>
          <Form.Control name="lastName" defaultValue={customer.lastName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Correo del cliente:</Form.Label>
          <Form.Control
            as="textarea"
            name="email"
            rows={3}
            defaultValue={customer.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Telefono del Cliente:</Form.Label>
          <Form.Control
            as="textarea"
            name="phone"
            rows={1}
            defaultValue={customer.phone}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
          <Form.Label>Direccion del cliente:</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            rows={1}
            defaultValue={customer.address}
          />
        </Form.Group>
        <div className={classes.actions}>
          <div className={classes.back}>
            <Link className="nav-link" to="..">
              Cancelar
            </Link>
          </div>
          <button>Actualizar</button>
        </div>
      </MainForm>
    </Modal>
  );
}
