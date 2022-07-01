//Le fichier Json //

let request = new XMLHttpRequest();

request.open('GET', "https://romepassan.github.io/campusworkshop2022-team-ca13-03/json/fichier.json");

request.responseType = 'json';
request.send();

request.onload = function() {
	const Elements = ["para_1", "para_2"];
 	Elements.forEach(element => {

        const Tag = document.getElementById(element);
        Tag.innerHTML = request.response["main"][element];
})}


// Dark and Light Mod // 
function dark_mod(){ // Création d'une fonction qui change les paramètres en dark // 
    
    const dark_mod = document.getElementsByTagName('body')[0]
    dark_mod.style = 'color:white; background-color:black;'
    const header = document.getElementsByTagName('header')[0]
    header.style = 'background-image: url("./images/light.png")'
}

function light_mod(){ // Création d'une fonction qui change les paramètres en light // 
    
    const light_mod = document.getElementsByTagName('body')[0]
    light_mod.style = 'color:black; background-color:white;'
    const header = document.getElementsByTagName('header')[0]
    header.style = 'background-image: url("./images/dark.png")'
}

let vrai = true // Création d'une variable de comparéson // 
let but = document.getElementById('theme-switcher') // on récupère le buton //

but.addEventListener( // Evènement Click //
    'click',
    function(){
        if (vrai === true){ // Si vrai change en Light-mod // 
            light_mod()
            but.innerText = "Dark theme"
            vrai = false
        } 
        else{ // Si faux, change en light mod // 
            dark_mod() 
            but.innerText = "Light theme"
            vrai = true
        }  
    }
)

//slider//

var slide = new Array("./images/bg.jpg","./images/bg3.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}


//Fonction ajoutant un commentaire
function addComment() {
    const all_comment = document.getElementsByTagName("article")

    const article = document.createElement('article')
    article.id = "comment-" + all_comment.length
    article.className = "comment border rounded p-2 mb-3"

    const header = document.createElement('header')
    header.className = "mb-2 border-bottom"
    article.prepend(header)

    const strong = document.createElement('strong')
    strong.className = "d-block"
    const name = document.getElementById('nom').value
    strong.innerText = name
    header.prepend(strong)

    const time = document.createElement('time')
    date = getDate()
    time.dateTime = date[0]
    time.className = "d-block fst-italic"
    time.innerText = date[1]
    header.append(time)

    const p = document.createElement('p')
    const message = document.getElementsByTagName('textarea')[0].value
    p.innerText = message
    article.append(p)

    document.getElementById('comments-list').append(article)
}


//Fonction calculant la date automatiquement
function getDate() {
    const date = new Date(Date.now())
    const allMonths = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
    const annee = date.getFullYear()
    const mois = date.getMonth()
    const day = date.getDate()
    const heure = date.getHours()
    const minute = date.getMinutes()
    const date_time = annee + "-" + (mois+1) + "-" + day + " " + heure + ":" + minute + ":" + date.getSeconds()
    const inner_text = "le " +  day + " " + allMonths[mois] + " " + annee + " à " +  heure + "h" + minute
    return [date_time, inner_text]
}


//Ajout d'un commentaire lorsque l'utilisateur appuie sur le bouton
document.getElementsByTagName('form')[1].addEventListener (
    'submit',
    function (event) {
        event.preventDefault()
        addComment()
        document.getElementById('nom').value = ""
        document.getElementsByTagName('textarea')[0].value = ""

    }
)