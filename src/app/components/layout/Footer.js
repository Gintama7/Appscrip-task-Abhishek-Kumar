import styles from './footer.module.css';
import { FiInstagram } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import amex from './amex.png';
import applepay from './applepay.png';
import gpay from './gpay.png';
import mastercard from './mastercard.png';
import usa from './usa.png';
import opay from './opay.png';
import paypal from './paypal.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.topLeft}>
          <h2>Be the first to know</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.leftInput}>
            <input type="text" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.topRight}>
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h2>Currency</h2>
          <div>
          <Image src={usa} alt="usa" />
          <p>USA</p>
          </div>
        <span>Transactions will be completed in Euros and a currency reference is available on hover.</span>
        </div>
      </div>
      <div className={styles.footerBottom}>
      <div className={styles.bottomLeft}>

      <ul> <h3>metta muse</h3>
        <li>About Us</li>
        <li>Stories</li>
        <li>Artisans</li>
        <li>Boutiques</li>
        <li>Contact Us</li>
        <li>EU Compliances Docs</li>
      </ul>
      </div>
      <div className={styles.bottomMiddle}>
      <ul> <h3>QUICK LINKS</h3>
        <li>Orders & Shopping</li>
        <li>Join/Login as a Seller</li>
        <li>Payment & Pricing</li>
        <li>Return & Refunds</li>
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
      </div>
      <div className={styles.bottomRight}>
        <h3>FOLLOW US</h3>
        <span>
          <div className={styles.icons}><FaInstagram/> </div>
          <div className={styles.icons}> <FaLinkedin/></div>
         </span>
         <p>mettā muse Accepts</p>
         <div className={styles.bottomImages}>
         
          <Image src={gpay} alt="gpay" />
          <Image src={mastercard} alt="mastercard" />
          <Image src={paypal} alt="paypal" />
          <Image src={amex} alt="amex card" />
          <Image src={applepay} alt="applepay" />
          <Image src={opay} alt="opay" />
         
         </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
