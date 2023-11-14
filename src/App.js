import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Category from "./pages/Category";
import ThemeContextProvider from "./context/themeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "category/:category",
    element: <Category />,
  },
]);


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
