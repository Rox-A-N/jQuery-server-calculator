console.log('This will be my Calculator!');

$(onReady);

function onReady() {
    $('#addition').on('click', add);
    $('#subtract').on('click', subtract);
    $('#multiply').on('click', multiply);
    $('#divide').on('click', divide);   
    $('#submit').on('click', submit);
}


let equation = {
    operand : "",
    num1: 0,
    num2: 0
// these are global because they need to be accessed by multiple functions
}

function submit() {
    let input1 = Number($('#num1').val());  // Number is a js built-in to convert to a number, otherwise it is a string. Problems when adding
    let input2 = Number($('#num2').val());

    equation.num1 = input1;     // accessing the object(key: value) pair
    equation.num2 = input2;

    console.log('This is the object ', equation);
    $.ajax({
        method: 'POST', //using ajax to POST (send) info to the server
        url: '/operations', //this is the url path where the data is being retrieved from on the server. We wait for the response from the server...
        data: equation,     // accessing the object equation
    }).then(function (response){
        console.log('post request response:', response);
    });
}   // end submit

function add() {
    equation.operand = 'add';
    console.log('Is it adding ', equation);  
} // end add

function subtract() {
    equation.operand = 'subtract';
}   // end subtract

function multiply() {
    equation.operand = 'multiply';
}   // end multiply

function divide () {
    equation.operand = 'divide';
}
