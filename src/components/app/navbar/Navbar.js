import React from 'react';
import QuizLogo from '../../../images/quiz_icon.png';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="quiz__navbar">
                <div className="logo__image__container">
                    <img src={QuizLogo} alt="" className="quiz__logo__icon" />
                </div>
                <div className="quiz__navbar__text">
                    <h1 className="quiz__text">QUIZ</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
