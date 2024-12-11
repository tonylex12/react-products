import { Link, Form as MainForm, useLoaderData } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "./Modal";
import classes from "../assets/css/NewProduct.module.css";

export default function FormEditProduct() {
  const product = useLoaderData();

  return (
    <Modal>
      <MainForm method="post" className={classes.form}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre del Producto:</Form.Label>
          <Form.Control name="title" defaultValue={product.title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción del producto:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            defaultValue={product.description}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Categoría del producto:</Form.Label>
          <Form.Control
            as="textarea"
            name="category"
            rows={1}
            defaultValue={product.category}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
          <Form.Label>Precio del producto:</Form.Label>
          <Form.Control
            as="textarea"
            name="price"
            rows={1}
            defaultValue={product.price}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
          <Form.Label>Descuento:</Form.Label>
          <Form.Control
            as="textarea"
            name="discount"
            rows={1}
            defaultValue={product.discount}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea5">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            as="textarea"
            name="rating"
            rows={1}
            defaultValue={product.rating}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea6">
          <Form.Label>Stock:</Form.Label>
          <Form.Control
            as="textarea"
            name="stock"
            rows={1}
            defaultValue={product.stock}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea7">
          <Form.Label>Marca:</Form.Label>
          <Form.Control
            as="textarea"
            name="brand"
            rows={1}
            defaultValue={product.brand}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea8">
          <Form.Label>Peso:</Form.Label>
          <Form.Control
            as="textarea"
            name="weight"
            rows={1}
            defaultValue={product.weight}
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
