let counter = document.getElementById("counter")
let counterValue = 0
let transactionInfo = document.getElementById("transactionInfo")

function addCounterValue() {
    counterValue += 1
    counter.value = counterValue
}

function decreaseCounterValue() {
    if (counterValue === 0) {
        
    } else {counterValue -= 1
        counter.value = counterValue
    }
}

function addToCart() {
    transactionInfoText = "$125" + " X " + counterValue + " = " + "$" + (counterValue * 125)
    transactionInfo.textContent = transactionInfoText
    counter.value = 0
}