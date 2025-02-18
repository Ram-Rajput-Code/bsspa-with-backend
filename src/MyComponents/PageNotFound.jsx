import React from "react";

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1>404</h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
};

export default PageNotFound;
