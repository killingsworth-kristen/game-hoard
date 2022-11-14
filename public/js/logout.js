const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click",()=>{
    fetch("/api/users/logout",{
        method:"POST",
        headers: {
            "Content-Type": "applicaton/json"
        },
    }).then(res=>{
        location.reload()
    })
})
