import React, { useState } from "react";
import { FlexForm } from "./elements/index";
import { useInputValue } from "./hooks/useInputValue";

const initialFormState = {
  title: "",
  publisher: "",
  location: "",
  year: ""
};

const Book = () => {
  const [form, setForm] = useState(initialFormState);
  const [book, setBook] = useState(null);

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setBook(form);
    setForm(initialFormState);
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" onChange={e => handleInput(e)} />
      <label htmlFor="publisher">Publisher</label>
      <input type="text" name="publisher" onChange={e => handleInput(e)} />
      <label htmlFor="location">Location</label>
      <input type="text" name="location" onChange={e => handleInput(e)} />
      <label htmlFor="year">Year</label>
      <input type="text" name="year" onChange={e => handleInput(e)} />
    </form>
  );
};

export default Book;
