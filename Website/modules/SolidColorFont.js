"use strict"
import { ImageFontDef } from "./ImageFontDef.js";
export class SolidColorFont extends ImageFontDef {
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
