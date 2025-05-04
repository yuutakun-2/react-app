import Header from "./components/Header";
import AppDrawer from "./components/AppDrawer";

import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";

export default function App() {
  return (
    <Box>
      <Header />
      <AppDrawer />

      <Container sx={{ mt: 4 }} maxWidth="md">
        <Outlet />
      </Container>
    </Box>
  );
}
