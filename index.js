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
    let btn =document.getElementById('themes-container').getElementsByTagName("button")[1]
    const themebox = document.getElementById('themes-container');
    console.log(btn)
    btn.onclick = () => {console.log("Button clicked"); themebox.style.visibility = "hidden"; getQuestions()}


    
  })

 }

 function startGame(elem) {
    const personbtn = document.getElementsByTagName('button')[0];
    personbtn.addEventListener('click',)
     console.log("inside start game")
    //  console.log(personbtn)
    //  if(elem.target == personbtn) {
    //       console.log(elem.target)
    //     themebox.style.visibility = "hidden";
    //   }
  


 }





//  () => themebox.style.visibility = "hidden"

// document.getElementById('themes-container').getElementsByTagName("button")[1];
//<button>​ person​</button>​