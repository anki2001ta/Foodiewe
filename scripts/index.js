import food_data from '../scripts/food.js';
console.log(food_data)
let container=document.getElementById("container")
 let renderDom=()=>{
    container.innerHTML=null;
    food_data.forEach((ele,ind)=>{
        console.log(ele)
        let div=document.createElement("div");
        div.setAttribute("id","cards")
        let img=document.createElement("img");
        img.src=ele.url;
        let name=document.createElement("h3");
        name.innerText=ele.name;
        let price=document.createElement("h3");
        price.innerText=ele.price;
        let btn=document.createElement("button")
        btn.innerHTML="ADD MEAL"
        btn.addEventListener("click",function(){
            addtocart(food_data,ind);
         })
        div.append(img,name,price,btn)
        container.append(div)
    })
 };
 renderDom()

 let xp=JSON.parse(localStorage.getItem("cart"))||[]

 function addtocart(data,id){
    xp.push(data[id]);
    localStorage.setItem("cart",JSON.stringify(xp))
 }

 