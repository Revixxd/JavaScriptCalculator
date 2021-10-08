
class Calculator{
    constructor(currentOperandTextElement, previousOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear()
    }   
    clear(){ //clear all
        this.currentOperand = ''
        this.previousOperand = ''
        this.operetion = undefined;
        console.log("clear all")
    }
    addNumberToScreen(number){
        
        this.currentOperand = number
    }
    
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }


    chooseOpereation(operetion){

    }
    // adding previusOperand value to the outputText
    compute(){

    }

}

const previousOperandTextElement = '';
// all data from html
const currentOperandTextElement = document.getElementById('output');
const numberButtons = document.querySelectorAll('[data-number-button]')
const clearButton = document.querySelector('[clear-button]');
const changeOfSign = document.querySelector('[change-of-sign]');
const percent = document.querySelector('[percent]');
const division = document.querySelector('[division]');
const multiple = document.querySelector('[multiple]');
const minus = document.querySelector('[minus]');
const plus = document.querySelector('[plus]');
const comma = document.querySelector('[comma]');
const equals = document.querySelector('[equals]');





const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement)
//actions after clicking specyfic button
numberButtons.forEach(button => { 
    button.addEventListener('click', ()=>{
        calculator.addNumberToScreen(button.innerText); //taking number from button and declering is as a number
        calculator.updateDisplay();
    })
});

clearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})
