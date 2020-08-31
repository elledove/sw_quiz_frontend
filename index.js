const questionsurl = "http://localhost:3000/api/questions"

document.addEventListener('DOMContentLoaded',() => {
    getQuestions();
//     console.log("Dom Loaded successfully")
//     fetch(questionsurl)
//     .then( response => response.json())
//    .then(data => {
//         console.log(data)

//     })
        
})


 function getQuestions() {
     fetch(questionsurl)
    .then(response => response.json())
     .then(questions => {
      questions.data.forEach(question => {
         const questionlist = 
         `<div data-id=${question.id}> 
         <h4>${question.attributes.a_question} </h4>
         <p>${question.attributes.theme.name} </p>  
         </div>
         <br></br>`;
         document.querySelector('#questions-container').innerHTML += questionlist;

      })

     })



 }