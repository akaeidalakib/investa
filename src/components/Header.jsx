import React from 'react';
import Logo from './Logo';
import Container from './Container';

const Header = () => {
    return (
        <header>
            <nav>
                <Container className="relative z-50 flex justify-between py-6">
                    {/* {logo} */}
                    <div className="relative z-10"><Logo /></div>

                    {/* {nablinks} */}
                    {/* {button} */}
                    {/* {mobile navlink} */}
                </Container>
            </nav>
        </header>
    );
};

export default Header;