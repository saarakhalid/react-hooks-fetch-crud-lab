import React, { useState, useEffect } from "react";
// import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";
function QuestionList() {

  // const [selectedCategory, setSelectedCategory] = useState([])
  const [question, setItems] = useState([]); 
 useEffect(() =>{
  fetch('  http://localhost:4000/questions')
  .then((r)=> r.json())
  .then((question)=> setItems(question))
 },[]) 

 function handleDeletedQuestion(deletedItem){
  console.log("done", deletedItem);
  const updateItems = question && question.filter((quest) =>  
  quest.id !== deletedItem);
  setItems(updateItems);
 }

  return (
    <section>
      <h1>
        Quiz Questions
        {question &&
          question.map((question) => (
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