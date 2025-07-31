import React, { useEffect } from "react";
import { selectBookList, getBooks, removeBook } from "../../features/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BookList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(selectBookList);

  const getBookList = async () => {
    dispatch(getBooks());
  };

  useEffect(() => {
    getBookList();

    // eslint-disable-next-line
  }, []);

  function handleCreate(e) {
    e.preventDefault();
    navigate("/book/add");
  }

  const handleRemoveBook = async (bookId, bookName) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove "${bookName}"?`
    );
    if (!confirmed) return;

    try {
      dispatch(removeBook(bookId));
      alert(`Remove book successfully!!!`);
      window.location.reload();
    } catch (err) {
      console.error("Failed to remove book:", err);
      alert("Failed to remove book.");
    }
  };

  return (
    <div className="main-content">
      <h2>Book List</h2>

      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>
                <a href="#" className="btn btn-add" onClick={handleCreate}>
                  Create
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title} </td>
                <td>{book.quantity} </td>
                <td>
                  <a
                    href="#"
                    className="btn btn-view"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/product/view/${book.id}`);
                    }}
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="btn btn-edit"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/product/edit/${book.id}`);
                    }}
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="btn btn-remove"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveBook(book.id, book.title);
                    }}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
