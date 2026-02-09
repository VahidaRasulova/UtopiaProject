import React from 'react'
import {FaFacebookF } from "react-icons/fa";
import {BsInstagram } from "react-icons/bs";

const tel='tel.svg'
const telPath=`/static/${tel}`

const green='Green.png'
const greenPath=`/static/${green}`

const tel2='tel2.svg'
const tel2Path=`/static/${tel2}`

const mail='m.svg'
const mailPath=`/static/${mail}`

const arrow='arrow.svg'
const arrowPath=`/static/${arrow}`

const visa='visa.png'
const visaPath=`/static/${visa}`

const visa2='visa2.png'
const visa2Path=`/static/${visa2}`

const visa3='visa3.png'
const visa3Path=`/static/${visa3}`

const visa4='visa4.png'
const visa4Path=`/static/${visa4}`



function Footer() {
  return (
   <>
       <footer>

<div className="foter-background">
  <div className="container">

    <div className="back">
      <div className="back-text">
        <h1>Biz sizə necə kömək edə bilərik?</h1>
        <p>Biz üstün müştəri xidməti ilə fəxr edirik. Sifarişinizə kömək etmək üçün satış komandamızın üzvü ilə danışın. </p>
        <h5>Əlaqəyə Keçin support@Meridian.com </h5>
      </div>
      <div className="back-tel">
        <button> <img src={telPath} alt="" /> 01789 339533</button>
        <h5>Həftənin 7 günü səhər 8-dən axşam 6-ya kimi</h5>
      </div>
    </div>
  </div>
</div>
<div className="footer">
  <div className="container">
    <div className="foter-m">
      <img src={greenPath} alt="" />
    </div>
    <div className="footer-text">
      <div className="footer-col-1">
        <h3>
        Baş ofis
        </h3>
        <p>32 Plum St, Trenton, NJ 08638, United States</p>
        <div className="footer-contact">
          <p><img src={tel2Path} alt="tel" /> 01789 730695</p>
          <p><img src={mailPath} alt="tel" />support@Meridian.com</p>
        </div>



      </div>
      <div className="footer-col-2">
        <div className="footer-coll">
          <h3>
          Məhsul
          </h3>
          <ul>
            <li><a href="#">Yeni Gələnlər</a></li>
            <li><a href="#">Oturma otağı</a></li>
            <li><a href="#"> Mətbəx və Yemək otağı</a></li>
            <li>
              <a href="#">Yataq otağı</a>
            </li>
            <li><a href="#">Accent</a></li>
            <li><a href="#">Təsadüfi Cədvəl</a></li>
            <li><a href="#">Ofis/Ev Ofisi</a></li>
            <li><a href="#">Xarici Mebel</a></li>
          </ul>
        </div>
        <div className="footer-coll">
          <h3>
         Kömək
          </h3>
          <ul>
            <li><a href="#">Haqqında</a></li>
            <li><a href="#">Əlaqə</a></li>
          </ul>
        </div>

      </div>
      <div className="footer-col-3">
        <h3>Eksklüziv Təkliflər Üçün Meridian-a Qoşulun</h3>
        <div className="footer-mail">
          <input type="email"  placeholder='Email adress' />
          <button><img src={arrowPath} alt="arrow" /></button>
        </div>
        <p>Bülletenimiz stil ideyaları, yeni məhsullar və eksklüziv endirimlərlə doludur. Biz GDPR-ə uyğunyıq, məlumatlarınız bizimlə təhlükəsizdir.</p>
      </div>
    </div>
    <div className="terms">
      <ul>
        <li>
          <a href="#">Şərtlər və qaydalar</a>
        </li>
        <li>
          <a href="#">Gizlilik Siyasəti</a>
        </li>
        <li>
          <a href="#">Göndərmə Siyasəti</a>
        </li>
      </ul>
      <ul>
        <li>
        <FaFacebookF/>
        </li>
       <li>
       <BsInstagram/>
       </li>


      </ul>
    </div>
    <div className="footer-cart-img">
      <img src={visaPath} alt="" />
      <img src={visa2Path} alt="" />
      <img src={visa3Path} alt="" />
      <img src={visa4Path} alt="" />

    </div>

  </div>

</div>

</footer>
   </>
  )
}

export default Footer