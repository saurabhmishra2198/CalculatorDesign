var screenValue = document.calsi.display;
//display numbers & operator
function displayNum(num)
{
    switch(num){
        case 'zero':
            screenValue.value += 0;
            break;
        case 'one':
            screenValue.value += 1;
            break;
        case 'two':
            screenValue.value += 2;
            break;
        case 'three':
            screenValue.value += 3;
            break;
        case 'four':
            screenValue.value += 4;
            break;
        case 'five':
            screenValue.value += 5;
            break;
        case 'six':
            screenValue.value += 6;
            break;
        case 'seven':
            screenValue.value += 7;
            break;
        case 'eight':
            screenValue.value += 8;
            break;
        case 'nine':
            screenValue.value += 9;
            break;
        case 'point':
            screenValue.value += '.';
            break;
        case 'devide':
            screenValue.value += '/';
            break; 
        case 'multiply':
            screenValue.value += '*';
            break; 
        case 'add':
            screenValue.value += '+';
            break; 
        case 'subtract':
            screenValue.value += '-';
            break;
        case 'openbracket':
            screenValue.value += '(';
            break;
        case 'closebracket':
            screenValue.value += ')';
            break; 
        case 'pi':
            screenValue.value += Math.PI;
            break;  
        case 'e':
            screenValue.value += '2.7182';
            break; 
        case 'mod':
            screenValue.value += '%';
            break;      
    }
}
//Arithmetic operation
function operation(oper){
    switch(oper){
        case 'backSpace': //backspace
            const num = screenValue.value.slice(0, -1);
            screenValue.value = num;
            break;
        case 'clear': //clear
            document.querySelector("#clear").addEventListener("click", ()=>{
                screenValue.value = " "; 
            })
            break;
        case 'equal': //equal
            if(screenValue.value == " "){
                screenValue.value = eval(calsi.display.value);
            }
            else{
                screenValue.value = eval(calsi.display.value);
            }
            break;
        case 'log': //log
            if(screenValue.value == " ")
            {
                screenValue.value = 'log()';
            }
            else{
                screenValue.value = Math.log(screenValue.value);
            }
            break;
        case 'tenPowerX': //10^x
            if(screenValue.value == " ")
            {
                screenValue.value = 'x';
            }
            else{
                screenValue.value = Math.pow(10,screenValue.value);
            }
            break;
        case 'squareRoot': //square root
            if(screenValue.value == " ")
            {
                screenValue.value = 'sqrt()';
            }
            else{
                screenValue.value = Math.sqrt(screenValue.value);
            }
            break;
        case 'square': //find square
            if(screenValue.value == " ")
            {
                screenValue.value = 'pow()';
            }
            else{
                screenValue.value = Math.pow(screenValue.value,2);
            }
            break;
        case 'oneByX': //find 1/x
            if(screenValue.value == " ")
            {
                screenValue.value = '1/x';
            }
            else{
                screenValue.value = 1 / screenValue.value;
            }
            break;
        case 'abs': //find |x|
            if(screenValue.value == " ")
            {
                screenValue.value = 'abs()';
            }
            else{
                screenValue.value = Math.abs(screenValue.value);
            }
            break;
        case 'exp': //find exp
            if(screenValue.value == " ")
            {
                screenValue.value = 'exp()';
            }
            else{
                screenValue.value = Math.exp(screenValue.value);
            }
            break;
    }
}
//factorial find
function factorial(){
    let fact = 1;
    for(let i = 1; i <= screenValue.value; i++){
      fact *= i;
    }
    screenValue.value = fact;
}

function xPowY(){
    console.log(screenValue.value,screenValue.value+1);
    
}








