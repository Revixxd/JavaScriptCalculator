
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
    addingNumber(number){

        
        // // .replace(/[^A-Za-z0-9]/g, "") it makes , doeasnt count on string to make 9 numbers only on output display

        // if(this.currentOperand.replace(/[^A-Za-z0-9]/g, "").length == 6){
        //     // make font size of output smaller 
        //     console.log("decreasing font size of output text")
        // } 


        // if(this.currentOperand.replace(/[^A-Za-z0-9]/g, "").length == 9) return

        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }


    chooseOpereation(operetion){
        if(this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operetion = operetion
        this.currentOperand = this.previousOperand 
        this.currentOperand = ''
    }

    // computing the previous operand with currend one
    compute(){
        let computation 

        // parseFloat convert string to the number
        const current = parseFloat(this.currentOperand)
        const prev = parseFloat(this.previousOperand)
        // if(isNan(prev) || isNan(current)) return

        switch (this.operation){
            case '+': // if this.operation = + below code execute
            computation = prev + current
            break
            case '-': 
            computation = prev - current
            break
            case '*': 
            computation = prev * current
            break
            case '÷': 
            computation = prev / current
            break
            default:
              return
          }
        this.currentOperand = computation;
        this.computation = undefined
        this.previousOperand = ''
    }

}



const previousOperandTextElement = '';
// all data from html


const currentOperandTextElement = document.getElementById('output');
const numberButtons = document.querySelectorAll('[data-number-button]')
const operations = document.querySelectorAll('[data-operation]');


const clearButton = document.querySelector('[clear-button]');
const changeOfSign = document.querySelector('[change-of-sign]');
const percent = document.querySelector('[percent]');
const equals = document.querySelector('[equals]');





const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement)

//actions after clicking specyfic button
numberButtons.forEach(button => { 
    button.addEventListener('click', ()=>{
        calculator.addingNumber(button.innerText) //taking number from button and declering is as a number
        calculator.updateDisplay()
    })
});

clearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

operations.forEach(button => { 
    button.addEventListener('click', ()=>{
        calculator.chooseOpereation(button.innerText); //taking number from button and declering is as a number
        calculator.updateDisplay();
    })
});

equals.addEventListener('click', button=>{
    calculator.compute()
    calculator.updateDisplay()
})