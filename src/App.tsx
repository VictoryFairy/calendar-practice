import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./style/global";
import Layout from "./Layout/Layout";
import Calendar from "./Calendar";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/theme";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/calendar",
      element: (
        <Layout>
          <Calendar />
        </Layout>
      ),
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
