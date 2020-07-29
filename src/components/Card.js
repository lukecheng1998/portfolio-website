import React, { useState } from "react";
import { render } from "react-dom";
import CardInfo from "../components/Cardinfo";
import { useSpring, animated } from "react-spring";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotate(x ${x}deg) rotate(${y}deg) scale(${s})`;
function Card(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY($(flipped ? 180 : 0) deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)}>
      <animated.div
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <img
          className="l-card-image"
          src={props.item.imgSrc}
          alt={props.item.imgSrc}
        />
      </animated.div>
      <animated.div
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      </animated.div>
    </div>
  );
}

export default Card;
//DEAD CODE
/*
  <animated.div
      className="d-inline-block l-card selectedCard"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      onClick={() => set((state) => !state)}
    >
      <img
        className="l-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
        style={{opacity: opacity.interpolate( o=> 1 - o), transform}}
      />
      <CardInfo
        title={props.item.title}
        subTitle={props.item.subTitle}
        link={props.item.link}
        style={{opacity, transform: trans.interpolate(t => `${t} rotateY(180deg)`)}}
      />
    </animated.div>
*/
