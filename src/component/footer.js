import React from "react";
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer text-center text-white">
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <div
        className="text-center p-3"
      >
        © 2024 Copyright:
        <a href="../Home">
          MoodChef.com
        </a>
      </div>
    </footer>
  );
}
