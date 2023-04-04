var lottery=[11111,222,34,5,6,6666,7888,999];
var len=lottery.length

 function select()
{
   var x=Math.floor(Math.random()*len)
   display1(x);
   display2(x);  
   display3(x);
    
    
  
}

function display1(x){
    console.log(lottery[x]);
}
function display2(x){
    document.getElementById("result").style.color="red";
    document.getElementById("result").value=lottery[x];
    
}
function display3(x){
document.getElementById("win").innerHTML=lottery[x];
}


