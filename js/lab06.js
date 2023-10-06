// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
    
while (true) {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));

    // Validate investment
    if (!isNaN(investment)) {
        break
    } else {
        // If it’s not numeric, the prompt should simply reappear until the user enters a valid investment.
        console.error('Investment must numeric.')
    }
} 

while (true) {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));

    // Validate rate
    if (!isNaN(rate) && rate >= 0 && rate <= 6) {
        break
    } else {
        // If it’s not numeric and not between 0 and 6%, the prompt should simply reappear until the user enters a valid rate.
        console.error('Rate must numeric and between 0 and 6%.')
    }
}    

while (true) {
    years = parseInt(prompt('Enter the number of years you want to invest for'));

    // Validate years
    if (!isNaN(years) && years >= 1 && years <= 30) {
        break
    } else {
        // If it’s not numeric and not between 1 and 30, the prompt should simply reappear until the user enters a valid years.
        console.error('Years must numeric and between 1 and 30.')
    }
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);