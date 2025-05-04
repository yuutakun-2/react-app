import { createContext, useContext, useMemo, useEffect } from "react";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import { QueryClientProvider, QueryClient } from "react-query";

import AppRouter from "./AppRouter";

import AppSocket from "./AppSocket";
import useStore from "./store/store";

const queryClient = new QueryClient();

export default function AppProvider() {
  const mode = useStore((state) => state.mode);
  const setAuth = useStore((state) => state.setAuth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${import.meta.env.VITE_API}/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          setAuth(user);
        })
        .catch(() => {
          setAuth(false);
          localStorage.removeItem("token");
        });
    }
  }, []);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
      },
    });
  }, [mode]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppRouter />
        <AppSocket />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
