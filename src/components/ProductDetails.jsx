import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "../assets/css/ProductDetails.module.css";

export default function ProductDetails() {
  const product = useLoaderData();

  if (!product) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>ID: {product.id}</p>
        <p className={classes.text}>Nombre: {product.title}</p>
        <p className={classes.text}>Descripción: {product.description}</p>
        <p className={classes.text}>Categoría: {product.category}</p>
        <p className={classes.text}>Precio: {product.price}</p>
        <p className={classes.text}>Descuento: {product.discount}</p>
        <p className={classes.text}>Rating: {product.rating}</p>
        <p className={classes.text}>Stock: {product.stock}</p>
        <p className={classes.text}>Marca: {product.brand}</p>
        <p className={classes.text}>Peso: {product.weight}</p>
      </main>
    </Modal>
  );
}
