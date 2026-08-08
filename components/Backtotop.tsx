"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
export default function Backtotop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      id="backToTop"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`transition-all fixed bottom-0 right-0 mb-5 mr-5 z-12 dark:bg-dark-ash dark:text-muted dark:border-border-gray dark:shadow-dark-ash bg-white text-gray-800 shadow-md shadow-gray-400 border border-gray-100 p-3 rounded-4xl hover:-translate-y-1 active:scale-95 ${
        visible
          ? "opacity-100 translate-y-0 cursor-pointer"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FaArrowUp />
    </button>
  );
}
