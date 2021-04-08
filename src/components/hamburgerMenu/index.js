import React, {useState} from 'react';                                                  
import styled from 'styled-components';                                                 
import MenuToggle from './menuToggle.js';                                              
import { motion } from 'framer-motion';                                                 
import NavMenu from './navMenu.js';                                                    

const HamburgerMenuContainer = styled.div`                                              
    display: flex;
`;                                                                                      
                                                                                       
const MenuContainer = styled(motion.div)`                                               
    min-width: 300px;                                                                   
    width: 100%;
    max-width: 100%;                                                                     
    height: 100%;
    background-color: black;                                                             
    box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);                                       
    z-index: 90;                                                                        
    position: fixed;
    top: 0;
    transform: translateX(0%);
    user-select: none;
    padding: 1em 2.5em;                                                                 
`                                                                                       

const menuVariants = {                                                                  
    open: {
        transform: "translateY(0%)"                                                     
    },                                                                                  
    closed: {                                                                           
        transform: "translateY(-100%)",                                                 
    } 
}   
        
const menuTransition = { type: "slide", duration: 0.8, stiffness: 10, delay: 0.1 }      
    
export function HamburgerMenu (props) {                                                 
        
    const [isOpen, setOpen] = useState(false);                                          
    
    const toggleMenu = () => {                                                          
        setOpen(!isOpen);                                                               
    }                                                                                   

    return (                                                                            
        <HamburgerMenuContainer>                                                        
            <MenuToggle toggle={toggleMenu} isOpen={isOpen}/>                           
            <MenuContainer                                                              
                initial={false}                                                         
                animate={isOpen ? "open" : "closed"}                                    
                variants={menuVariants}                                                 
                transition={menuTransition}
            >
                <NavMenu isOpen={isOpen} />                                             
            </MenuContainer>
        </HamburgerMenuContainer>
    );                  
}                   

