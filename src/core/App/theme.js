const colorNames = {
    mineShaftLighter: "#313131",
    porcelain: "#F2F3F4",
    tropicalBlue: "#CDE0F7",
    white: "#FFFFFF",
    doveGray: "#6D6D6D",
    shipCove: "#6D93BE",
    blumine: "#1F5189",
    scienceBlue: "#0366D6",
    tundora: "#414141",
    anakiwa: "#8CC2FF",
    whiteLilac: "#FBFBFE",
    mercury: "#e5e5e5",
    dodgerBlue: "#2188FF",
    black: "#252525",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    slateGray: "#6E7E91",
};

const devices = {
    breakpoints: {
        smartfon: 767,
        tablet: 991,
        laptop: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "4px",
};

export const themeLight = {
    ...devices,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.black,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGray,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.anakiwa,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        tile: {
            border: colorNames.porcelain,
            borderHover: colorNames.tropicalBlue,
            header: colorNames.scienceBlue,
        },
        themeSwitch: {
            background: colorNames.ironTransparent,
            icon: colorNames.white,
            iconBox: colorNames.slateGray,
            border: colorNames.slateGray,
        },
    },
};

export const themeDark = {
    ...devices,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.black,
            text: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.shipCove,
        },
        boxBackground: colorNames.mineShaftLighter,
        headerLine: colorNames.tundora,
        tile: {
            border: colorNames.tundora,
            borderHover: colorNames.blumine,
            header: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.black,
            icon: colorNames.black,
            iconBox: colorNames.white,
            border: colorNames.white,
        },
    },
};