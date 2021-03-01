import React, {useEffect} from 'react';
import "./Nav.scss"
import logo from '../assets/images/logo_square.png';

function Nav() {

    useEffect(() => {

    }, []);

    return (
        <div className={`nav`}>
			<div className="nav__container--logo">
				<img className="nav__logo"
					 src={logo}
					 alt={"logo"}/>
				<h1 className="nav__title">Reply<b>Blog</b></h1>
			</div>

        </div>
    );
}

export default Nav;
