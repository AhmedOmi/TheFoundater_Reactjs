import styled from "styled-components";

export const FooterS = styled.div`
    width:100%;
    height:auto;

`;

export const HeaderFooter = styled.div`
width:100%;
height:auto;
background-color: #2C2C32;
display: inline-flex;
align-items: center;
justify-content: center;
justify-content: space-around;
.logo{
    color:#fff;
}
.helpus{
    color:#fff;
}
.helpus a{
    text-decoration:none;
    color:#fff;
    border:1px solid #fff;
    padding:5px 40px;
    border-radius:3px;
}
`;

export const FooterFooter = styled.div`
width:100%;
height:70px;
background-color: black;
.rights {
    color:white;
}
.rightSocial{
    display: inline-flex;
    align-items: center;
    list-style:none;
    
}
`;