// Convert a hex color to an hsl color
import {HexColor, HSLColor, RGBColor} from "../data/Colors";

export function textColor(backgroundColor: string): string {
    const hsl = hexToHsl(new HexColor(backgroundColor));
    return hsl.l > 0.65 ? "text-black" : ((hsl.l >= 0.64 && hsl.l <= 0.65) ? ( hsl.h < 0.60 ? "text-black" : "text-white") : "text-white");
}


export function hexToHsl(hex: HexColor): HSLColor {
    const rgb = hexToRgb(hex);
    return rgbToHsl(rgb);
}

// Convert a hex color to an rgb color
export function hexToRgb(hex: HexColor): RGBColor {
    const r = parseInt(hex.hex.slice(1, 3), 16);
    const g = parseInt(hex.hex.slice(3, 5), 16);
    const b = parseInt(hex.hex.slice(5, 7), 16);
    return new RGBColor(r, g, b);
}

// Convert an rgb color to an hsl color
export function rgbToHsl(rgb: RGBColor): HSLColor {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = (max + min) / 2;
    let s = (max + min) / 2;
    const l = (max + min) / 2;

    if (max === min) {
        h = 0;
        s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return new HSLColor(h, s, l);
}