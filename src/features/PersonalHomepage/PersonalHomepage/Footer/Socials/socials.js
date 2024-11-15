import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./Icons/github.svg";
import { ReactComponent as FacebookIcon } from "./Icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./Icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./Icons/instagram.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/albert383",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/albert.ciesla.3/",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/albert-cie%C5%9Bla-8421361a6/",
        Icon: styleIcon(LinkedInIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/a.lbert.c/",
        Icon: styleIcon(InstagramIcon),
    },
];