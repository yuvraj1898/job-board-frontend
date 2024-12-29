import React from "react";
import Header from "../components/Header";
import PublicHeader from "../components/PublicHeader";
import useAuth from "../hooks/useAuth";

const RouteWrapper = ({ element, isProtected }) => {
  const isValid = useAuth(); // Ensures this is a proper React component

  if (isProtected && isValid === null) {
    // Show loading or skeleton while validation is in progress
    return <div>Loading...</div>;
  }

  if (isProtected && isValid === false) {
    // Token is invalid; `useAuth` already handles navigation
    return null;
  }

  return (
    <>
      {isProtected ? <Header /> : <PublicHeader />}
      {element}
    </>
  );
};

export default RouteWrapper;
