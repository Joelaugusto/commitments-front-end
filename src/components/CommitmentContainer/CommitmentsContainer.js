import React, { useState, useEffect} from "react";
import Commitment from "../Commitment/Commitment";
import api from "../../services/api";
import './styles.css'

const CommitmentContainer = (props) => {


  const [commitments, setCommitments] = useState([])    

  const getDate = (deadline) => {
    return deadline && deadline.split('T')[0];
   }

  const getHour = (deadline) => { 
    return deadline && deadline.split("T")[1].substring(0,5);
  }

  const deleteCommitments = async(id) => { 

    await api.delete(`/commitments/${id}`);
    await fetchData();

  }
  const fetchData = async () => {
    await api.get("/commitments").then((data) => {
      setCommitments(data.data.content);
    });
  };
  

  useEffect(() => {
    

   fetchData();
  
    
  }, [])
  

  return (
    <div className="container">
      {commitments &&
        commitments.map((commitment) => (
          <Commitment
            key={commitment.id}
            id={commitment.id}
            name={commitment.name}
            title={commitment.title}
            date={getDate(commitment.deadline)}
            hour={getHour(commitment.deadline)}
            delete={deleteCommitments}
            
          ></Commitment>
        ))}
    </div>
  );

};

export default CommitmentContainer;
