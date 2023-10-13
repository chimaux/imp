import React from 'react'
import styles from  "./Footer.module.css"
import { FaFacebook,FaInstagram,FaTwitter} from 
"react-icons/fa";
import Link  from 'next/link';

const Footer = () => {
  return (
    // {footer div container}
    <div className={styles.footerContainer}>

   <div className={styles.footercontent}>
    
{/* {icons and footer logo} */}
   <div className={styles.socialdiv}>

<div>
<img src="images/logo.png" alt="" />
</div>

<div className={styles.footerIcons}>


  <FaFacebook/>
  


  <FaInstagram/>
  



  <FaTwitter/>
  

</div>

</div>


{/* {footeLinks} */}
<div className={styles.divcontain}>
<div className={styles.footerdiv}>
  <h4>About</h4>
  <li>
  Nigeria
  </li>
  <li>
  UK/International
  </li>
  <li>
  Career
  </li>

</div>
<div className={styles.footerdiv}>
<h4>Buy</h4>
  <li>
Imprxx Interface
  </li>
  <li>
Huarong Products
  </li>
  <li>
  Accessories
  </li>
</div>
<div className={styles.footerdiv}>
<h4>Services</h4>
  <li>
Find an Imprxx Anchor
  </li>
  <li>
Become an Imprxx Anchor
  </li>
  <li>
  Anchor Training Program
  </li>

  <li>
  Rent a Screen Interface
  </li>

  <li>
  Rent a Screen Interface
  </li>
</div>

<div className={styles.footerdiv}>
  <h4>Resources</h4>
  <li>
Blog
  </li>
  
</div>

</div>

   </div>
  </div>
  )
}

export default Footer