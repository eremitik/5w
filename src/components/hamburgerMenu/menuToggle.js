import React from 'react'; 
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled.div`
    z-index: 99;
    cursor: pointer;
    padding: 1em;
`

const Path = (props) => (                                                                               
    <motion.path fill="transparent" strokeWidth="2" {...props} />                 
)

const transition = { duration: 0.4 };

export function MenuToggle({ toggle, isOpen }) {                                                        
    return (                                                                                            
        <Button onClick={toggle}>
            <svg width="50" height="30" viewBox="0 0 50 30">                                            
                <Path 
                    animate={isOpen ? "open" : "closed"}                                                
                    initial={false} 
                    variants={{                                                                         
                        closed: { d: "M 2 4.5 L 30 4.5", stroke: "hsl(0, 0%, 100%)" },                  
                        open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 18%)" },                    
                    }}
                    transition={transition} />

                <Path
                    animate={isOpen ? "open" : "closed"} 
                    initial={false}
                    variants={{ 
                        closed: { d: "M 2 14.346 L 30 14.346", stroke: "hsl(0, 0%, 100%)" },
                        open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 18%)" },                  
                    }}
                    transition={transition}                                                             
                />
            </svg>                                                                                      
        </Button>
    );
}

export default MenuToggle;

