import albertCieslaProfile from "./albertCieslaProfile.jpg";
import { Photo, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled";
import { email } from "../SecondaryHeader/email";

export const MainInfo = () => (
    <Wrapper>
        <Photo src={albertCieslaProfile} alt="Picture - Albert Ciesla" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Albert Ciesla</Name>
            <Summary>
                🧓💻I’m an enthusiastic Frontend Developer with a deep passion for React, currently exploring new career opportunities.
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);
