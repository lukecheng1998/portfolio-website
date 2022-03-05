import React, { useEffect, useState } from "react";
import {useChain, animated} from 'react-spring';
import CardInfo from "../components/Cardinfo";

// const springRef = useSpringRef();
// const props = useSpring({ ...CardInfo, ref: springRef });
// const transitionRef = useSpringRef();
// const transitions = useTransition({ ...toHaveFormValues, ref: transitionRef });
// useChain([springRef, transitionRef])

// useEffect(() => {
//     ref.start()
//     ref.update({ })
//     ref.start({ ... }).then(console.log)
//})

function ProjectCard(props ){
    
    return (
        <animated.div style={props}>
            {/* {transitions(styles => (
                <animated.div style={styles} />
            ))} */}
            <img
                className="l-card-project"
                src={props.item.imgSrc}
                alt={props.item.imgSrc}
            />    
        </animated.div>
    )
}
export default ProjectCard