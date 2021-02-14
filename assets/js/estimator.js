// import {select, on} from './main.js'
function select(id) {
    return document.getElementById(id)
}
select("estimate").innerHTML = "Enter data for an estimate...";


select("houses").onchange = function() {writeEstimate(updateCost())}
select("furnishing").onchange = function() {writeEstimate(updateCost())}
select("sqft").onchange = function() {writeEstimate(updateCost())}
select("flooring").onchange = function() {writeEstimate(updateCost())}
select("low").onchange = function() {writeEstimate(updateCost())}
select("high").onchange = function() {writeEstimate(updateCost())}
// select("houses").onchange = function() {writeEstimate(updateCost())}


const houses = [50, 500, 5000, 20000];
const furnishing = [0, 500, 5000, 40000];
const flooring = [0, 5, 20];

function updateCost() {
    let total = 0;
    total += houses[select("houses").selectedIndex];
    total += furnishing[select("furnishing").selectedIndex];
    total += select("sqft").value * flooring[select("flooring").selectedIndex];
    return total;
}

function writeEstimate(estimate) {
    select("estimate").innerHTML = "$" + String(estimate)
}