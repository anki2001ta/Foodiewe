let xp=JSON.parse(localStorage.getItem("cart"))||[]
let cont=document.getElementById("container")

function GetData(){
    let xp=JSON.parse(localStorage.getItem("cart"))||[];
    cont.innerHTML=null
    xp.forEach(function(el,idd){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.url
        let t=document.createElement("h3")
        t.innerText=el.name
        let price=document.createElement("h3")
        price.innerText=el.price
        let btn=document.createElement("button")
        btn.innerHTML="Remove"
        btn.addEventListener("click",function(){
            remv(idd)
        })
        div.append(img,t,price,btn)
        cont.append(div)
    })
};
GetData()

function remv(idd){
    xp.splice(idd,1)
    localStorage.setItem("cart",JSON.stringify(xp))
    GetData()
}
