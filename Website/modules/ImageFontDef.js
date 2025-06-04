"use strict"
export class ImageCharDef {
    constructor(
        anImageUrl,
        aWidth,
        aHeight,
        aBaselineY
    ) {
        this.imageUrl = anImageUrl;
        this.width = aWidth;
        this.height = aHeight;
        this.baseline = aBaselineY;
    }
}

export class ImageFontDef {
    constructor(
        aDirectory,
    ) {
        this.directory = aDirectory;
        this.map = new Map();
        this.fontHeight = 0;
    }

    addCharDef(c, fileName, width, height, baseLine) {
        let charDef = new ImageCharDef(this.directory + fileName, width, height, baseLine);
        this.map.set(c, charDef);
        if (this.fontHeight < height) this.fontHeight = height;
    }

    getCharDef(c) {
        return this.map.get(c);
    }

    getFontHeight() {
        return this.fontHeight;
    }

}
