"use strict"
import { ImageFontDef } from "../modules/ImageFontDef.js";

class SolidColorFont extends ImageFontDef {
    constructor() {
        super("../Fonts/SolidColor/");
        this.AddChar(' ', 'space.png', 62, 27, 0);
        this.AddChar('a', 'a_lower.png', 56, 50, 0);
        this.AddChar('b', 'b_lower.png', 46, 80, 0);
        this.AddChar('c', 'c_lower.png', 52, 52, 0);
        this.AddChar('d', 'd_lower.png', 73, 81, 0);
        this.AddChar('e', 'e_lower.png', 54, 49, 0);
        this.AddChar('f', 'f_lower.png', 53, 120, 0);
        this.AddChar('g', 'g_lower.png', 57, 79, 30);
        this.AddChar('h', 'h_lower.png', 55, 75, 0);
        this.AddChar('i', 'i_lower.png', 21, 69, 0);
        this.AddChar('j', 'j_lower.png', 45, 84, 20);
        this.AddChar('k', 'k_lower.png', 60, 66, 0);
        this.AddChar('l', 'l_lower.png', 18, 72, 0);
        this.AddChar('m', 'm_lower.png', 85, 50, 0);
        this.AddChar('n', 'n_lower.png', 63, 54, 0);
        this.AddChar('o', 'o_lower.png', 59, 50, 0);
        this.AddChar('p', 'p_lower.png', 62, 111, 52);
        this.AddChar('q', 'q_lower.png', 53, 93, 40);
        this.AddChar('r', 'r_lower.png', 46, 54, 0);
        this.AddChar('s', 's_lower.png', 38, 53, 0);
        this.AddChar('t', 't_lower.png', 48, 73, 0);
        this.AddChar('u', 'u_lower.png', 61, 48, 0);
        this.AddChar('v', 'v_lower.png', 54, 46, 0);
        this.AddChar('w', 'w_lower.png', 71, 46, 0);
        this.AddChar('x', 'x_lower.png', 56, 53, 0);
        this.AddChar('y', 'y_lower.png', 52, 91, 45);
        this.AddChar('z', 'z_lower.png', 57, 43, 0);

        this.AddChar('A', 'a_upper.png', 64, 71, 0);
        this.AddChar('B', 'b_upper.png', 55, 71, 0);
        this.AddChar('C', 'c_upper.png', 70, 73, 0);
        this.AddChar('D', 'd_upper.png', 59, 71, 0);
        this.AddChar('E', 'e_upper.png', 62, 68, 0);
        this.AddChar('F', 'f_upper.png', 64, 66, 0);
        this.AddChar('G', 'g_upper.png', 96, 70, 0);
        this.AddChar('H', 'h_upper.png', 45, 70, 0);
        this.AddChar('I', 'i_upper.png', 49, 66, 0);
        this.AddChar('J', 'j_upper.png', 55, 70, 0);
        this.AddChar('K', 'k_upper.png', 54, 76, 0);
        this.AddChar('L', 'l_upper.png', 51, 73, 0);
        this.AddChar('M', 'm_upper.png', 67, 73, 0);
        this.AddChar('N', 'n_upper.png', 60, 70, 0);
        this.AddChar('O', 'o_upper.png', 57, 74, 0);
        this.AddChar('P', 'p_upper.png', 60, 75, 0);
        this.AddChar('Q', 'q_upper.png', 65, 81, 0);
        this.AddChar('R', 'r_upper.png', 65, 78, 0);
        this.AddChar('S', 's_upper.png', 43, 75, 0);
        this.AddChar('T', 't_upper.png', 67, 75, 0);
        this.AddChar('U', 'u_upper.png', 57, 76, 0);
        this.AddChar('V', 'v_upper.png', 65, 91, 0);
        this.AddChar('W', 'w_upper.png', 74, 77, 0);
        this.AddChar('X', 'x_upper.png', 50, 80, 0);
        this.AddChar('Y', 'y_upper.png', 76, 73, 0);
        this.AddChar('Z', 'z_upper.png', 68, 72, 0);
    }
}

class HandDrawFont extends ImageFontDef {
    constructor() {
        super("../Fonts/HandDraw/");
        this.AddChar(' ', 'space.png', 20, 7, 0);
        this.AddChar('a', 'a_lower.png', 20, 39, 0);
        this.AddChar('b', 'b_lower.png', 17, 46, 0);
        this.AddChar('c', 'c_lower.png', 18, 38, 0);
        this.AddChar('d', 'd_lower.png', 16, 46, 0);
        this.AddChar('e', 'e_lower.png', 18, 38, 0);
        this.AddChar('f', 'f_lower.png', 16, 48, 0);
        this.AddChar('g', 'g_lower.png', 19, 46, 8);
        this.AddChar('h', 'h_lower.png', 18, 47, 0);
        this.AddChar('i', 'i_lower.png', 8, 47, 0);
        this.AddChar('j', 'j_lower.png', 11, 44, 6);
        this.AddChar('k', 'k_lower.png', 18, 49, 0);
        this.AddChar('l', 'l_lower.png', 13, 47, 0);
        this.AddChar('m', 'm_lower.png', 25, 36, 0);
        this.AddChar('n', 'n_lower.png', 18, 39, 0);
        this.AddChar('o', 'o_lower.png', 20, 38, 0);
        this.AddChar('p', 'p_lower.png', 16, 46, 8);
        this.AddChar('q', 'q_lower.png', 16, 46, 8);
        this.AddChar('r', 'r_lower.png', 16, 38, 0);
        this.AddChar('s', 's_lower.png', 17, 38, 0);
        this.AddChar('t', 't_lower.png', 13, 43, 0);
        this.AddChar('u', 'u_lower.png', 18, 36, 0);
        this.AddChar('v', 'v_lower.png', 17, 35, 0);
        this.AddChar('w', 'w_lower.png', 24, 38, 0);
        this.AddChar('x', 'x_lower.png', 19, 39, 0);
        this.AddChar('y', 'y_lower.png', 16, 45, 8);
        this.AddChar('z', 'z_lower.png', 16, 38, 0);

        this.AddChar('A', 'a_upper.png', 23, 49, 0);
        this.AddChar('B', 'b_upper.png', 19, 48, 0);
        this.AddChar('C', 'c_upper.png', 21, 48, 0);
        this.AddChar('D', 'd_upper.png', 21, 47, 0);
        this.AddChar('E', 'e_upper.png', 20, 49, 0);
        this.AddChar('F', 'f_upper.png', 17, 49, 0);
        this.AddChar('G', 'g_upper.png', 22, 49, 0);
        this.AddChar('H', 'h_upper.png', 22, 49, 0);
        this.AddChar('I', 'i_upper.png', 12, 50, 0);
        this.AddChar('J', 'j_upper.png', 20, 50, 0);
        this.AddChar('K', 'k_upper.png', 24, 50, 0);
        this.AddChar('L', 'l_upper.png', 20, 50, 0);
        this.AddChar('M', 'm_upper.png', 30, 49, 0);
        this.AddChar('N', 'n_upper.png', 21, 50, 0);
        this.AddChar('O', 'o_upper.png', 23, 50, 0);
        this.AddChar('P', 'p_upper.png', 21, 50, 0);
        this.AddChar('Q', 'q_upper.png', 22, 57, 6);
        this.AddChar('R', 'r_upper.png', 21, 50, 0);
        this.AddChar('S', 's_upper.png', 21, 49, 0);
        this.AddChar('T', 't_upper.png', 23, 49, 0);
        this.AddChar('U', 'u_upper.png', 23, 50, 0);
        this.AddChar('V', 'v_upper.png', 24, 50, 0);
        this.AddChar('W', 'w_upper.png', 37, 49, 0);
        this.AddChar('X', 'x_upper.png', 24, 48, 0);
        this.AddChar('Y', 'y_upper.png', 23, 49, 0);
        this.AddChar('Z', 'z_upper.png', 21, 49, 0);
    }
}

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
