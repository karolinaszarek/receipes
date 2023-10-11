import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Bill, Root } from './routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/bill/:billId",
    element: <Bill />,
  },
]);

ReactDOM.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  document.getElementById("root"),
);
