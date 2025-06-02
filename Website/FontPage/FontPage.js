"use strict"

import { HandDrawFont } from "../modules/HandDrawFont.js";
import { SolidColorFont } from "../modules/SolidColorFont.js";

let handDrawFont = new HandDrawFont();
let solidColorFont = new SolidColorFont();

let textDiv = document.getElementById("textDiv");
DisplayText(textDiv, 'De KrijtSnoek', solidColorFont, 50, 150, 1.0);
DisplayText(textDiv, 'De KrijtSnoek', handDrawFont, 50, 200, 1.5);
DisplayText(textDiv, 'the quick brown fox jumps over the lazy dog', solidColorFont, 50, 300, 0.6);
DisplayText(textDiv, 'the quick brown fox jumps over the lazy dog', handDrawFont, 50, 350, 0.7);
DisplayText(textDiv, 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', handDrawFont, 50, 400, 1.0);
DisplayText(textDiv, 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', solidColorFont, 50, 500, 0.7);
DisplayText(textDiv2, 'Een klein verhaaltje om te testen of automatisch wordwrap en newline ook werkt. Zou leuk zijn.', solidColorFont, 50, 50, 0.7);

function DisplayText(textDiv, text, fontDef, x, y, scale)
{
    let baselineY = y;
    let cursorX = x;
    for (let i = 0; i < text.length; i++) {
//                    alert(i + ' ' + text[i]);
        let charDef = fontDef.GetCharDef(text[i]);
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
        else {
//                        alert(i + ' ' + text[i] + ' CharDef not found');
        }
    }
}
