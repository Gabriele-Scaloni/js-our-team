 /*  const img = document.createElement("img");
    img.src = "img/angela-caroll-chief-editor.jpg";
    document.body.appendChild(img);  */


    

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

console.log(profili);

for (let i = 0; i < profili.length; i++){
    let objProfilo = profili[i];

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

    
/* var img = document.createElement("img");
img.src = "barbara-ramos-graphic-designer.jpg";
 */

/* var img1 = new pictures();
img1.src = "img1.jpg";
images.push(img1);
var img2 = new pictures();
img2.src = "img2.jpg";
images.push(img2);
var barbararamosgraphicdesigner=new pictures();
barbararamosgraphicdesigner.src = "img/barbara-ramos-graphic-designer.jpg";
images.push(barbararamosgraphicdesigner);
var img = document.getElementById("barbara-ramos-graphic-designer.jpg"); */