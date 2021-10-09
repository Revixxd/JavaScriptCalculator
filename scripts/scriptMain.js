
class Calculator{
    constructor(currentOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
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
        this.previousOperand = this.currentOperand 
        this.currentOperand = ''
    }

    // computing the previous operand with currend one
    compute() {
        let computation
        let prev = parseFloat(this.previousOperand)
        let current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return

        // this secions with if's could be made by switch 
        if (this.operation = '+'){
            computation = prev + current 
        }
        
        


        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
      }

}



// all data from html


const currentOperandTextElement = document.getElementById('output');
const numberButtons = document.querySelectorAll('[data-number-button]')
const operations = document.querySelectorAll('[data-operation]');


const clearButton = document.querySelector('[clear-button]');
const changeOfSign = document.querySelector('[change-of-sign]');
const percent = document.querySelector('[percent]');
const equals = document.querySelector('[equals]');





const calculator = new Calculator(currentOperandTextElement)

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