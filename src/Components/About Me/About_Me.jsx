import React from 'react';
import './About_Me.css';
import image from '../../assets/Portfolio Image.jpg';
import Star from '../Star/Star';

const About_Me = () => {
  return (
    <div className='about' id='about-me'>
        <Star count={20} />
        <div className='about-image'></div> 
        <div className='about-box'>
            <div className='about-box2'>
                <div className='about-content'>
                    <div className='circle'>
                        <img src={image} alt="Picture of Me" />
                    </div>
                    <div className='about-text'>
                        <h1>About Me</h1>
                        <p>My name is Naomi Anderson. I’m Computer Science student at Wilfrid Laurier University, currently pursuing a minor in UI/UX Design. With a strong foundation in web development and graphic design, I thrive in creating visually appealing and user-friendly designs across various platforms including web, mobile, and graphic interfaces. Based in Waterloo, I also engage in projects in Toronto and I am open to remote work opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About_Me;
