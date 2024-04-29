document.getElementById("Calculate").addEventListener("click",function(){
    let percentage = document.getElementById("percentage").value;

    if(percentage < 35){
        alert("NG: Not Graded");
    }else if(percentage == 35 || percentage <=40){
        alert("D: Basic");
    }
    else if(percentage == 40 || percentage <=50){
        alert("C: Acceptable");
    }else if(percentage == 50 || percentage <=60){
        alert("B: Good");
    }else if(percentage == 70 || percentage <=80){
        alert("B+: Very Good");
    }else if(percentage == 80 || percentage <=90){
        alert("A: Excellent");
    }else if(percentage == 90 || percentage <= 100){
        alert("A+: Outstanding");
    }else{
        alert("Invalid percentage");
    }

})