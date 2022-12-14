import styles from "./ProjectCards.module.css";
import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjectCards({ id, name, budget, category, handleRemove }) {
  return (
    <div className={styles.project__card}>
      <div>
        <h4>{name}</h4>
        <p>
          <span>Orçamento</span>R${budget}{" "}
        </p>
        <p className={styles.category__text}>
          <span className={`${styles[category]}`}></span> {category}{" "}
        </p>
        <div className={styles.project__card__actions}>
        <Link to="/">
            <BsPencil /> Editar
          </Link>
          <button>
            <BsFillTrashFill /> Excluir
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
