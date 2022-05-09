const screenNumber = document.querySelector("#screen-number")
const numberButtons = document.querySelectorAll(".number")
const commaButton = document.querySelector("#comma")
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector("#equal-button")
const clearButton = document.querySelector("#clear")
const resetButton = document.querySelector("#reset")
let arrayScreenNumbers
let operator

const getOperator = () =>{
    if(screenNumber.innerText.includes("+")){
        operator = "+"
    }
    if(screenNumber.innerText.includes("-")){
        operator = "-"
    }
    if(screenNumber.innerText.includes("x")){
        operator = "x"
    }
    if(screenNumber.innerText.includes("/")){
        operator = "/"
    }
}

const splitOperation = () =>{
    getOperator()
    const operatorsExpression = /[\+\-\x\/]/
    arrayScreenNumbers = screenNumber.innerText.split(operatorsExpression)
    console.log(arrayScreenNumbers)
}

function operation(){
    splitOperation()
    let firstNumber = parseFloat(arrayScreenNumbers[0])
    let secondNumber = parseFloat(arrayScreenNumbers[1])
    if(operator === "+"){
        let sum = (firstNumber + secondNumber)
        screenNumber.innerText = sum.toString()
    }else if(operator === "-"){
        let rest = (firstNumber - secondNumber)
        screenNumber.innerText = rest.toString()
    }else if(operator === "x"){
        let multiply = (firstNumber * secondNumber)
        screenNumber.innerText = multiply.toString()
    }else if(operator === "/"){
        let divide = (firstNumber/secondNumber)
        screenNumber.innerText = divide.toString()
    }    
}

const addEventListeners = () =>{
    numberButtons.forEach(button => {
        button.addEventListener("click", (event) =>{
            screenNumber.innerText = screenNumber.innerText + event.target.innerText
        })
    })

    operatorButtons.forEach(button => {
        button.addEventListener("click", (event) =>{
            screenNumber.innerText = screenNumber.innerText + event.target.innerText
        })
    })

    commaButton.addEventListener("click", (event) =>{
        screenNumber.innerText = screenNumber.innerText + "."
    })

    clearButton.addEventListener("click", (event) =>{
        screenNumber.innerText = screenNumber.innerText.replace(/.$/, "")
    })

    resetButton.addEventListener("click", (event) =>{
        screenNumber.innerText = ""
    })

    equalButton.addEventListener("click", operation)
}


const calculator = () =>{
    addEventListeners()
}

calculator()