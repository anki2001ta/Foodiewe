let base_url="https://masai-api-mocker.herokuapp.com/"
let end="auth/login"


let login=async()=>{
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value

    let user_data={username,password}

    let res= await fetch(`${base_url}${end}`,{
        method:"POST",
        body:JSON.stringify(user_data),
        headers:{
            "Content-Type":"application/json"
        }
    });
    let data=await res.json()
    prof(user_data.username,data.token)
    console.log(data)

    if(data.error==false){
        alert("Sucessfully Login")
        window.location.href="index.html"
    }
    else{
        alert("Enter correct Credential")
    }
}

let prof = async (username, token) => {
    try {
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        let data =await res.json()
        console.log(data)
        localStorage.setItem("checkout",JSON.stringify(data))
        
    }
    catch (error) {
        console.log(error)
    }

   
};
