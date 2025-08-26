import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import './style.css';
import gsap from 'gsap';

export default function App() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to('.box', {
        x: '100',
        stagger: {
          //   each: 0.3,
          amount: 1,
          //   from: 'end',
          //   from: 'center',
          //   from: 'edges',
          from: 3,
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className='orange box'></div>
      <div className='pink box'></div>
      <div className='green box'></div>
      <div className='red box'></div>
      <div className='blue box'></div>
    </div>
  );
}
