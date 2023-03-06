let redDecimalValue = parseInt(document.getElementById("red").value, 10)
let greenDecimalValue = parseInt(document.getElementById("green").value, 10)
let blueDecimalValue = parseInt(document.getElementById("blue").value, 10)
                
let redHexadecimalValue = "00"
let greenHexadecimalValue = "00"
let blueHexadecimalValue = "00"
                
let currentColor = "#000000"
let currentColorValue = "🎨#000000"
                
let mouseIsClicked = false
                
convertRedToHexadecimal()
convertGreenToHexadecimal()
convertBlueToHexdecimal()
                
document.getElementById("currentColorValue").innerHTML = currentColorValue
                
function debug() {
    console.log("👇 Debug Start 👇")
    console.log("redDecimalValue: "+redDecimalValue)
    console.log("greenDecimalValue: "+greenDecimalValue)
    console.log("blueDecimalValue: "+blueDecimalValue)
    console.log("redHexadecimalValue: "+redHexadecimalValue)
    console.log("greenHexadecimalValue: "+greenHexadecimalValue)
    console.log("blueHexaDecimalValue: "+blueHexadecimalValue)
    console.log("currentColor: "+currentColor)
    console.log("currentColorValue: "+currentColorValue)
    console.log("mouseIsClicked: "+mouseIsClicked)
}
                
function convertRedToHexadecimal() {
    redHexadecimalValue = parseInt(document.getElementById("red").value, 10)
    redHexadecimalValue = redHexadecimalValue.toString(16)
    redHexadecimalValue = redHexadecimalValue.padStart(2, '0')
    currentColor = "#"+redHexadecimalValue+greenHexadecimalValue+blueHexadecimalValue
    document.getElementById("currentColorSample").style.backgroundColor = currentColor
    document.getElementById("currentColorValue").innerHTML = "🎨"+currentColor
}
                
function convertGreenToHexadecimal() {
    greenHexadecimalValue = parseInt(document.getElementById("green").value, 10)
    greenHexadecimalValue = greenHexadecimalValue.toString(16)
    greenHexadecimalValue = greenHexadecimalValue.padStart(2, '0')
    currentColor = "#"+redHexadecimalValue+greenHexadecimalValue+blueHexadecimalValue
    document.getElementById("currentColorSample").style.backgroundColor = currentColor
    document.getElementById("currentColorValue").innerHTML = "🎨"+currentColor
}
                
function convertBlueToHexdecimal () {
    blueHexadecimalValue = parseInt(document.getElementById("blue").value, 10)
    blueHexadecimalValue = blueHexadecimalValue.toString(16)
    blueHexadecimalValue = blueHexadecimalValue.padStart(2, '0')
    currentColor = "#"+redHexadecimalValue+greenHexadecimalValue+blueHexadecimalValue
    document.getElementById("currentColorSample").style.backgroundColor = currentColor
    document.getElementById("currentColorValue").innerHTML = "🎨"+currentColor
}
                
red.addEventListener("input", convertRedToHexadecimal)
green.addEventListener("input", convertGreenToHexadecimal)
blue.addEventListener("input", convertBlueToHexdecimal)
                
function createSketchArea() {
    let table = document.createElement("table")
    table.setAttribute("id", "sketchArea")
    table.style.margin = "0 auto"
    table.style.border = "1px solid black"
    table.setAttribute("cellspacing", 0)
    for (let i = 0; i < 16; i++) {
        let row = table.insertRow(i)
        for (let j = 0; j < 16; j++) {
            let cell = row.insertCell(j)
            cell.innerHTML = "&nbsp"
            cell.className = "not-selectable"
            cell.style.width = "50px"
            cell.style.height = "50px"
            cell.style.border = "0px"
            cell.style.padding = "0px"
            cell.style.margin = "0px"
            cell.addEventListener("pointerdown",
                function(e) {
                    e.preventDefault()
                    mouseIsClicked = true
                    cell.style.backgroundColor = currentColor
                    document.getElementById("debugDisplay").innerHTML = "X: " + e.clientX + "Y: " + e.clientY
                    document.getElementById("debugDisplay2").innerHTML = "e.type:" + e.type;
                }
            )
            cell.addEventListener("pointerup",
                function(e) {
                    e.preventDefault()
                    mouseIsClicked = false
                    document.getElementById("debugDisplay").innerHTML = "X: " + e.clientX + "Y: " + e.clientY
                    document.getElementById("debugDisplay2").innerHTML = "e.type:" + e.type;
                }
            )
            cell.addEventListener("pointerover", 
                function(e) {
                    if (mouseIsClicked) {
                        e.preventDefault()
                        cell.style.backgroundColor = currentColor
                        document.getElementById("debugDisplay").innerHTML = "X: " + e.clientX + "Y: " + e.clientY
                        document.getElementById("debugDisplay2").innerHTML = "e.type:" + e.type;
                    }
                }
            )
            cell.addEventListener("touchmove",
                function(e) {
                    e.preventDefault()
                    let target = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
                    if(target.tagName === "TD"){
                        target.style.backgroundColor = currentColor;
                    }
                    document.getElementById("debugDisplay").innerHTML = "X: " + e.touches[0].clientX + "Y: " + e.touches[0].clientY
                    document.getElementById("debugDisplay2").innerHTML = "e.type:" + e.type
                }
            )
                    document.body.appendChild(table)
        }
    }
}