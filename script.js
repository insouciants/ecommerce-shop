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
let lightBig = document.getElementById("lightBig")
let lightbox = document.getElementById("lightbox")
let nothing = document.getElementById("nothing")
let checkoutButton = document.getElementById("two")

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
        nothing.style.display = "flex"
    } else {
        let calculation = (counterValue * 125)
    checkoutContent.style.display = "flex"
    checkoutButton.style.display = "block"
    transactionInfoText = "$125" + " X " + counterValue + " = " + "$" + calculation
    transactionInfo.textContent = transactionInfoText
    counter.value = 0
    counterValue = 0
    nothing.style.display = 'none' 

    }
}

function showList() {
    if (checkoutBox.style.display === "none" || checkoutBox.style.display === "") {
        checkoutBox.style.display = "block"
    } else {
        checkoutBox.style.display = "none"
        checkoutButton.style.display = 'none'

    } 
}

function hideList() {
    if (checkoutContent.style.display === "flex") {
        checkoutContent.style.display = "none"
        nothing.style.display = "flex"
        checkoutButton.style.display = "none"
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
let currentImage = 1
function changeLightbox(value) {
    switch(value) {
        case 1: lightBig.src = "images/image-product-1.jpg"
        currentImage = value
        break
        case 2: lightBig.src = "images/image-product-2.jpg"
        currentImage = value
        break
        case 3: lightBig.src = "images/image-product-3.jpg"
        currentImage = value
        break
        case 4: lightBig.src = "images/image-product-4.jpg"
        currentImage = value
        break
    }
}

function change(value) {
    if (value === 'next') {
        switch(currentImage) {
            case 1:
                lightBig.src = "images/image-product-2.jpg"
                currentImage = 2
                break
            case 2:
                lightBig.src = "images/image-product-3.jpg"
                currentImage = 3
                break
            case 3:
                    lightBig.src = "images/image-product-4.jpg"
                    currentImage = 4
                    break
            case 4:
                    lightBig.src = "images/image-product-1.jpg"
                    currentImage = 1
                    break    
                  
        }
    } else {
        switch(currentImage) {
            case 1:
                lightBig.src = "images/image-product-4.jpg"
                currentImage = 4
                break
            case 2:
                lightBig.src = "images/image-product-1.jpg"
                currentImage = 1
                break
            case 3:
                    lightBig.src = "images/image-product-2.jpg"
                    currentImage = 2
                    break
            case 4:
                    lightBig.src = "images/image-product-3.jpg"
                    currentImage = 3
                    break    
                  
        }
    }
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function openLightbox() {
    lightbox.style.display = 'flex';
}