let inputBox = document.getElementById('display2');
let inputBox1 = document.getElementById('display1');
let buttons = document.querySelectorAll('button');
let memory_save = 0.0;//this is to store value for future use 
let screenValue = ''; // input takes from screen 
let x = 0;


for (item of buttons) {
    item.addEventListener('click', (element) => {
        buttonText = element.target.innerText;
        if (buttonText == "=") {
            if (screenValue.includes("^")) {
                screenValue = screenValue.replace('^', '**');//for x^y so just relacing 6 to ** then ScreenValue passing into eval()
            }
            if (screenValue.includes("yroot")) { //This is for  functionality  of  "y√"  button 
                let x = Number(screenValue.slice(0, screenValue.indexOf("yroot")));
                let y = Number(screenValue.slice(screenValue.indexOf("yroot") + 5, screenValue.length));
                screenValue = Math.pow(x, 1 / y);
            }
            if (screenValue.includes("logxBasey")) {   //This is for  functionality  of  "logyx"  button 
                let x = Number(screenValue.slice(0, screenValue.indexOf("logxBasey")));
                let y = Number(screenValue.slice(screenValue.indexOf("logxBasey") + 9, screenValue.length));
                screenValue = getBaseLog(y, x);
            }
            inputBox.innerText = eval(screenValue);
            screenValue = eval(screenValue);
        }
        else if (buttonText == "C") {
            screenValue = "";
            inputBox.innerHTML = screenValue;
            inputBox1.innerHTML = screenValue;
        }
        else if (buttonText == "MS") {  //for save value in memoey to use for future
            memory_save = screenValue;
        }
        else if (buttonText == "MR") {   // use value of memory to calculation if needed
            screenValue = screenValue + memory_save;
            inputBox.innerHTML = screenValue;
            inputBox1.innerHTML = screenValue;
        }
        else if (buttonText == "MC") {  //use  to clear memory value
            buttonText = "";
            //screenValue = "";
            memory_save = 0.0;
        }
        else if (buttonText == "M+") {   // use ScreenValue to add in  memory  if needed
            memory_save = memory_save + parseInt(screenValue);

        }
        else if (buttonText == "M-") {   // use ScreenValue to substract from  memory  if needed
            memory_save = memory_save - parseInt(screenValue);

        }
        else if (buttonText == "<---") {//back Space to remove last Charecter from screenValue
            buttonText = "";
            if (screenValue.slice(-1) !== '+' && screenValue.slice(-1) !== '-' && screenValue.slice(-1) !== '*' && screenValue.slice(-1) !== '/') {
                screenValue = screenValue.slice(0, -1);//screenValue is updated from starting to last- 1
            }
            inputBox.innerHTML = screenValue;
            inputBox1.innerHTML = screenValue;
        }
        else if (buttonText === "1/x") {   // use value of memory to calculation if needed
            screenValue = 1 / screenValue;
            //screenValue = "";
            inputBox.innerHTML = screenValue;
            inputBox1.innerHTML = screenValue;

        }
        else if (buttonText == 'sin') {
            if (eval(screenValue)) {
                buttonText = Math.sin(eval(screenValue) * Math.PI / 180);//for sin value of final expression
            }
            else {
                buttonText = Math.sin(screenValue * Math.PI / 180);// for sin value of entered number
            }
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
            inputBox1.innerHTML = screenValue;

        }
        else if (buttonText == 'cos') {
            if (eval(screenValue)) {
                buttonText = Math.cos(eval(screenValue) * Math.PI / 180);//for cos value of final expression
            }
            else {
                buttonText = Math.cos(screenValue * Math.PI / 180);// for cos value of entered number

            }
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
            inputBox1.innerHTML = screenValue;
        }
        else if (buttonText == 'tan') {
            //console.log(screenValue);
            if (eval(screenValue)) {
                buttonText = Math.tan(eval(screenValue) * Math.PI / 180);//for tan value of final expression
            }
            else {
                buttonText = Math.tan(screenValue * Math.PI / 180);// for tan value of entered number              
            }
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
            inputBox1.innerHTML = screenValue;
        }
        else if (buttonText == 'sin-1') {
            //console.log(screenValue);
            buttonText = Math.asin(screenValue) * 180 / Math.PI;
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'cos-1') {
            //console.log(screenValue);
            buttonText = Math.acos(screenValue) * 180 / Math.PI;
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'tan-1') {
            //console.log(screenValue);
            buttonText = Math.atan(screenValue) * 180 / Math.PI;
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'n!') {
            buttonText = factorial(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'π') {
            buttonText = Math.PI;
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == '|x|') {
            buttonText = Math.abs(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'log') {
            buttonText = Math.log10(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'logyx') {
            buttonText = "logxBasey";
            screenValue += buttonText;
            inputBox1.innerHTML = screenValue;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'ln') {
            buttonText = Math.log(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'log2x') {
            buttonText = Math.log2(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == '3√') {
            buttonText = Math.cbrt(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == '√') {
            buttonText = Math.sqrt(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'y√') {
            buttonText = "yroot";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'x3') {
            buttonText = Math.pow(screenValue, 3);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'x2') {
            buttonText = Math.pow(screenValue, 2);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'xy') {
            buttonText = "^";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }

        else if (buttonText == '10x') {
            buttonText = Math.pow(10, screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'Exp') {  //e.g 4.2e+2=420
            buttonText = "e+"
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;

        }
        else if (buttonText == 'ex') {
            buttonText = Math.pow(Math.E, screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'e') {
            buttonText = Math.E;
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'sinh') {
            buttonText = Math.sinh(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'cosh') {
            buttonText = Math.cosh(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'tanh') {
            buttonText = Math.tanh(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'sinh-1') {
            buttonText = Math.asinh(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'cosh-1') {
            buttonText = Math.acos(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == 'tanh-1') {
            buttonText = Math.atanh(screenValue);
            screenValue = "";
            screenValue += buttonText;
            inputBox.innerHTML = screenValue;
        }
        else if (buttonText == '+/-') {
            buttonText = "";
            if (screenValue < 0) {
                buttonText = Math.abs(screenValue);
                screenValue = "";
                screenValue += buttonText;
                inputBox.innerHTML = screenValue;
            } else if (screenValue > 0) {
                buttonText = -screenValue;
                screenValue = "";
                screenValue += buttonText;
                inputBox.innerHTML = screenValue;
            }
        }
        else {
            screenValue += buttonText;
            inputBox1.innerHTML = screenValue;
            inputBox.innerHTML = screenValue;
        }

    });
}
//for factorial of a number
function factorial(num) {
    let fact = 1;
    if (num < 0) {
        return;
    }
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
//logxy functions  definitions here
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}







