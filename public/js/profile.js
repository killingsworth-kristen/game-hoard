const apiKey = `244272974957717`;
const cloudName = `dwe2wo8w5`;

var myWidget = cloudinary.createUploadWidget({
    cloudName: cloudName, 
    uploadPreset: 's72xl1zy'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info.path); 
        const body = {profile_pic: result.info.path}
        console.log(body)
        fetch(`/api/users/profile`,{
            method:"PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify(body),
        })
      }
});
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);






