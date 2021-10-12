// condition statement for grading

var result = 80;

if(result >= 80){
    document.getElementById("one").innerHTML = "student got A+"; 
}
else if(result >= 70)
    document.getElementById("one").innerHTML = "student got A"; 
    
else if(result >= 60){
    document.getElementById("one").innerHTML = "student got A-"; 
}
else if(result >= 50){
    document.getElementById("one").innerHTML = "student got B"; 
}
else if (result >= 40){
    document.getElementById("one").innerHTML = "student got C"; 
}
else if(result >= 33){
    document.getElementById("one").innerHTML = "student got D"; 
}
else{
    document.getElementById("one").innerHTML = "Failed & Best Luck for Next Year"; 

}


