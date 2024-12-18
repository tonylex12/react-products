import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import { productsLoader } from "../services/loaders/productsLoader";
import FormNewProduct from "../components/FormNewProduct";
import FormEditProduct from "../components/FormEditProduct";
import newProductAction from "../services/actions/newProductAction";
import editProductAction from "../services/actions/editProductAction";
import ProductDetails from "../components/ProductDetails";
import { productDetailsLoader } from "../services/loaders/productDetailsLoader";
import Products from "../pages/Products";
import DeleteProductModal from "../components/DeleteProductModal";
import deleteProductAction from "../services/actions/deleteProductAction";
import Customers from "../pages/Customers";
import { customersLoader } from "../services/loaders/customersLoader";
import FormNewCustomer from "../components/FormNewCustomer";
import newCustomerAction from "../services/actions/newCustomerAction";
import CustomerDetails from "../components/CustomerDetails";
import { customerDetailsLoader } from "../services/loaders/customerDetailsLoader";
import FormEditCustomer from "../components/FormEditCustomer";
import editCustomerAction from "../services/actions/editCustomerAction";
import DeleteCustomerModal from "../components/DeleteCustomerModal";
import deleteCustomerAction from "../services/actions/deleteCustomerAction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
        children: [
          {
            path: "/products/create-product",
            element: <FormNewProduct />,
            action: newProductAction,
          },
          {
            path: "/products/:id",
            element: <ProductDetails />,
            loader: productDetailsLoader,
          },
          {
            path: "/products/edit-product/:id",
            element: <FormEditProduct />,
            action: editProductAction,
            loader: productDetailsLoader,
          },
          {
            path: "/products/delete-product/:id",
            element: <DeleteProductModal />,
            action: deleteProductAction,
            loader: productDetailsLoader,
          },
        ],
      },
      {
        path: "/customers",
        element: <Customers />,
        loader: customersLoader,
        children: [
          {
            path: "/customers/create-customer",
            element: <FormNewCustomer />,
            action: newCustomerAction,
          },
          {
            path: "/customers/:id",
            element: <CustomerDetails />,
            loader: customerDetailsLoader,
          },
          {
            path: "/customers/edit-customer/:id",
            element: <FormEditCustomer />,
            action: editCustomerAction,
            loader: customerDetailsLoader,
          },
          {
            path: "/customers/delete-customer/:id",
            element: <DeleteCustomerModal />,
            action: deleteCustomerAction,
            loader: customerDetailsLoader,
          },
        ],
      },
    ],
  },
]);
