import React from "react";
import { Route, Routes } from "react-router-dom";
import BookDetail from "../components/book/BookDetail";
import BookAdding from "../components/book/BookAdding";
import BookEditing from "../components/book/BookEditing";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import BookPage from "../pages/BookPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/book" element={<BookPage />} />
      <Route path={`/book/:bookId`} element={<BookDetail />} />
      <Route path={"/book/add"} element={<BookAdding />} />
      <Route path={`/book/edit/:bookId`} element={<BookEditing />} />

      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
