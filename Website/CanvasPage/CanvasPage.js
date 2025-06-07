"use strict"
class ImageCursorDef {
    constructor(
        anImageUrl,
        aHotSpotX,
        aHotSpotY) {
        this.imageUrl = anImageUrl;
        this.hotSpotX = aHotSpotX;
        this.hotSpotY = aHotSpotY;
    }
}

const redCursorDef = new ImageCursorDef("../Images/RedPenCursor.png", 0, 30);
const blueCursorDef = new ImageCursorDef("../Images/BluePenCursor.png", 0, 30);
const yellowCursorDef = new ImageCursorDef("../Images/YellowPenCursor.png", 0, 30);
const greenCursorDef = new ImageCursorDef("../Images/GreenPenCursor.png", 0, 30);
const orangeCursorDef = new ImageCursorDef("../Images/OrangePenCursor.png", 0, 30);
const purpleCursorDef = new ImageCursorDef("../Images/PurplePenCursor.png", 0, 30);
const spongeCursorDef = new ImageCursorDef("../Images/SpongeCursor.png", 10, 10);
let currentCursorDef = redCursorDef;
let imageCursor;

let cursorX;
let cursorY;

var canvas;
var ctx;
var color = "#EBA09E";
var mustDraw = false;
var lineWidth = 4;
var prevX;
var prevY;
var currX;
var currY;

initialize();

function initialize() {
    canvas = document.getElementById('canvasId');
    ctx = canvas.getContext("2d");

    imageCursor = document.getElementById('imageCursor');

    document.getElementById('redRadioButton').onclick = redPenSelected;
    document.getElementById('blueRadioButton').onclick = bluePenSelected;
    document.getElementById('yellowRadioButton').onclick = yellowPenSelected;
    document.getElementById('greenRadioButton').onclick = greenPenSelected;
    document.getElementById('orangeRadioButton').onclick = orangePenSelected;
    document.getElementById('purpleRadioButton').onclick = purplePenSelected;
    document.getElementById('spongeRadioButton').onclick = spongeSelected;

    canvas.addEventListener("mousemove", mouseMoveHandler, false);
    canvas.addEventListener("mousedown", mouseDownHandler, false);
    canvas.addEventListener("mouseup", mouseUpHandler, false);
    canvas.addEventListener("mouseout", mouseOutHandler, false);
}

function redPenSelected()
{
    color = "#EBA09EA0";
    currentCursorDef = redCursorDef;
    imageCursor.src = currentCursorDef.imageUrl;
}

function bluePenSelected()
{
    color = "#81C1DCA0";
    currentCursorDef = blueCursorDef;
    imageCursor.src = currentCursorDef.imageUrl;
}

function yellowPenSelected()
{
    color = "#DDD1A0A0";
    currentCursorDef = yellowCursorDef;
    imageCursor.src = currentCursorDef.imageUrl;
}

function greenPenSelected()
{
    color = "#A6D3BCA0";
    currentCursorDef = greenCursorDef;
    imageCursor.src = currentCursorDef.imageUrl;
}

function orangePenSelected()
{
    color = "#E8BB9BA0";
    currentCursorDef = orangeCursorDef;
    imageCursor.src = currentCursorDef.imageUrl;
}

function purplePenSelected()
{
    color = "#D5B4C7A0";
    currentCursorDef = purpleCursorDef;
    imageCursor.src = currentCursorDef.imageUrl;
}

function spongeSelected()
{
    color = "#3A3A3AA0";
    currentCursorDef = spongeCursorDef;
    imageCursor.src = currentCursorDef.imageUrl;
}

function draw()
{
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();
}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
        scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y

    currX = (evt.clientX - rect.left) * scaleX;
    currY = (evt.clientY - rect.top) * scaleY;
    cursorX = (evt.clientX);
    cursorY = (evt.clientY);

    //    alert(
    //        "client rect left:" + rect.left + " right:" + rect.right + " top:" + rect.top + " bottom:" + rect.bottom
    //        + "\ncanvas width:" + canvas.width + " height: " + canvas.height
    //        + "\nScale X:" + scaleX + " scaleY: " + scaleY
    //        + "\nCanvasX:" + currX + " CanvasY: " + currY
    //    );
}

function mouseMoveHandler(e)
{
    prevX = currX;
    prevY = currY;
    if (mustDraw)
    {
        prevX = currX;
        prevY = currY;
        getMousePos(canvas, e)
        draw();
        imageCursor.style.left = cursorX - currentCursorDef.hotSpotX + 'px';
        imageCursor.style.top = cursorY - currentCursorDef.hotSpotY + 'px';
        }
}

function mouseOutHandler()
{
    mustDraw = false;
}

function mouseDownHandler(e)
{
    getMousePos(canvas, e)
    mustDraw = true;
}

function mouseUpHandler()
{
    mustDraw = false;
}


