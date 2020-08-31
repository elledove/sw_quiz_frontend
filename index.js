const questionsurl = "http://localhost:3000/api/questions"

document.addEventListener('DOMContentLoaded',() => {
    console.log("Dom Loaded successfully")
    fetch(questionsurl)
    .then( response => response.json())
    .then(question => {
        console.log(question)

    })

})