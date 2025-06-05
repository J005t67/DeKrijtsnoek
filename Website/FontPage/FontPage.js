"use strict"

import { HandDrawFont } from "../modules/HandDrawFont.js";
import { SolidColorFont } from "../modules/SolidColorFont.js";

let handDrawFont = new HandDrawFont();
let solidColorFont = new SolidColorFont();

let textDiv = document.getElementById("textDiv");
let textDiv2 = document.getElementById("textDiv2");

let baseline = 0;

let scale = 1.0
baseline += scale * solidColorFont.getFontHeight();
displayText(textDiv, 'De KrijtSnoek', solidColorFont, 50, baseline, scale);

scale = 1.5
baseline += scale * handDrawFont.getFontHeight();
displayText(textDiv, 'De KrijtSnoek', handDrawFont, 50, baseline, scale);

scale = 0.6;
baseline += scale * solidColorFont.getFontHeight();
displayText(textDiv, 'the quick brown fox jumps over the lazy dog', solidColorFont, 50, baseline, scale);

scale = 0.7;
baseline += scale * handDrawFont.getFontHeight();
displayText(textDiv, 'the quick brown fox jumps over the lazy dog', handDrawFont, 50, baseline, scale);

scale = 1.0;
baseline += scale * handDrawFont.getFontHeight();
displayText(textDiv, 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', handDrawFont, 50, baseline, scale);

scale = 0.7;
baseline += scale * solidColorFont.getFontHeight();
displayText(textDiv, 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', solidColorFont, 50, baseline, scale);

displayMultiLineText(textDiv2, 'Een klein verhaaltje om te testen of automatisch wordwrap en newline ook werkt. Zou leuk zijn.', solidColorFont, 50, 50, 0.7);

function displayMultiLineText(textDiv, text, fontDef, x, y, scale) {
    let clientRect = textDiv.getBoundingClientRect();
    let maxLineWidth = clientRect.width;
    let startIndex = 0;
    let lineWidth = 0;
    let index = 0;
    // Do no start new line on leading space
    while (index < text.length && text[index] == ' ') {
        lineWidth += fontDef.getCharDef(' ').width;
        index++;
    }
    let endIndex = index;
    let wordWidth = 0;
    for (; index < text.length; index++) {
        let ch = text[index];
        let charDef = fontDef.getCharDef(ch);
        if (charDef === undefined) continue;
        if (ch != ' ') {
            wordWidth += charDef.width;
        }
        else {
            // if complete word fits on current line
            if (scale * (lineWidth + wordWidth) < maxLineWidth) {
                lineWidth += wordWidth;
                wordWidth = charDef.width;
                endIndex = index;
            }
            else {
                let textLine = text.substring(0, endIndex);
                displayText(textDiv, textLine, fontDef, x, y, scale);
                let remainingText = text.substring(endIndex + 1);
                displayMultiLineText(textDiv, remainingText, fontDef, x, y + scale * fontDef.getFontHeight(), scale);
                return;
            }
        }
    }
    displayText(textDiv, text, fontDef, x, y, scale);
}

function displayText(textDiv, text, fontDef, x, y, scale)
{
    let baselineY = y;
    let cursorX = x;
    for (let i = 0; i < text.length; i++) {
//                    alert(i + ' ' + text[i]);
        let charDef = fontDef.getCharDef(text[i]);
//                    alert('charDef: ' + fontDef.GetCharDef(text[i]));
        if (charDef != null) {
            //alert(i + ' ' + text[i]);
            let img = document.createElement("img");
            img.src = charDef.imageUrl;
            img.style.position = "absolute";
            img.style.top = baselineY + scale * (charDef.baseline -  charDef.height) + 'px';
            img.style.left = cursorX + 'px';
            img.width = scale * charDef.width;
            img.height = scale * charDef.height;
            cursorX += scale *charDef.width;
            //alert('i: ' + i +
            //    '\nc: ' + text[i] +
            //    '\nh: ' + charDef.height +
            //    '\nw: ' + charDef.width +
            //    '\nscale: ' + scale +
            //    '\nx: ' + cursorX);

            textDiv.appendChild(img);
        }
    }
}
