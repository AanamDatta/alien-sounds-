function start() {
    navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mMqTFASse/model.json",modelloaded)
}
function modelloaded(){
classifier.classify(gotResult)
}
function gotResult(error,results){
    if (error) {
        console.log(error)
    } else {
      console.log("gotResult")  
      console.log(results)
      document.getElementById("result").innerHTML=results[0].label
      document.getElementById("accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%"
      img = document.getElementById("aliens-01")
      img2 = document.getElementById("aliens-02")
      img3 = document.getElementById("aliens-03")
      img4 = document.getElementById("aliens-04")
      if (results[0].label == "clap") {
        img.src =   "aliens-01.gif"
        img2.src =   "aliens-02.png"
        img3.src =   "aliens-03.png"
        img4.src =   "aliens-04.png"
      } else if (result[0].label == "snap") { 
        img2.src =   "aliens-02.gif"
        img.src =   "aliens-01.png"
        img3.src =   "aliens-03.png"
        img4.src =   "aliens-04.png"
      }
      else if (result[0].label == "bell") { 
        img3.src =   "aliens-03.gif"
        img.src =   "aliens-01.png"
        img2.src =   "aliens-02.png"
        img4.src =   "aliens-04.png"
      }
      else if (result[0].label == "Background Noise") { 
        img4.src =   "aliens-04.gif"
        img.src =   "aliens-01.png"
        img2.src =   "aliens-02.png"
        img3.src =   "aliens-03.png"
      }
  }

} 


