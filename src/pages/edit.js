import React, { useState, useEffect } from "react";
import api from "../services/api";
import { useHistory, useParams } from "react-router-dom";
import "./styles.css";

const Edit = () => {


  const { id } = useParams();

  console.log(id)

  const navigate = useHistory();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const getDate = (deadline) => {
    return deadline && deadline.split("T")[0];
  };

  const getHour = (deadline) => {
    return deadline && deadline.split("T")[1].substring(0, 5);
  };

   const update = async (e) => {
     e.preventDefault();

     await api
       .put(`commitments/${id}/`, { name, title, deadline: `${date} ${time}` })
       .catch((err) => console.log(err));

      navigate.push('/')
   };


  const fetchData = async () => {
    await api.get(`/commitments/${id}`).then((data) => {

      const commitment = data.data;
      setName(commitment.name)
      setTitle(commitment.title)
      setTime(getHour(commitment.deadline))
      setDate(getDate(commitment.deadline))
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Atualizar compromisso</h1>
        <form onSubmit={update}>
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

          <input type={"submit"} value="Atualizar" />
        </form>
      </div>
    </div>
  );
};

export default Edit;
