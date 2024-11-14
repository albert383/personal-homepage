import React from 'react';
import { MainInfo } from './MainInfo';
import ThemeSwitch from '../../../common/ThemeSwitch';
import { Container } from './styled';
import { Skills } from './Skills';
import { nextSkills, skills } from './Skills/skillsData';

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInfo />
        <main>
            <Skills title={"My skillset includes 🛠️"} skills={skills} />
            <Skills title={"What I want to learn next 🚀"} skills={nextSkills} />
        </main>
    </Container>
);