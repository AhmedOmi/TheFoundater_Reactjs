import { FooterS, HeaderFooter, FooterFooter } from "./FooterStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { SocialIconStyle } from "../header/HeaderStyle"
import NewsletterS from "../newsletter/NLSection"
function Footer() {
    return (
        <FooterS>
            <HeaderFooter>
                <div className='logo'>
                    <h1>The Foundater</h1>
                </div>
                <div className="helpus">
                    <h3>Help Us</h3>
                    <p>follow us in social media and get touch with paypal</p>
                    <a href='/'>Paypal</a>
                </div>
                <div className="newsletter_section">
                    <NewsletterS />
                </div>
            </HeaderFooter>
            <FooterFooter>
                <ul className="rightSocial">
                    <li className="rights">2021 @ Created with love By Ahmed Omar MILADI</li>
                    <li><SocialIconStyle>
                        <ul>
                            <li><a href="https://www.youtube.com/#"
                                className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x" color="white" />
                            </a></li>
                            <li><a href="https://www.twitter.com/#" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
                            </a></li>
                            <li><a href="https://www.facebook.com/#"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
                            </a></li>
                            <li><a href="https://www.instagram.com/#"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
                            </a></li>
                        </ul>
                    </SocialIconStyle></li>
                </ul>
            </FooterFooter>
        </FooterS>
    )
}
export default Footer;