import ColorPalette from "../model/ColorPalette";
import {TileTypes} from "../model/TileType";

export const Palettes: ColorPalette[] = [
    {
        id: "spotify",
        name: "Spotify",
        logo: "/assets/images/spotify.png",
        tileType: TileTypes.PALETTE,
        colors: [
            "#000000",
            "#181818",
            "#121212",
            "#1a1a1a",
            "#212121",
            "#282828",
            "#1ed760",
            "#b3b3b3",
            "#ffffff",
        ]
    },
    {
        id: "youtube",
        name: "Youtube",
        logo: "/assets/images/youtube.png",
        tileType: TileTypes.PALETTE,
        colors: [
            "#0f0f0f",
            "#272727",
            "#282828",
            "#303030",
            "#3f3f3f",
            "#ff0000",
            "#ffffff",
        ]
    },
    {
        id: "discord",
        name: "Discord",
        logo: "/assets/images/discord.png",
        tileType: TileTypes.PALETTE,
        colors: [
            "#1e2124",
            "#202225",
            "#2f3136",
            "#36393f",
            "#3c3f45",
            "#40444b",
            "#684493",
            "#d83c3e",
            "#ff73fa",
            "#5865f2",
            "#3ba55d",
            "#dcddde",
            "#ffffff",
        ]
    }
];