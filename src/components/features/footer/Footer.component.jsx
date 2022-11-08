import React from 'react'
import './footer.css'

function Footer () {
  return ( 
    <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Social Media</h4>
          <div class="social-links">
        
                      <i class="fab fa-facebook-f">
                      <img src="GitHub.png" width="40" height="40"></img>
                      </i>
                      
    
                      <i class="fab fa-twitter">
                      <img src="linkedin.png" width="40" height="40"></img>
                      </i>
    
                      <i class="fab fa-instagram">
                      <img src="8-email.png" width="40" height="41"></img>
                      </i>
                      
          </div>
        </div>
      </div>
    </div>
 </footer>
   );
}

export default Footer ;