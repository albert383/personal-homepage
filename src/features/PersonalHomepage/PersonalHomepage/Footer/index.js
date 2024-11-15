import { email } from "../email";
import { SocialIcons } from "./Socials";
import { Address, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </EmailWrapper>
            <Paragraph>
                Let’s bring your vision to life! I'm always on the lookout for exciting new projects&nbsp; and challenges that push the boundaries of my skills. Whether it’s a sleek website, a dynamic dashboard, or an innovative mobile app, I’m here to make it happen. Let’s connect and build something extraordinary together.
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>
);