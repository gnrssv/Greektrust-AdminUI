import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './Render';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import registerServiceWorker from './registerServiceWorker';
import * as etc from "notistack";
import {ThemeProvider,createTheme,createStyled,styled} from "@mui/system";
import custom from "./gatsby";
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <etc.SnackbarProvider
     anchorOrigin = { {horizontal : "center", vertical : "bottom"} }
     maxSnack = {1}
     autoHideDuration = {3000}
     preventDuplicate>
     <ThemeProvider theme = {custom}>
        <App/>
     </ThemeProvider>
    </etc.SnackbarProvider>

  </React.StrictMode>
);*/

ReactDOM.render(<React.StrictMode>
  <etc.SnackbarProvider
   anchorOrigin = { {horizontal : "center", vertical : "bottom"} }
   maxSnack = {1}
   autoHideDuration = {3000}
   preventDuplicate>
   <ThemeProvider theme = {custom}>
      <App/>
   </ThemeProvider>
  </etc.SnackbarProvider>

</React.StrictMode>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
