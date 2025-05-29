import { Outlet } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import CustomAppBar from "./navbar"; // Adjust path

const ProtectedLayout = () => {
  return (
    <>
      <CssBaseline />
      <CustomAppBar />
      <>
        <Outlet />
      </>
    </>
  );
};

export default ProtectedLayout;
