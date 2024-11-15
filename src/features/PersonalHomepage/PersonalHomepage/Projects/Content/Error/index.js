import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import { ReactComponent as WarningIcon } from "./warning.svg";
import { Header, Paragraph, Wrapper } from "./styled";

export const Error = () => (
    <Wrapper>
        <WarningIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects. <br />
            You can check them directly on Github.
        </Paragraph>
        <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">Go to GitHub</ButtonLink>
    </Wrapper>
);