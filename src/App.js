import React from "react";
import { motion } from "framer-motion";
import cherries from "./images/cherries.png";
import peaches from "./images/peaches.png";
import melons from "./images/melons.png";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      {/* Header */}
      <header
        style={{
          flex: "0 0 auto",
          padding: "1rem",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2.5rem",
          borderBottom: "1px solid #ddd",
          userSelect: "none",
        }}
      >
        CMRN RETAIL LLC
      </header>

      {/* Main content with images */}
      <main
        style={{
          flex: "1 1 auto",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <motion.img
          src={cherries}
          alt="Cherries"
          style={{
            flex: 1,
            objectFit: "cover",
            width: "33.33%",
            height: "100%",
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={peaches}
          alt="Peaches"
          style={{
            flex: 1,
            objectFit: "cover",
            width: "33.33%",
            height: "100%",
          }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        />
        <motion.img
          src={melons}
          alt="Melons"
          style={{
            flex: 1,
            objectFit: "cover",
            width: "33.33%",
            height: "100%",
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
        />
      </main>

      {/* Footer */}
      <footer
        style={{
          flex: "0 0 auto",
          padding: "0.75rem",
          textAlign: "center",
          fontSize: "1.25rem",
          color: "#6c757d", // Bootstrap text-secondary color
          borderTop: "1px solid #ddd",
          userSelect: "none",
        }}
      >
        <strong>info@cmrnretail.uz</strong>
      </footer>
    </div>
  );
}

export default App;
