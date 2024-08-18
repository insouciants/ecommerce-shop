let counter = document.getElementById("counter")
let counterValue = 0
let transactionInfo = document.getElementById("transactionInfo")
let checkoutBox = document.getElementById("checkoutBox")
let checkoutContent = document.getElementById("checkoutContent")
let bigImage = document.getElementById("bigImage")
let firstImg = document.getElementById("1")
let secondImg = document.getElementById("2")
let thirdImg = document.getElementById("3")
let fourthImg = document.getElementById("4")

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
    if (counter.value === "0") {
        checkoutContent.style.display = "none"
    } else
    checkoutContent.style.display = "flex"
    transactionInfoText = "$125" + " X " + counterValue + " = " + "$" + (counterValue * 125)
    transactionInfo.textContent = transactionInfoText
    counter.value = 0
    counterValue = 0
}

function showList() {
    if (checkoutBox.style.display === "none" || checkoutBox.style.display === "") {
        checkoutBox.style.display = "block"
    } else {
        checkoutBox.style.display = "none"
    }
}

function changeBigImage(value) {
    switch(value) {
        case 1: bigImage.src = "images/image-product-1.jpg"
        break
        case 2: bigImage.src = "images/image-product-2.jpg"
        break
        case 3: bigImage.src = "images/image-product-3.jpg"
        break
        case 4: bigImage.src = "images/image-product-4.jpg"
        break
    }
}