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
    ],
  },
]);
