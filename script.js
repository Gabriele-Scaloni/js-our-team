    var profili = [

{
    "foto" :  "img/wayne-barnett-founder-ceo.jpg",
    "nome" : "Wayne Barnett",
    "professione" : "Founder Ceo"
},

{
    "foto" :  "img/angela-caroll-chief-editor.jpg",
    "nome" : "Angela Caroll",
    "professione" : "chief editor"
},

{
    "foto" :  "img/angela-lopez-social-media-manager.jpg",
    "nome" : "Angela Lopez",
    "professione" : "social media manager"
},

{
    "foto" :  "img/angela-lopez-social-media-manager.jpg",
    "nome" : "Lucia Lopez",
    "professione" : "social media marketing"
},

{  
    "foto" :  "img/walter-gordon-office-manager.jpg",
    "nome" : "Walter Gordon",
    "professione" : "Manager"
   
}
];

//per aggiungere oggetti nell'array profili
let nuovoMembro = {
    "foto" :  "img/new-team-member-01.jpg",
    "nome" : "Luciana Littizzetto",
    "professione" : "web developer"
}

profili.push(nuovoMembro);

console.log(profili);

let container = document.querySelector('.team-container');

 for (let i = 0; i <= profili.length; i++){
    let objProfilo = profili[i];
    let objFoto = objProfilo.foto;
    let objNome = objProfilo.nome;
    let objProfessione = objProfilo.professione;
    

    console.log(objProfilo);

    for (let key in objProfilo){
        console.log(key, objProfilo[key]);
    }

    container.innerHTML += `<div class="team-card">
            <div class="card-image">
             <img
                src="${objFoto}"
                alt=""
              />
            </div>
            <div class="card-text">
             <h3>${objNome}</h3>
              <p>${objProfessione}</p>
            </div>
          </div>`;

} 

// untile per caricare una sola foto nell'html ma inutile per caricare
//tante foto come in questo esercizio

/* var img = document.createElement("img"); 
  
img.src = "img/wayne-barnett-founder-ceo.jpg"; 
var src = document.getElementById("add-member");
    
src.appendChild(img);  

console.log(img); */