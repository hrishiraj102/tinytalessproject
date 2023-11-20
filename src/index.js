import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import ContentBody from './Components/ContentBody';
import Profile from './Components/Profile';
import { Grid } from '@mui/material';
import Heading from './Components/Heading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Grid>
      <Heading />
      <Profile />
    </Grid>
    <Grid mt={5}>
      <ContentBody />

    </Grid>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
