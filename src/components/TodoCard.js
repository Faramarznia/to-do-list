import Modal from "./Modal";
import { useState } from "react";
import Backdrop from "./Backdrop";

let statusClassName = "black-status";

function TodoCard(props) {


  const [firstState, secondState] = useState("در حال انجام");
  const [isModalOPen, setIsModalOpen] = useState(false);

  function detailsHandler() {
    setIsModalOpen(true);
  }
  function closeModalHandler() {
    setIsModalOpen(false);
  }
  
  

  function doneHandler() {
    setIsModalOpen(false);
    statusClassName = "green-status";
    secondState("انجام شد جیگر :)");
}

function undoneHandler() {
  setIsModalOpen(false);
  statusClassName = "red-status";
  secondState("متاسفانه نشد که بشه :(");
}
const title = [props.title];
  sessionStorage.setItem("title", title);
  return (
    <div className="card">
      <div>
        <h1>{props.title}</h1>
        <h2 id="done"  className={statusClassName} > {firstState} </h2>
        
        <button className="btn" onClick={detailsHandler}>
          توضیحات بیشتر
        </button>
      </div>
      {isModalOPen ? (
        <Modal onUndone={undoneHandler} onDone={doneHandler} />
      ) : null}
      {isModalOPen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
}

export default TodoCard;
