import React from 'react';
import { MainInfo } from './MainInfo';
import ThemeSwitch from '../../../common/ThemeSwitch';
import { Container } from './styled';

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInfo />
    </Container>
);