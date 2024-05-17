import { createContext, useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./route/ProtectedRoute";
import LandingPages from "./pages/LandingPages";
import InvitationPages from "./pages/InvitationPages";
import { GuestContextItf, GuestDataItf } from "./context/GuestNameContext";
import LandingSolutionInput from "./components/LandingSolutionInput";

function App() {
  const lightTheme = {
    bgColor: "#ffffff",
    textColor: "black",
  };
  const darkTheme = {
    bgColor: "#414141",
    textColor: "white",
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <InvitationPages/>,
    },
    {
      path: "/landing",
      element: <ProtectedRoute />,
      // loader: rootLoader,
      children: [
        {
          path: "/landing",
          element: <LandingPages />,
        },
      ],
    },
    {
      path: "invitation",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/invitation",
          element: <InvitationPages />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);

  const initValueUserState: GuestDataItf = {
    name: "",
    age: 0,
    phone: "",
    RSVP: false,
    wishes: "",
  };

  const [guest, setGuest] = useState(initValueUserState)

  // const ThemeContext = createContext(null);
  const GuestContext = createContext<GuestContextItf>({guest, setGuest});
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GuestContext.Provider value={{guest, setGuest} }>
          <RouterProvider router={router} />
        </GuestContext.Provider>
      </ThemeProvider>
    </>
  );
} 

export default App;
