import { HeaderS, LogoStyle, SocialIconStyle, Navbar } from "./HeaderStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Button from '@material-ui/core/Button';
function Header() {
    return (
        <HeaderS>
            <LogoStyle><a href="/">The Foundater</a></LogoStyle>
            <SocialIconStyle>
                <ul>
                    <li><a href="https://www.youtube.com/#"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x"  color="white"/>
                    </a></li>
                    <li><a href="https://www.twitter.com/#" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
                    </a></li>
                    <li><a href="https://www.facebook.com/#"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" color="white"/>
                    </a></li>
                    <li><a href="https://www.instagram.com/#"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x"  color="white"/>
                    </a></li>
                </ul>
            </SocialIconStyle>
            <Navbar>
                <a href="/">Home</a>
                <a href="/stories">Stories</a>
                <a href="/about">About us</a>
                <a href="/contact">Contact us</a>
            </Navbar>
            <Button variant="contained" color="secondary">
                Newsletter
            </Button>
        </HeaderS>)
}
export default Header;