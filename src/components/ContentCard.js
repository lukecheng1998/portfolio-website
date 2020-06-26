import React from 'react'
import CardInfo from '../components/ContentCardInfo'
import {useSpring, animated} from 'react-spring';
const calc = (x, y) => [-(y-window.innerHeight / 2) / 20, (x-window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotate(x ${x}deg) rotate(${y}deg) scale(${s})`
function ContentCard (props) {
    const [moveProps, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 5, tension: 350, friction: 40 }}))
    return (
        <animated.div className="d-inline-block lcc-card selectedCardContact" onMouseMove = {({clientX: x, clientY: y}) => set({ xys: calc(x, y)})} onMouseLeave={() => set({xys: [0,0,1]})} style={{ transform: moveProps.xys.interpolate(trans)}} onClick={(event) => props.click(props.item)}>
            <img className="lcc-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/> }
        </animated.div>
    );
}

export default ContentCard
