"use strict"
import { ImageFontDef } from "./ImageFontDef.js";
export class HandDrawFont extends ImageFontDef {
    constructor() {
        super("../Fonts/HandDraw/");
        this.addCharDef(' ', 'space.png', 20, 7, 0);
        this.addCharDef('a', 'a_lower.png', 20, 39, 0);
        this.addCharDef('b', 'b_lower.png', 17, 46, 0);
        this.addCharDef('c', 'c_lower.png', 18, 38, 0);
        this.addCharDef('d', 'd_lower.png', 16, 46, 0);
        this.addCharDef('e', 'e_lower.png', 18, 38, 0);
        this.addCharDef('f', 'f_lower.png', 16, 48, 0);
        this.addCharDef('g', 'g_lower.png', 19, 46, 8);
        this.addCharDef('h', 'h_lower.png', 18, 47, 0);
        this.addCharDef('i', 'i_lower.png', 8, 47, 0);
        this.addCharDef('j', 'j_lower.png', 11, 44, 6);
        this.addCharDef('k', 'k_lower.png', 18, 49, 0);
        this.addCharDef('l', 'l_lower.png', 13, 47, 0);
        this.addCharDef('m', 'm_lower.png', 25, 36, 0);
        this.addCharDef('n', 'n_lower.png', 18, 39, 0);
        this.addCharDef('o', 'o_lower.png', 20, 38, 0);
        this.addCharDef('p', 'p_lower.png', 16, 46, 8);
        this.addCharDef('q', 'q_lower.png', 16, 46, 8);
        this.addCharDef('r', 'r_lower.png', 16, 38, 0);
        this.addCharDef('s', 's_lower.png', 17, 38, 0);
        this.addCharDef('t', 't_lower.png', 13, 43, 0);
        this.addCharDef('u', 'u_lower.png', 18, 36, 0);
        this.addCharDef('v', 'v_lower.png', 17, 35, 0);
        this.addCharDef('w', 'w_lower.png', 24, 38, 0);
        this.addCharDef('x', 'x_lower.png', 19, 39, 0);
        this.addCharDef('y', 'y_lower.png', 16, 45, 8);
        this.addCharDef('z', 'z_lower.png', 16, 38, 0);

        this.addCharDef('A', 'a_upper.png', 23, 49, 0);
        this.addCharDef('B', 'b_upper.png', 19, 48, 0);
        this.addCharDef('C', 'c_upper.png', 21, 48, 0);
        this.addCharDef('D', 'd_upper.png', 21, 47, 0);
        this.addCharDef('E', 'e_upper.png', 20, 49, 0);
        this.addCharDef('F', 'f_upper.png', 17, 49, 0);
        this.addCharDef('G', 'g_upper.png', 22, 49, 0);
        this.addCharDef('H', 'h_upper.png', 22, 49, 0);
        this.addCharDef('I', 'i_upper.png', 12, 50, 0);
        this.addCharDef('J', 'j_upper.png', 20, 50, 0);
        this.addCharDef('K', 'k_upper.png', 24, 50, 0);
        this.addCharDef('L', 'l_upper.png', 20, 50, 0);
        this.addCharDef('M', 'm_upper.png', 30, 49, 0);
        this.addCharDef('N', 'n_upper.png', 21, 50, 0);
        this.addCharDef('O', 'o_upper.png', 23, 50, 0);
        this.addCharDef('P', 'p_upper.png', 21, 50, 0);
        this.addCharDef('Q', 'q_upper.png', 22, 57, 6);
        this.addCharDef('R', 'r_upper.png', 21, 50, 0);
        this.addCharDef('S', 's_upper.png', 21, 49, 0);
        this.addCharDef('T', 't_upper.png', 23, 49, 0);
        this.addCharDef('U', 'u_upper.png', 23, 50, 0);
        this.addCharDef('V', 'v_upper.png', 24, 50, 0);
        this.addCharDef('W', 'w_upper.png', 37, 49, 0);
        this.addCharDef('X', 'x_upper.png', 24, 48, 0);
        this.addCharDef('Y', 'y_upper.png', 23, 49, 0);
        this.addCharDef('Z', 'z_upper.png', 21, 49, 0);
    }
}

