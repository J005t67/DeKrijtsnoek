"use strict"
import { ImageFontDef } from "./ImageFontDef.js";
export class SolidColorFont extends ImageFontDef {
    constructor() {
        super("../Fonts/SolidColor/");
        this.addCharDef(' ', 'space.png', 62, 27, 0);
        this.addCharDef('a', 'a_lower.png', 56, 50, 0);
        this.addCharDef('b', 'b_lower.png', 46, 80, 0);
        this.addCharDef('c', 'c_lower.png', 52, 52, 0);
        this.addCharDef('d', 'd_lower.png', 73, 81, 0);
        this.addCharDef('e', 'e_lower.png', 54, 49, 0);
        this.addCharDef('f', 'f_lower.png', 53, 120, 0);
        this.addCharDef('g', 'g_lower.png', 57, 79, 30);
        this.addCharDef('h', 'h_lower.png', 55, 75, 0);
        this.addCharDef('i', 'i_lower.png', 21, 69, 0);
        this.addCharDef('j', 'j_lower.png', 45, 84, 20);
        this.addCharDef('k', 'k_lower.png', 60, 66, 0);
        this.addCharDef('l', 'l_lower.png', 18, 72, 0);
        this.addCharDef('m', 'm_lower.png', 85, 50, 0);
        this.addCharDef('n', 'n_lower.png', 63, 54, 0);
        this.addCharDef('o', 'o_lower.png', 59, 50, 0);
        this.addCharDef('p', 'p_lower.png', 62, 111, 52);
        this.addCharDef('q', 'q_lower.png', 53, 93, 40);
        this.addCharDef('r', 'r_lower.png', 46, 54, 0);
        this.addCharDef('s', 's_lower.png', 38, 53, 0);
        this.addCharDef('t', 't_lower.png', 48, 73, 0);
        this.addCharDef('u', 'u_lower.png', 61, 48, 0);
        this.addCharDef('v', 'v_lower.png', 54, 46, 0);
        this.addCharDef('w', 'w_lower.png', 71, 46, 0);
        this.addCharDef('x', 'x_lower.png', 56, 53, 0);
        this.addCharDef('y', 'y_lower.png', 52, 91, 45);
        this.addCharDef('z', 'z_lower.png', 57, 43, 0);

        this.addCharDef('A', 'a_upper.png', 64, 71, 0);
        this.addCharDef('B', 'b_upper.png', 55, 71, 0);
        this.addCharDef('C', 'c_upper.png', 70, 73, 0);
        this.addCharDef('D', 'd_upper.png', 59, 71, 0);
        this.addCharDef('E', 'e_upper.png', 62, 68, 0);
        this.addCharDef('F', 'f_upper.png', 64, 66, 0);
        this.addCharDef('G', 'g_upper.png', 96, 70, 0);
        this.addCharDef('H', 'h_upper.png', 45, 70, 0);
        this.addCharDef('I', 'i_upper.png', 49, 66, 0);
        this.addCharDef('J', 'j_upper.png', 55, 70, 0);
        this.addCharDef('K', 'k_upper.png', 54, 76, 0);
        this.addCharDef('L', 'l_upper.png', 51, 73, 0);
        this.addCharDef('M', 'm_upper.png', 67, 73, 0);
        this.addCharDef('N', 'n_upper.png', 60, 70, 0);
        this.addCharDef('O', 'o_upper.png', 57, 74, 0);
        this.addCharDef('P', 'p_upper.png', 60, 75, 0);
        this.addCharDef('Q', 'q_upper.png', 65, 81, 0);
        this.addCharDef('R', 'r_upper.png', 65, 78, 0);
        this.addCharDef('S', 's_upper.png', 43, 75, 0);
        this.addCharDef('T', 't_upper.png', 67, 75, 0);
        this.addCharDef('U', 'u_upper.png', 57, 76, 0);
        this.addCharDef('V', 'v_upper.png', 65, 91, 0);
        this.addCharDef('W', 'w_upper.png', 74, 77, 0);
        this.addCharDef('X', 'x_upper.png', 50, 80, 0);
        this.addCharDef('Y', 'y_upper.png', 76, 73, 0);
        this.addCharDef('Z', 'z_upper.png', 68, 72, 0);
    }
}
