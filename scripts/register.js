let base_url="https://masai-api-mocker.herokuapp.com/"
let end="auth/register"

let register= async ()=>{
    let name=document.getElementById("name").value ;
    let email=document.getElementById("email").value ;
    let password=document.getElementById("password").value ;
    let username=document.getElementById("username").value ;
    let mobile=document.getElementById("mobile").value ;
   let description= document.getElementById("desc").value ;

   let form_data={name,email,password,username,mobile,description}
//    console.log(form_data)

let res=await fetch(`${base_url}${end}`,{
    method:"POST",
    body:JSON.stringify(form_data),
    headers:{
        "Content-Type":"application/json"
    },
})
res=await res.json();
console.log(res);
if(res.error==false){
    window.location.href="login.html"
}
else{
    alert("User Already Exists!!!")
    window.location.href="register.html"
}

}