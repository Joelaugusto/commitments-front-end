import React, { useState } from "react";
import api from '../services/api'
import { useNavigate } from "react-router-dom";
import './styles.css'

const Create = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const create = async (e) => {
    e.preventDefault();

    await api.post('commitments', { name, title, deadline: `${date} ${time}` }).catch((err) => console.log(err));

    navigate("/");

  }

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Registrar novo compromisso</h1>
        <form onSubmit={create}>
          <label>Nome: </label>
          <input
            type="text"
            value={name}
            placeholder={"Nome"}
            minLength="2"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label>Titulo: </label>
          <input
            type="text"
            value={title}
            placeholder={"Título"}
            minLength="2"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label>Data: </label>
          <input
            type={"date"}
            min="2022-08-18"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
          />

          <label>Hora: </label>
          <input
            type={"time"}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            value={time}
          />

          <input type={"submit"} value="Registrar" />
        </form>
      </div>
    </div>
  );
};

export default Create;
