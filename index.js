const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
let totalBatteries = batteryBatches.reduce(calcTotal, 0);

function calcTotal(total, num){
    return total + num;
}

