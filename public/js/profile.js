// cloudinary keys
const apiKey = `244272974957717`;
const cloudName = `dwe2wo8w5`;

// cloudinary put request
var myWidget = cloudinary.createUploadWidget({
    cloudName: cloudName, 
    uploadPreset: 's72xl1zy'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info.path); 
        const body = {profile_pic: result.info.path}
        fetch(`/api/users/profile`,{
            method:"PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify(body),
        })
      }
});

// open cloudinary widget
document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);


// create new game request
const gameName = document.getElementById(`gameName`);
const gameDescription = document.getElementById(`gameDescription`);
const gameGenre = document.getElementById(`gameGenre`);
const gameNumPlayers = document.getElementById(`gameNumPlayers`);
const newGameBtn = document.getElementById(`newGameBtn`)

newGameBtn.addEventListener(`click`, function(e) {
  e.preventDefault();
  const body = {name: gameName.value, description: gameDescription.value, genre: gameGenre.value, number_players: gameNumPlayers.value}
  fetch(`/api/users/profile`,{
    method: `POST`,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
})

// delete game
// const deleteGameBtn = document.getElementById(`deleteGameBtn`);

// deleteGameBtn.addEventListener(`click`,function(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   console.log(`${EventTarget.parentNode.id}` + `This is from front end`)
//   console.log(e)
// })






