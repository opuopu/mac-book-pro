// calling-id
const productPrice = document.getElementById("price")
const memoryCost = document.getElementById("memory-cost")
const stroageCost = document.getElementById("stroage-cost")
const deliveryCost = document.getElementById("delivery-fee")
const totalPrice = document.getElementById("total-price")
const lastTotal = document.getElementById("last-total")
const promoCode = document.getElementById("input-code")
const price = document.getElementById("price")

// memory section
function memoryfield(cost){
    const ammount  = cost
    memoryCost.innerText = ammount;
    totalammount()
}
// stroage section
function stroageammount(price){
    const ammount  = price
    stroageCost.innerText = ammount;
    totalammount()
}
// delivery section
function  delivery(fee){
const ammount  = fee;
deliveryCost.innerText = ammount;
totalammount()
}
// total ammount
function totalammount(){
const memoryPrice = memoryCost.innerText;
const stroagePrice = stroageCost.innerText;
const deliveryPrice = deliveryCost.innerText;
const bestPrice = price.innerText;
const total = parseInt(memoryPrice) + parseInt(stroagePrice) + parseInt(deliveryPrice) +  parseInt(bestPrice)
totalPrice.innerText = total;
lastTotal.innerText = total;
}
//  promo code

function discountCode(){
    const lastPrice = lastTotal.innerText;
  
    if(promoCode.value == "stevekaku" ){
        const discountPrice = parseFloat(lastPrice)
        const discount = discountPrice*20/100;
        const lastAmount = discountPrice - discount;
        lastTotal.innerText = lastAmount;
        promoCode.value = "";
    }
   else{
       alert("pls input valid promo code")
   }
}