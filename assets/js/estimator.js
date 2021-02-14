// import {select, on} from './main.js'
function select(id) {
    return document.getElementById(id)
}
select("estimate").innerHTML = "Enter data for an estimate...";


select("couch").onchange = function() {writeEstimate(updateCost())}
select("couch_num").onchange = function() {writeEstimate(updateCost())}
select("sqft").onchange = function() {writeEstimate(updateCost())}
select("flooring").onchange = function() {writeEstimate(updateCost())}
select("low").onchange = function() {writeEstimate(updateCost())}
select("high").onchange = function() {writeEstimate(updateCost())}
select("bedframes").onchange = function() {writeEstimate(updateCost())}
select("refrigerator").onchange = function() {writeEstimate(updateCost())}
// select("houses").onchange = function() {writeEstimate(updateCost())}


const couch_low = [0, 200, 400, 600];
const couch_high = [0, 400, 600, 1000]
const flooring_low = [0, 6, 1];
const flooring_high = [0, 12, 4];
const refrigerator = [0, 150, 650, 1300];

function updateCost() {
    const offset = 0;
    let total = 0;
    if (select("high").checked) {
        total += couch_high[select("couch").selectedIndex] * select("couch_num").value;
        total += select("sqft").value * flooring_high[select("flooring").selectedIndex];
        total += select("bedframes").value * 350;

    } else {
        total += couch_low[select("couch").selectedIndex] * select("couch_num").value;
        total += select("sqft").value * flooring_low[select("flooring").selectedIndex];
        total += select("bedframes").value * 90;
    }
    total += refrigerator[select("refrigerator").selectedIndex];
    return total;
}

function writeEstimate(estimate) {
    select("estimate").innerHTML = "$" + String(estimate)
}