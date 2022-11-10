const apiKey = `244272974957717`;
const cloudName = `dwe2wo8w5`;

var myWidget = cloudinary.createUploadWidget({
    cloudName: cloudName, 
    uploadPreset: 's72xl1zy'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        fetch(`/profile/:id`,{
            method:"PUT",
            body:JSON.stringify(result.info.url),
        }).then(res=>{
                if(res.ok){
                location.reload()
                } else {
                    console.log(res)
                }
            })
        }
});
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);






