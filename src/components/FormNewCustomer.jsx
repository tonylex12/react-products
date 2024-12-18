import { Link, Form as MainForm } from "react-router-dom";

import Form from "react-bootstrap/Form";

import Modal from "./Modal";
import classes from "../assets/css/NewProduct.module.css";

export default function FormNewCustomer() {
  return (
    <Modal>
      <MainForm method="post" className={classes.form}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre del Cliente:</Form.Label>
          <Form.Control name="name" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Apellido del Cliente:</Form.Label>
          <Form.Control name="lastName" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Correo del Cliente:</Form.Label>
          <Form.Control name="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
          <Form.Label>Telefono del Cliente:</Form.Label>
          <Form.Control name="phone" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
          <Form.Label>Direccion del Cliente:</Form.Label>
          <Form.Control name="address" placeholder="" />
        </Form.Group>
        <div className={classes.actions}>
          <div className={classes.back}>
            <Link className="nav-link" to="..">
              Cancelar
            </Link>
          </div>
          <button>Crear</button>
        </div>
      </MainForm>
    </Modal>
  );
}
