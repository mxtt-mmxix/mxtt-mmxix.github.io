// JavaScript source code
var lineCount = 0

function main() {
    clockUpdate();
    uptimeUpdate();
    print("New login at: " + getTime());
}

function newElement(element, content) {
    var newElement = document.createElement(element);
    var text = document.createTextNode("[" + getTime() + "] >> " + content);
    lineCount++;
    newElement.id = lineCount;
    newElement.appendChild(text);
    document.body.appendChild(newElement);   
}

function print(text) {
    newElement("P", text);
}

function clockUpdate() {
    document.getElementById('clock').innerHTML = "Time: " + getTime();
    setTimeout(clockUpdate, 500);
}

function uptimeUpdate() {
    var today = new Date();
    var currentTime = today.getTime() - 1546555083448;
    document.getElementById('stopwatch').innerHTML = "Uptime: " + currentTime + "ms";
    setTimeout(uptimeUpdate, 1);
}

function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var time = h + ":" + m + ":" + s;
    return time;
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}