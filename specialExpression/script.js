let container = document.querySelector(".container");
let expression = document.querySelector(".word");
let name = document.querySelector(".name");
let btn = document.querySelector(".btn");

let expressionContent = [
    
    {expression:"Cəsur ol. Risk al.- Heç nə təcrübənin yerini tuta bilməz.", name:"Paulo Koelyo"},
    {expression:"Ən yaxşı tərbiyə - yaxşı nümunədir.", name:"Lev Tolstoy"},
    {expression:"Azadlıq ifrat dərəcəsinə çatdıqda özbaşınalığa çevrilir.", name:"Mahatma Qandi"},
    {expression:"Böyük ürəklərə görə uzaqdakılar daim yaxındır.", name:"Maksim Qorki"},
    {expression:"Ağıllı öz uğursuzluqlarının səbəbini özündə, nadan isə başqalarında axtarır.", name:"Konfutsi"}
        
]

//=============================Backgroun section=====================================

let backgroundImg = ['10.webp','20.webp','12.jpg','21.jpg','14.webp'];



let i = 0;
expression.innerHTML =expressionContent[0].expression;
name.innerHTML = expressionContent[0].name


    
    btn.addEventListener('click', function(){
        
        if(i<4){
            i = i + 1;
            expression.innerHTML =expressionContent[i].expression;
               name.innerHTML = expressionContent[i].name
               container.style.backgroundImage = `url('img/${backgroundImg[i]}')`
               console.log(i)
               return;

        }else if(i=5){
            i=0;
            expression.innerHTML =expressionContent[i].expression;
               name.innerHTML = expressionContent[i].name
               container.style.backgroundImage = `url('img/${backgroundImg[i]}')`
            console.log(i)
        }
         
         
        })

        console.log(i)

       




    
        
 
   





