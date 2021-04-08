import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const NavList = styled.ul`
    padding: 0 0.8em;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const NavLink = styled(motion.li)`
    font-weight: bold;
    height: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;

    a{
        text-decoration: none;
        color: white;
        font-size: 60px;
        transition: all 200ms ease-in-out;
    }

    &:hover {
        a {
            color: #555;
        }
    }
`

const variants = {
    show: {
        transform: "translateX(5)",
        opacity: 1
    },
    hide: {
        transform: "translateX(0)",
        opacity:0.2
    }
}


export default function NavMenu({ isOpen, toggleMenu }) {
   
    return (
    <NavMenuContainer>
        <NavList>
            <NavLink 
                initial={false} 
                animate={isOpen ? "show" : "hide"} 
                variants={{
                    show: {...variants.show, transition: { delay: 0.75, duration: 0.2 } },
                    hide: { ...variants.hide, transition: { delay: 0.1, duration: 0.2 } },
                    }}
                >
                <Link to="/">Home</Link>
            </NavLink>
             <NavLink 
                initial={false} 
                animate={isOpen ? "show" : "hide"} 
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.7, duration: 0.2 } },
                        hide: { ...variants.hide, transition: { delay: 0.15, duration: 0.2 } },
                    }}
                >
                 <Link to="/about">About</Link>
            </NavLink>
             <NavLink 
                initial={false} 
                animate={isOpen ? "show" : "hide"} 
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.65, duration: 0.2 } },
                        hide: { ...variants.hide, transition: { delay: 0.2, duration: 0.2 } },
                    }}
                >
                <Link to="/contact">Contact</Link>
            </NavLink>
              <NavLink 
                initial={false} 
                animate={isOpen ? "show" : "hide"} 
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.6, duration: 0.2 } },
                        hide: { ...variants.hide, transition: { delay: 0.25, duration: 0.2 } },
                    }}
                >
                <Link to="/mailing">Mailing</Link>
            </NavLink>
     </NavList>
    </NavMenuContainer>
    )
}

