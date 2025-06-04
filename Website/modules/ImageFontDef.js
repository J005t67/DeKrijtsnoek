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
    }

    addCharDef(c, fileName, width, height, baseLine) {
        let charDef = new ImageCharDef(this.directory + fileName, width, height, baseLine);
        this.map.set(c, charDef);
    }

    getCharDef(c) {
        return this.map.get(c);
    }

    
}
