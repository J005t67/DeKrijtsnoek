"use strict"
import { ImageFontDef } from "./ImageFontDef.js";
export class HandDrawFont extends ImageFontDef {
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

