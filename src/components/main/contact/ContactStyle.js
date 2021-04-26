import styled from "styled-components";

export const ContactS = styled.div`
    form{

        border: solid 3px #474544;
        max-width: 768px;
        margin: 60px auto;
        position: relative;
        padding: 37.5px;
    }
    h1 {
        color: #474544;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 7px;
        text-align: center;
        text-transform: uppercase;
    }
    .underline {
        border-bottom: solid 2px #474544;
        margin: auto auto 20px;
        width: 80px;
    }
    button, input, select, textarea {
        color: #5A5A5A;
        font: inherit;
        margin: 0;
    }
    .submitButton{
        overflow: visible;
        background: none;
        border: solid 2px #474544;
        color: #474544;
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
        }
    input[type='text']:focus, [type='email']:focus, textarea:focus {
            outline: none;
            padding: 0 0 0.875em 0;
        }
    .submitButton:hover{
        background: #474544;
        color: #F2F3EB;
    }
    input {
        line-height: normal;
        width:100%;
    }
    input[type='text'],[type='email'],textarea {
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

  @media screen and (max-width: 768px) {
    form {
      margin: 20px auto;
      width: 95%;
    }
  }
  
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 26px;
    }
    
    .underline {
      width: 68px;
    }
    
    .submitButton {
      padding: 15px 25px;
    }
  }
  
  @media screen and (max-width: 420px) {
    h1 {
      font-size: 18px;
    }
    
    
    .underline {
      width: 53px;
    }
    
    input[type='text'], [type='email'], textarea {
      font-size: 0.875em;
    }
  }
`;