import React from 'react'
import './footer.css';
import amazonLogo from '../../Assets/amazonLogo.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerCont1">
                    <div className="contentFooterTitle">Get To Know Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Careers</div>
                        <div className="contentFooterSubTitleCont">Blog</div>
                        <div className="contentFooterSubTitleCont">About Amazon</div>
                        <div className="contentFooterSubTitleCont">Investor Relations</div>
                        <div className="contentFooterSubTitleCont">Amazon Devices</div>
                        <div className="contentFooterSubTitleCont">Amazon Science</div>
                    </div>

                </div>
                <div className="footerCont1">
                    <div className="contentFooterTitle">Connect With Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Instagram</div>
                        <div className="contentFooterSubTitleCont">Twitter</div>
                        <div className="contentFooterSubTitleCont">Facebook</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Make Money With US</div>
                    <div className="contentFooterSubTitlediv">
                    
                        <div className="contentFooterSubTitleCont">Sell products on Amazon  </div>
                        <div className="contentFooterSubTitleCont">Sell on Amazon Business </div>
                        <div className="contentFooterSubTitleCont">Sell apps on Amazon </div>
                        <div className="contentFooterSubTitleCont">Become an Affiliate </div>
                        <div className="contentFooterSubTitleCont">Advertise Your Products </div>
                        <div className="contentFooterSubTitleCont">Self-Publish with Us </div>
                        <div className="contentFooterSubTitleCont">Host an Amazon Hub </div>
                    </div>
                </div>
                
                <div className="footerCont1">
                    <div className="contentFooterTitle">Lets Us Help You</div>
                    <div className="contentFooterSubTitlediv">
                    <div className="contentFooterSubTitleCont">Amazon and COVID-19</div>
                    <div className="contentFooterSubTitleCont">Your Account</div>
                    <div className="contentFooterSubTitleCont">Your Orders</div>
                    <div className="contentFooterSubTitleCont">Shipping Rates & Policies</div>
                    <div className="contentFooterSubTitleCont">Returns & Replacements</div>
                    <div className="contentFooterSubTitleCont">Manage Your Content and Devices</div>
                    <div className="contentFooterSubTitleCont">Help</div>
                    </div>
                </div>
            </div>
            <div className="amazonImg">
                <img className='amazonImgFooter' src={amazonLogo} />
            </div>
        </div>
    )
}

export default Footer