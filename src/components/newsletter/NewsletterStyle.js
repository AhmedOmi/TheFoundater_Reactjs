import styled from "styled-components";

export const NewS = styled.div`
form{
    margin-top:40px;
    margin-bottom:40px;
}

h1{
    color: white;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 7px;
        text-align: center;
        text-transform: uppercase;
    }
}
p {
    color: white;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 4px;
        text-align: center;
        text-transform: uppercase;
        margin-bottom:40px;
}
input[type='submit']{
    overflow: visible;
        background: none;
        border: solid 2px white;
        color: white;
        cursor: pointer;
        display: inline-block;
        font-family: 'Helvetica', Arial, sans-serif;
        font-size: 0.875em;
        font-weight: bold;
        outline: none;
        padding: 20px 35px;
        text-transform: uppercase;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        line-height: normal;
        width:100%;
}
input {
    line-height: normal;
    width:100%;
}
input[type='email'] {
    background: none;
    border: none;
    border-bottom: solid 2px #474544;
    color: #474544;
    font-size: 1.000em;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0em 0 1.875em 0;
    padding: 0 0 0.875em 0;
    text-transform: uppercase;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}


input[type='email']:focus{
    outline: none;
    padding: 0 0 0.875em 0;
}
input[type='submit']:hover{
background: #474544;
color: #F2F3EB;
}
input{
    color: #5A5A5A;
    font: inherit;
    margin: 0;
}
`

;