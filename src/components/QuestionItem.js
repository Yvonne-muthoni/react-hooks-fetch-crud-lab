import React from "react";

function QuestionItem({ question, onDeleteItem}) {
  const { id, prompt, answers, correctIndex } = question;

  const options =answers && answers.length>0 ? answers.map((answer, index) => (
    <option key={index} value={index}>
      {''} console.log(question);
      {answer}
    </option>
  ))
  : null

  const handleDelete=()=>{
    console.log(question.id);
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method:'DELETE',
    })
    .then(()=>onDeleteItem(question.id))
  };
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
