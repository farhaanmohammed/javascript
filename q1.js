var num1= document.getElementById("a") ;
var num2= document.getElementById("b");
var screen=document.getElementById("result");

 function finalres(){
    if((op).value=="add")
     add();
    else if((op).value=="sub")
    sub();
    else if((op).value=="mul")
    mul();
    if((op).value=="div")
     div();

 }

 function add(){

    var sum=+num1.value+ +num2.value;
    screen.value=sum;

    }
function sub(){

        var min= num1.value- num2.value;
        screen.value=min;
    
        }
function mul(){

            var mu=num1.value*num2.value;
            screen.value=mu;
        
            }
function div(){

                var di=num1.value/num2.value;
                screen.value=di;
            
                }