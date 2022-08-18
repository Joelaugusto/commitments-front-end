import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";



const Commitment = (props) => (
  <div className="commitment">
    <p>Nome: {props.name}</p>
    <p>Título: {props.title}</p>
    <p>Data: {props.date}</p>
    <p>Hora: {props.hour}</p>

    <div>
      <button onClick={() => {props.delete(props.id)}}>Apagar</button>
      <Link to={`edit/${props.id}`}>Modificar</Link>
    </div>
  </div>
);


export default Commitment;