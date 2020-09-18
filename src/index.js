import React from 'react';
import { render } from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

render(<AppRouter />, document.getElementById('root'));
