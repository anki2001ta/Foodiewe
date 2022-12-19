let Data=JSON.parse(localStorage.getItem("checkout"))||[]
let cont=document.getElementById("container")

let renderDom=(Data)=>{
    let Name=document.createElement("h3")
    Name.innerHTML=`NAME:-${Data.name}`;
    let email=document.createElement("h3");
    email.innerHTML=`EMAIL:-${Data.email}`;
    let username=document.createElement("h3")
    username.innerHTML=`USERNAME:-${Data.username}`;
    let mob=document.createElement("h3")
    mob.innerHTML=`MOBILE:-${Data.mobile}`;
    let desc=document.createElement("h3")
    desc.innerHTML=`DESCRIPTION:-${Data.description}`;

    cont.append(Name,email,username,mob,desc)
}

if( Data==[]){
    alert("Login first")
    window.location.href="login.html"
}
else{
    renderDom(Data)
}
