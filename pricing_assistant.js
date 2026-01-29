let productName = "Vape Starter Kit";
let costPerUnit = 11.25; 
let basePrice = 26.99;
let discountRate = .10;
let salesTaxRate = .07; 
let fixedMonthlyCosts = 2250; 

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Product:", productName); 
console.log("Discounted Price (before tax):", discountedPrice); 
console.log("Final price with tax:", finalPriceWithTax);
console.log("Profit per unit:", profitPerUnit); 
console.log("Break-even units:", breakEvenUnits); 
console.log("Per-unit profitability (true/false):", isProfitablePerUnit);
