// // total number of months
var totalMonths = (finances.length);
// // the net total amount of profit/loss over the period
var sum = 0;
for (i = 0, j = 1; i < finances.length; i++) {
    var figures = (finances[i][j])
    sum += finances[i][j]
    // Changes in Profit/Loss
    var diff = finances[i][j]
    diff += finances[i][j] - finances[i][j]
    var max = figures
    if (diff > max) {
        max = diff
    } else {
        max = max
    }

}
// Average change
var ave = diff / totalMonths
let n = ave.toFixed(2);

console.log('```text')
console.log('Financial Analysis')
console.log('-------------------------')
console.log('Total Months: '+totalMonths)
console.log('Total : '+'$'+sum)
console.log('Average Change: '+'$'+n)
console.log('Greatest Increase in Profits: '+'in progress')
console.log('Greatest Decrease in Profits: '+'in progress')


