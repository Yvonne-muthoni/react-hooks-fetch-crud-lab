import React,{useState,useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const[question,setQuestion]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then((res)=>res.json())
    .then((question)=>setQuestion(question))
  },[])

  function handleDeletedQuestion(deletedItem){
     console.log("done",deletedItem);
     const updateItems = question && question.filter((quest) =>  
      quest.id !== deletedItem);
      setQuestion(updateItems);
  }
  return (
    <section>
      <h1>Quiz Questions{question && question.map((question)=>(
       <QuestionItem
       key={question.id}
       question={question}
       onDeleteItem={handleDeletedQuestion}
        /> 
      ))}
      </h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
