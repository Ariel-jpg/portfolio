import React, { useState } from "react"
import styled from "styled-components"

type ButtonIconType = {
    Icon: any,
    legend: string,
    onClick: () => void,

    active?: boolean,
    iconColor?: string,
    sustainedActivation?: boolean
}

type StyledButtonType = { 
    active?: boolean,     
    iconColor?: string,
    sustainedActivation?: boolean
}

const ButtonIcon = ({ Icon, legend, onClick, active, iconColor, sustainedActivation }: ButtonIconType) => {
    return <StyledButton 
        onClick={() => onClick()}
        active={active}
        iconColor={iconColor}
        sustainedActivation={sustainedActivation}
    >
        <Icon size="2.1rem" />
        <span children={legend} className={sustainedActivation ? "sustainedActivation" : ""} />
    </StyledButton>
}

const StyledButton = styled.button<StyledButtonType>`
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: transparent;
    padding: 10px;
    transition: 0.2s;
    border: none;
    cursor: pointer;

    @media (max-width: 1024px){
        font-size: 0.7rem;
    }

    color: ${props => props.active ? "white" : "rgba(255, 255, 255, 0.4)"};

    & > svg {
        transform: ${props => props.sustainedActivation ? "translateY(-20%)" : "translateY(50%)"};
        transition: 0.5s;
    }

    & > span {
        color: transparent;
        transition: 0.5s;
        transform: translateY(50%);
        user-select: none;
    }

    &:hover {
        color: ${props => props.iconColor ? props.iconColor : "white"};
    }

    &:hover > svg {
        transform: translateY(-20%);
    }

    &:hover > span, .sustainedActivation {
        color: inherit;
        visibility: visible;
        transform: none;
    }
`;


export default ButtonIcon;