import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineSmsFailed } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Snack({
  status = "info",
  message = "Add a 'message' attribute",
}) {
  switch (status) {
    case "success":
      return success();
    case "error":
      return error();
    case "info":
      return info();
    default:
      return info();
  }

  function success() {
    return (
      <motion.div
        id="snack"
        initial={{ opacity: 0, y: 100, x: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, y: 100 }}
        style={{
          background: "#79E791",
          position: "fixed",
          bottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.7rem 1.2rem",
          gap: "0.5rem",
          borderRadius: "5px",
          left: "50%",
        }}
      >
        <AiOutlineCheckCircle style={{ fontSize: "1.5rem", color: "#333" }} />
        <span style={{ color: "#333", fontWeight: "bold" }}>
          {message.toUpperCase()}
        </span>
      </motion.div>
    );
  }

  function error() {
    return (
      <motion.div
        id="snack"
        initial={{ opacity: 0, y: 100, x: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, y: 100 }}
        style={{
          background: "#E77979",
          position: "fixed",
          bottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.7rem 1.2rem",
          gap: "0.5rem",
          borderRadius: "5px",
          left: "50%",
        }}
      >
        <MdOutlineSmsFailed style={{ fontSize: "1.5rem", color: "#333" }} />
        <span style={{ color: "#333", fontWeight: "bold" }}>
          {message.toUpperCase()}
        </span>
      </motion.div>
    );
  }

  function info() {
    return (
      <motion.div
        id="snack"
        initial={{ opacity: 0, y: 100, x: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, y: 100 }}
        style={{
          background: "#E0E0E0",
          position: "fixed",
          bottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.7rem 1.2rem",
          gap: "0.5rem",
          borderRadius: "5px",
          left: "50%",
        }}
      >
        <AiOutlineInfoCircle style={{ fontSize: "1.5rem", color: "#333" }} />
        <span style={{ color: "#333", fontWeight: "bold" }}>
          {message.toUpperCase()}
        </span>
      </motion.div>
    );
  }
}
