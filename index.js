const questionsurl = "http://localhost:3000/api/questions"
const themesurl = "http://localhost:3000/api/themes"



document.addEventListener('DOMContentLoaded',() => {
   //getQuestions();
    getThemes(event);
    
    //startGame(event);
//     console.log("Dom Loaded successfully")
//     fetch(questionsurl)
//     .then( response => response.json())
//    .then(data => {
        

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

//This function should be showing the themes buttons that are fetched from the api I created

 function getThemes(elem) {
  fetch(themesurl)
  .then(response => response.json())
  .then(themes => {
      themes.data.forEach(theme => {
          const themesOptions = 
          `<div> 
          <button> ${theme.attributes.name}</button>
          
          </div>
          <br> </br>`;

          document.querySelector("#themes-container").innerHTML += themesOptions;
      })
    console.log("still inside themes")
    const btn =document.getElementById('themes-container').getElementsByTagName("button")[1]
    const themebox = document.getElementById('themes-container');
    const quesbox = document.getElementById('questions-container');
    console.log(btn)
    btn.onclick = () => {console.log("Button clicked"); themebox.style.visibility = "hidden"; getQuestions()}    
    
    
  })
  

 }

 function filterQuestions() {
    
//    fetch(questionsurl)
//    .then(response => response.json())
//    .then(questions => console.log(questions))
   
   console.log("WHHY")
   console.log(document.getElementsByTagName('button')[3])
    
   
 }
 filterQuestions();
 



//  () => themebox.style.visibility = "hidden"

// document.getElementById('themes-container').getElementsByTagName("button")[1];
//<button>​ person​</button>​