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
classify=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UNZBt7j6L/model.json',modell);
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
function check() {
    img_saved=document.getElementById("res_img");
    classify.classify(img_saved,gr);
}
function gr(error,result) {
    if (error) {
        console.error("errrrorrrr !!! Malfunctionnnnn");
    }
    else {
        console.log(result);
        document.getElementById("en1").innerHTML=result[0].label;
        document.getElementById("en2").innerHTML=result[1].label;
        pr1=result[0].label;
        pr2=result[1].label;
        speak()
        if(pr1=="Happy"){
            document.getElementById("upd_emg1").innerHTML="<span>&#128514</span>";
        }
        else if(pr1=="Sad"){
            document.getElementById("upd_emg1").innerHTML="&#128550";
        }
        else if(pr1=="Angry"){
            document.getElementById("upd_emg1").innerHTML="&#128545";
        }
        if(pr2=="Happy"){
            document.getElementById("upd_emg2").innerHTML="&#128514";
        }
        else if(pr2=="Sad"){
            document.getElementById("upd_emg2").innerHTML="&#128550";
        }
        else if(pr2=="Angry"){
            document.getElementById("upd_emg2").innerHTML="&#128545";
        }
    }
}

