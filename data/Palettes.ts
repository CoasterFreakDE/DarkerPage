import ColorPalette from "../model/ColorPalette";
import {TileTypes} from "../model/TileType";

export const Palettes: ColorPalette[] = [
    {
        id: "spotify",
        name: "Spotify",
        link: "https://www.spotify.com/",
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
        link: "https://www.youtube.com/",
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
        link: "https://discord.com/",
        logo: "/assets/images/discord.png",
        tileType: TileTypes.PALETTE,
        colors: [
            "#1e2124",
            "#202225",
            "#2f3136",
            "#36393f",
            "#3c3f45",
            "#40444b",
            "#FEE75C",
            "#ED4245",
            "#EB459E",
            "#5865F2",
            "#57F287",
            "#dcddde",
            "#ffffff",
        ]
    },
    {
        id: "darker",
        name: "DarkerPage",
        link: "https://darker.page/",
        logo: "/android-chrome-512x512.png",
        tileType: TileTypes.PALETTE,
        colors: [
            "#121212",
            "#181818",
            "#282828",
            "#404040",
            "#9e9e9e",
            "#000000",
            "#ffffff",
        ]
    },
    {
        id: "pterodactyl",
        name: "Pterodactyl",
        link: "https://pterodactyl.io/",
        logo: "/assets/images/pterodactyl.png",
        tileType: TileTypes.PALETTE,
        colors: [
            "#10529f",
            "#1e282c",
            "#d64242",
            "#408fec",
            "#51b060",
            "#fa9636",
            "#131517",
            "#1f2933",
            "#3f4d5a",
            "#1f2933",
            "#13181e",
            "#3f4d5a",
            "#1f2933",
            "#33404d",
            "#eef1f6",
            "#79589f",
            "#515f6cbb",
            "#408fec",
            "#f5f5f5",
            "#181f27",
            "#1f2933",
            "#9aa5b1",
            "#1f2933",
            "#1c252e",
            "#1c252e",
        ]
    },
    {
        id: "vsc",
        name: "Visual Studio Code",
        link: "https://code.visualstudio.com/",
        logo: "/assets/images/vscode.png",
        tileType: TileTypes.PALETTE,
        colors: [
            "#2c2c32",
            "#1e1e1e",
            "#252526",
            "#333333",
            "#323233",
            "#43acf2",
            "#ffffff",
        ]
    },
    {
        id: "github",
        name: "GitHub",
        link: "https://github.com/",
        logo: "/assets/images/github.png",
        tileType: TileTypes.PALETTE,
        colors: [
            "#0d1117",
            "#161b22",
            "#1f6feb",
            "#58a6ff",
            "#010409",
            "#babbbd",
            "#ffffff",
        ]
    }
];