import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <ThemeProvider>
      <ToastContainer position="top-center" />
      <>
        {!loading ? (
          <RouterProvider router={router} />
        ) : (
          // <div >
          //   <Navbar />
          //   <Home />
          //   <About />
          //   <Services />
          //   <Projects />
          //   <Contact />
          // </div>

          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
