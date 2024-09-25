import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg, redirect }) => {
  // <ProtectedRoute>
  //     <children />
  // </ProtectedRoute>
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } }); //payment--> /auth(/) by redirect
    }
  }, [user]);

  return children;
};

export default ProtectedRoute;
