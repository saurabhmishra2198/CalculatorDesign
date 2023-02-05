//screen value
var screenValue = document.calsi.display;
//empty array
let memoryArray = [];
// define sign variable
var sign;
//2nd btn value
let btnVal = 0;
//display numbers & operator
let signcounter = 0;
let pointcounter = 0;
let bracatcounter = 0;
let lcount = 0;
let bodmasCounter = 0;
let plusmincount = 0;
let equalCounter = 0;
let simpleSign;
function displayNum(num) {
    if (screenValue.value == Math.PI || screenValue.value == Math.E || equalCounter==1) {
        screenValue.value = "";
    }
    switch (num) {
        case 'zero':
            if (screenValue.value != 0) {
                screenValue.value += 0;
            }
            else
            {
                if(screenValue.value=="")
                {
                    screenValue.value = 0;
                }
            }
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
        case 'pi':
            screenValue.value = Math.PI;
            break;
        case 'e':
            screenValue.value += Math.E;
            break;
    }
    bodmasCounter = 1;
    lcount = 1;
    if(signcounter == 0)
    {
        pointcounter = 1;
    }
    equalCounter = 0;
    signcounter = 1;
    plusmincount += 1;
}
function pointOperation() {
    if (screenValue.value == "") {
        screenValue.value += '0.';
    }
    else {
        if (screenValue.value != "" && pointcounter == 1) {
            if (signcounter == 0) {
                screenValue.value += '0.';
            }
            else {
                screenValue.value += '.';
            }
        }
    }
    pointcounter = 0;
}
function piOperation() {
    screenValue.value = Math.PI;
    signcounter = 1;
}
function bodmas(id) {
    switch (id) {
        case 'openbracket':
            if (bodmasCounter == 1) {
                screenValue.value += '*';
                bracatcounter -= 1;
            }
            else {
                screenValue.value += '(';
            }
            bracatcounter += 1;
            bodmasCounter = 0;
            break;
        case 'closebracket':
            console.log(bracatcounter);
            if (bracatcounter != 0) {
                if (lcount == 0) {
                    screenValue.value += '0)';
                }
                else {
                    screenValue.value += ')';
                }
                bracatcounter -= 1;
                lcount++;
                if (bracatcounter == 0) {
                    lcount = 0;
                }
            }
            break;
    }
}
function arithmetic(num) {
    if (signcounter == 1) {
        switch (num) {
            case 'devide':
                screenValue.value += '/';
                simpleSign = '/';
                break;
            case 'multiply':
                screenValue.value += '*';
                simpleSign = '*';
                break;
            case 'add':
                screenValue.value += '+';
                simpleSign = '+';
                break;
            case 'subtract':
                screenValue.value += '-';
                simpleSign = '-';
                break;
            case 'mod':
                screenValue.value += '%';
                simpleSign = '%';
                break;
            case 'xPowY':
                screenValue.value += '^';
                simpleSign = '^';
                break;
        }
    }
    signcounter = 0;
    pointcounter = 1;
}
//Arithmetic operation
function operation(oper) {
    switch (oper) {
        case 'backSpace': //backspace
            const num = screenValue.value.slice(0, -1);
            screenValue.value = num;
            break;
        case 'clear': //clear
            document.querySelector("#clear").addEventListener("click", () => {
                screenValue.value = "";
            })
            bodmasCounter=0;
            break;
        case 'equal': //equal
            if (screenValue.value == " ") {
                screenValue.value = eval(calsi.display.value);
            }
            else if (screenValue.value.includes("^")) {
                xPowY();
            }
            else {
                screenValue.value = eval(calsi.display.value);
            }
            equalCounter = 1;
            break;
        case 'log': //log
            if (screenValue.value == 0) {
                screenValue.value = "invalid input!"
            }
            if (screenValue.value < 0) {
                screenValue.value = "invalid input!"
            }
            if (screenValue.value > 0) {
                screenValue.value = Math.log10(screenValue.value);
            }
            break;
        case 'ln': //log
            if (screenValue.value == 0) {
                screenValue.value = "invalid input!"
            }
            if (screenValue.value < 0) {
                screenValue.value = "invalid input!"
            }
            if (screenValue.value > 0) {
                screenValue.value = Math.log(screenValue.value);
            }
            break;
        case 'tenPowerX': //10^x
            screenValue.value = Math.pow(10, screenValue.value);
            break;
        case 'squareRoot': //square root
            screenValue.value = Math.sqrt(screenValue.value);
            break;
        case 'square': //find square
            screenValue.value = Math.pow(screenValue.value, 2);
            break;
        case 'oneByX': //find 1/x
            screenValue.value = 1 / screenValue.value;
            break;
        case 'abs': //find |x|
            screenValue.value = Math.abs(screenValue.value);
            break;
        case 'exp': //find exp
            screenValue.value = Math.exp(screenValue.value);
            break;
        case 'FE': //find F-E
            if (screenValue.value == " ") {
                screenValue.value = '0.e+0';
            }
            else {
                screenValue.value = screenValue.value + ".e+0";
            }
            break;
    }
}
function plusMin(id) {
    if (id == 'plus-min' && screenValue.value != 0) {
        if (plusmincount == 1) {
            screenValue.value = "-" + screenValue.value;
            signcounter = 1;
        }
        else {
            let a = screenValue.value[screenValue.value.length - 1];
            if (a.match(/[0-9]/)) {
                let b = screenValue.value.split(simpleSign);
                screenValue.value = b[0] + simpleSign + "(-" + b[1] + ")";
            }
        }


    }
    else {
        if (id == 'plus-min') {
            signcounter = 1;
        }
        else {
            signcounter = 0;
        }
    }
}
//factorial find
function factorial() {
    let fact = 1;
    for (let i = 1; i <= screenValue.value; i++) {
        fact *= i;
    }
    screenValue.value = fact;
}
//X power Y
function xPowY() {
    if (signcounter == 1) {
        let a = screenValue.value[screenValue.value.length - 1];
        if (a.match(/[0-9]/)) {
            let b = screenValue.value.split("^");
            screenValue.value = Math.pow(b[0], b[1]);
        }
    }
    signcounter = 0;

}
//Trigonometry function
function trigonometry(num) {
    let n;
    var mathPI = Math.PI / 180;
    var result = screenValue.value * mathPI;
    switch (num) {
        case 'sin':
            n = Math.sin(result)
            screenValue.value = n;
            break;
        case 'cos':
            n = Math.cos(result)
            screenValue.value = n;
            break;
        case 'tan':
            n = Math.tan(result)
            screenValue.value = n;
            break;
        case 'sinh':
            n = Math.sinh(result)
            screenValue.value = n;
            break;
        case 'cosh':
            n = Math.cosh(result)
            screenValue.value = n;
            break;
        case 'tanh':
            n = Math.tanh(result)
            screenValue.value = n;
            break;
    }
}
//function 
function fun(num) {
    switch (num) {
        case 'abslute':
            screenValue.value = Math.abs(screenValue.value);
            break;
        case 'squrX':
            screenValue.value = '(' + screenValue.value + ')';
            break;
        case 'dolor':
            screenValue.value = screenValue.value * 81.60 + " Rs";
            break;
    }
}
//memory function
function memoryOperation(str) {
    switch (str) {
        case 'mc':
            screenValue.value = localStorage.clear();
            break;
        case 'mAdd':
            handleMemory('Plus');
            break;
        case 'mSubtract':
            handleMemory('Minus');
            break;
        case 'mr':
            mrHandle();
            break;
        case 'ms':
            localStorage.setItem("memoryValue", JSON.stringify(memoryArray));
            break;
    }
}
//handle M+
function handleMemory(id)
{
    let result;
    switch(id){
        case 'Plus':
            sign = "Plus";
            result = screenValue.value;
            memoryArray.push(result);
            break;
        case 'Minus':
            sign = "Minus";
            result = screenValue.value;
            memoryArray.push(result);
            break;
    }
}
//handle MR
function mrHandle() {
    let ans = Number.parseInt(memoryArray[0]);
    for (let i = 1; i < memoryArray.length; i++) {
        let arrayValue = Number.parseInt(memoryArray[i]);
        if (sign == "Plus") {
            ans = ans + arrayValue;
        }
        if (sign == "Minus") {
            ans = ans - arrayValue;
        }
    }
    screenValue.value = ans;
}
//Tow Power nd function
function twoPowerND() {
    if (btnVal == 0) {
        document.getElementById("square").value = "x'";
        document.getElementById("squareRoot").value = "&";
        document.getElementById("openbracket").value = "⇒";
        document.getElementById("closebracket").value = "∑";
        btnVal++;
    }
    else {
        document.getElementById("square").value = "x²";
        document.getElementById("squareRoot").value = "2√x";
        document.getElementById("openbracket").value = "(";
        document.getElementById("closebracket").value = ")";
    }
}




