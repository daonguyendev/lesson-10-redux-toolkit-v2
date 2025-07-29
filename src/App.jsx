import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookList from "./components/book/BookList";
import BookDetail from "./components/book/BookDetail";
import BookAdding from "./components/book/BookAdding";
import BookEditing from "./components/book/BookEditing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path={`/book/:bookId`} element={<BookDetail />} />
        <Route path={"/book/add"} element={<BookAdding />} />
        <Route path={`/book/edit/:bookId`} element={<BookEditing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
