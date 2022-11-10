const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit", e =>{
    e.preventDefault();
    const userObj = {
        user_name:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
    }
    console.log(userObj);
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload()
        } else {
            console.log(res);
            alert("Incorrect Username or Password! Try again")
        }
    })
})

const signupForm = document.querySelector("#signup");
signupForm.addEventListener("submit", e=>{
    e.preventDefault();
    const userObj = {
        user_name:document.querySelector("#signupUsername").value,
        name:document.querySelector("#signupName").value,
        password:document.querySelector("#signupPassword").value,
    }
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>{
        if(res.ok){
            location.reload()
        } else {
            console.log(res);
            console.log(userObj)
            alert("trumpet sound")
        }
    })
})