import styled from "styled-components";

export const Wrapper = styled.article`
    display: grid;
    justify-items: center;
    margin-top: 96px;
    grid-gap: 32px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: ${({ theme }) => theme.breakpoints.smartfon}px) {
        grid-gap: 24px;
    }
`;

export const Header = styled.header`
    font-weight: 700;
    font-size: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smartfon}px) {
        font-size: 17px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    margin: 0;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoints.smartfon}px) {
        font-size: 16px;
    }
`;
