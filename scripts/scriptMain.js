
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
const clearButton = document.querySelectorAll('[clear-button]');
const changeOfSign = document.querySelectorAll('[change-of-sign]');
const percent = document.querySelectorAll('[percent]');
const division = document.querySelectorAll('[division]');
const multiple = document.querySelectorAll('[multiple]');
const minus = document.querySelectorAll('[minus]');
const plus = document.querySelectorAll('[plus]');
const comma = document.querySelectorAll('[comma]');
const equals = document.querySelectorAll('[equals]');





const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement)
//actions after clicking specyfic button
numberButtons.forEach(button => { 
    button.addEventListener('click', ()=>{
        calculator.addNumberToScreen(button.innerText); //taking number from button and declering is as a number
        calculator.updateDisplay();
    })
});
