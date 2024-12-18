import { Form as MainForm, Link } from "react-router-dom";
import Modal from "./Modal";
import classes from "../assets/css/NewCustomer.module.css";

export default function DeleteCustomerModal() {
  return (
    <Modal>
      <MainForm method="delete" className={classes.form}>
        <h3>¿Estás seguro de eliminar este cliente?</h3>
        <p>Esta acción no se puede deshacer.</p>
        <div className={classes.actions}>
          <div className={classes.back}>
            <Link className="nav-link" to="..">
              Cancelar
            </Link>
          </div>
          <button className="btn btn-danger">Eliminar</button>
        </div>
      </MainForm>
    </Modal>
  );
}
