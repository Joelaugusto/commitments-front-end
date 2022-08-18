import React from "react";  
import CommitmentContainer from "../components/CommitmentContainer/CommitmentsContainer";
import { Link} from "react-router-dom";
import './styles.css'

const HomePage = () => {


    return (
      <div>
        <h1>Gestor de Compromissos</h1>
        <Link className="create-btn" to={"create"}>
          Criar novo compromisso
        </Link>
        <CommitmentContainer />
      </div>
    );

}

export default HomePage;