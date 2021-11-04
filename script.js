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
    "foto" :  "img/barbara-ramos-graphic-designer.jpg",
    "nome" : "Barbara Ramos",
    "professione" : "graphic designer"
   
}
];

//per aggiungere oggetti nell'array profili
let nuovoMembro = {
    "foto" :  "img/new-team-member-01.jpg",
    "nome" : "Barbara Ramos",
    "professione" : "web developer"
}

profili.push(nuovoMembro);

console.log(profili);
 
 for (let i = 0; i < profili.length; i++){
    let objProfilo = profili[i];
    let objFoto = foto[i];
    let objNome = nome[i];
    let objProfessione = professione[i];
    

    console.log(objProfilo);

    for (let key in objProfilo){
        console.log(key, objProfilo[key]);
    }

} 


var img = document.createElement("img"); 
  
img.src = "img/wayne-barnett-founder-ceo.jpg"; 
var src = document.getElementById("add-member");
    
src.appendChild(img);  

console.log(img);