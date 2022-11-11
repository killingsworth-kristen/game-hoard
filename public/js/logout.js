const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("Logout",e=>{
    fetch("/api/users/logout",{
        method:"POST"
    }).then(res=>{
        location.reload()
    })
})