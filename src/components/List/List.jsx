/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./List.module.css"

const List = ({tasks,isCheckHandler,isEditingHandler,cancelHandler,itemListChangeHandler,itemListDateChangeHandler,itemSaveHandler,deleteHandler}) => {
  const listItems = tasks.map((task,index)=>(

        <div key={index} className="border border-primary-subtle rounded p-2 w-sm-25">
          {!task.isEditing && (
            <>
            <p>{task.item}</p>
            <p>Due Date: {task.dueDate} </p>
            </>
          )}
          {task.isEditing && (
            <>
            <div className="d-flex flex-column gap-1">
            <textarea type="text" value={task.editingItem} className="p-1" onChange={(val)=>itemListChangeHandler(index,val.target.value)}/>
            <input type="date" value={task.editDate} className="p-1" onChange={(val)=>itemListDateChangeHandler(index,val.target.value)}/>
            </div>
            <div className="d-flex justify-content-center mt-2 mb-1">
            <Button variant="transparent" onClick={()=>itemSaveHandler(index)}>Save</Button>
            <Button variant="transparent" onClick={()=>cancelHandler(index)}>Cancel</Button>
            </div>
            </>
          )}
          <div className="d-flex justify-content-evenly h-25 align-items-center">
            <input type="checkbox" onClick={()=>isCheckHandler(index)} disabled={task.isDone === true}/>
            <Button variant="transparent" className="border-none" onClick={() => isEditingHandler(index)} disabled={task.isDone === true} id={styles.Edit}>Edit</Button>
            <Button variant="transparent" id={styles.delete} onClick={()=>deleteHandler(index)}>Delete</Button>
          </div>
        </div>
       
  ));
  return (
    <>
      <div className="container-fluid d-flex flex-column flex-md-row gap-2 flex-wrap justify-content-center">
        {listItems}    
      </div>
    </>
  );
};

export default List;
