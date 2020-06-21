import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    body{margin:0};
    main{display:block};
    h1{font-size:2em;margin:.67em 0};
    a{background-color:transparent};
    img{border-style:none};
    button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0};
    button,input{overflow:visible};
    button,select{text-transform:none};
    /* CSS Normalize code Provided by normalize.css v8.0.1 */

    *,
    *::before,
    *::after{box-sizing:border-box;}
    body{
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: white;
    }
    a{text-decoration:none; color:inherit; cursor:pointer;}
    figure{margin:0;}
    input::-moz-focus-inner {border:0; padding:0; margin:0;}
    ul, ol, dd, li {margin:0; padding:0; list-style:none;}
    h1, h2, h3, h4, h5, h6{margin:0; font-size:inherit; font-weight:inherit;}
    p{margin:0;}
    cite {font-style:normal;}
    fieldset{border-width:0; padding:0; margin:0;}
    /* CSS Reset code provided by Elad Shechter */

    html {
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        height: 100vh;
    }

`
export default GlobalStyle
