function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NlT91aTQd/model.json',modelLoaded);
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
    }
    function modelLoaded(){
        console.log('Model Loaded!');
    }
    function gotResult(error,results){
    if(error){
        console.error("Oh no there has been an error check it out here:"+error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML="You are showing a "+results[0].label+" and I am "+results[0].confidence.toFixed(2)*100+"% sure you are!";
    }
    }