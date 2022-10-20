import React from 'react';
import Calc from './pages/Calc';
import '../styles/app.css';

export default function CalcContainer() {
    
    return (
        <div>
            <header className="header">KDs Calculator</header>
            <Calc />
        </div>
    );
}