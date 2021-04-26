import styled from "styled-components";

export const HeaderS = styled.div `
width:100%;
height:60px;
background-color: #2C2C32;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content:space-around;
`;


export const LogoStyle = styled.div`
a{
    color:#fff;
    text-decoration:none;
}
`;

export const SocialIconStyle = styled.div`
ul{
    list-style:none;
    display:flex;
}
li{padding-right: 20px;}
`;

export const Navbar = styled.nav`
font-variant-numeric: ordinal;
display:contents;
a{
    text-decoration:none;
    color:#fff;
}
`;