import { Section, StyledTitle, List, Item, Dot } from "./styled";

export const Skills = ({ title, skills }) => (
    <Section>
        <StyledTitle>{title}</StyledTitle>
        <List>
            {skills.map((skill) => (
                <Item key={skill}>
                    <Dot />
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);