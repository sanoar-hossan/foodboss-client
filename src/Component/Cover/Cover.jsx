import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';


const Cover = ({img,title,text}) => {
    return (
       
      
<Tilt tiltEnable={false} glareEnable={true} glareMaxOpacity={0.8} glareColor="white" glarePosition="bottom">
<div className="hero h-[400px]" style={{ backgroundImage: `url("${img}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content bg-black w-1/3 bg-opacity-30 text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">{text}</p>
    </div>
  </div>
</div>

  </Tilt>


 
 

       
       
    );
};

export default Cover;