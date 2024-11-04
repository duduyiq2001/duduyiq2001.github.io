import React from "react";

const Home: React.FC = () => {
  return (
    <div
      style={{
        color: "#33ff49",
        overflowY: "scroll",
        height: "100vh",
        padding: "20px",
      }}
    >
      <section>
        <h1>About Me</h1>
        <p>Information about me...</p>
      </section>
      <section>
        <h1>Recent Projects</h1>
        <p>Details about recent projects...</p>
      </section>
    </div>
  );
};

export default Home;
