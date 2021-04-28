Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
cam=document.getElementById("cam");
Webcam.attach("#cam");
pr1="";
pr2="";
function snap(){
    Webcam.snap(function(data_URI){
        document.getElementById("snapshot").innerHTML='<img src="'+data_URI+'" id="res_img" class="img-responsive">';
    })
}
classify=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZJk26a4ld/model.json',modell);
function modell(){
    console.log("Wooooohooooo! Model Loaded")
}
function speak(){
    var speakk=window.speechSynthesis;
    predsp1="The first prediction is - "+pr1;
    predsp2="The second prediction is - "+pr2;
    pls_utter= new SpeechSynthesisUtterance(predsp1+predsp2);
    speakk.speak(pls_utter);
}
cameraaa="webcam starrrrrrrrrrrrrrrrt"
