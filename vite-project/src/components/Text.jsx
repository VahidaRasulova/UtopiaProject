import React from "react";
import { FaFacebookF, FaTwitter,FaLinkedinIn, FaInstagram, FaPinterest} from "react-icons/fa";
import { BsTelephoneFill} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import {MdOutlineLocationOn} from "react-icons/md";
import {LuPhone} from "react-icons/lu";

import { Typewriter } from 'react-simple-typewriter'
import {Link} from "react-router-dom"

const mail = "email-icon.png"
const mailPath=`/static/${mail}`

const arxasi = "arxas.png"
const arxa=`/static/${arxasi}`


function Text() {
  return (
    <>
      <div className="contact-img">
        <div className="contact-anime-text">
         <h1>Bizi Sosial Mediada İzləyin <span className="media-text" style={{ fontWeight: 'bold' }}> <Typewriter  words={['Instagram', 'Facebook', 'Twitter', 'Pinterest', 'Linkedin']}  loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            /></span> </h1> 
         <p>Konqresdəki fəaliyyətim haqqında daha çox öyrənmək üçün rəsmi media orqanlarıma baş çəkin</p>
        </div>
        <div className="contact-anime-img">
          <div className="anime-icons">
           <span > <FaFacebookF/> </span> 
          <span> <FaInstagram/> </span> 
          <span> <FaLinkedinIn/> </span> 
          <span> <FaTwitter/> </span> 
          <span> <FaPinterest/></span> 
          </div>
          <img className="emil-ico" src={mailPath} alt="" />
        </div>
        <img className="wave" src={arxa} alt="" />
        

      </div>
      <div className="section-form">


        <div className="container">
          <div className="center-text">
            <h1>Kömək Etməyə Hazırıq</h1>
            <p>
            Zəhmət olmasa sorğunuzu aşağıdakı formadan istifadə edərək göndərin. təmin etməyinizə əmin olun
               mümkün qədər çox məlumat verin ki, sizə tez kömək edək.{" "}
            </p>
          </div>
          <div className="contactt">
            <div className="contact-col">
              <span>
            <LuPhone/>
              </span>
              <div className="contact-about">
                <h3>TELEFON NÖMRƏSİ</h3>
                <p>(62) 1829017</p>
              </div>
            </div>
            <div className="contact-col">
              <span>
              <FiMail/>
              </span>
              <div className="contact-about" >
                <h3>Email</h3>
                <p>Hello@Meridian.com</p>
              </div>
            </div>
            <div className="contact-col">
              <span>
              <MdOutlineLocationOn/>
              </span>
              <div className="contact-about">
                <h3>ADRES</h3>
                <p>John Bucarest St. 199</p>
              </div>
            </div>
          </div>
            </div>
   
            <div className="container">
          <div className="center-text">
            <h1>Bizimlə Danış</h1>
            <p>
            Təcrübəli heyətimiz adətən sorğunuza 1 ərzində cavab verəcəkdir
               Biznes Günü.
            </p>
          </div>
      </div>
       
      </div>
      
    </>
  );
}

export default Text;
