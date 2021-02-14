// import {select, on} from './main.js'
function select(id) {
    return document.getElementById(id)
}
select("estimate").innerHTML = "Hello world!";


select("houses").onchange = function() {writeEstimate(updateCost())}
select("furnishings").onchange = function() {writeEstimate(updateCost())}
// select("houses").onchange = function() {writeEstimate(updateCost())}

function updateCost() {
    let total = 0
    switch(select("houses").selectedIndex) {
        case 0:
            total += 50;
            break;
        case 1:
            total += 500;
            break;
        case 2:
            total += 5000;
            break;
        case 3:
            total += 20000;
    }
    switch(select("furnishing").selectedIndex) {
        case 0:
            break;
        case 1:
            total += 500;
            break;
        case 2:
            total += 5000;
            break;
        case 3:
            total += 40000;
    }
    return total;
}

function writeEstimate(estimate) {
    select("estimate").innerHTML = "$" + String(estimate)
}