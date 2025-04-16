import React from 'react';
import './navbarbelt.css';
import amazonLogo from '../../../Assets/amazonLogo.png';
import tunisia from '../../../Assets/tunisia.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

const Navbarbelt = () => {
    const cartItems = useSelector((state)=> state.cart.items);
  return (
    <div className='navbarBelt'>
          <div className='leftNavBelt'>
                <Link to={'/products'} className="leftNavBeltLogo" >
                    <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo' />
                    <span className='navbar_inLogo'>.tn</span>
                </Link>
                <div className='navbarBeltLocation'>
                    <div className='navbarBeltLocationImg'>
                        <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{fontsize:"22px"}}/>
                    </div>

                    <div className='navbarBeltLocationPlace'>
                        <div className='navbarBeltLocationTop'>Delivering to Pune 411032</div>
                        <div className='navbarBeltLocationBottom'>Update Location</div>
                    </div>

                </div>
          </div>

          <div className="navbarBeltSearchBox">
                <div className="navbarBeltSearchDiv">
                    <div className="navbarBeltSearchBoxAll">
                                <div className="navbarBeltSearchBoxAllText">All</div>
                                <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
                    </div>
                    <input type="text" className='navbarBeltInputSearchBox' placeholder='Search Amazon.tn'/>
                    <div className='searchIconNavbarBelt'>
                        <SearchIcon sx={{fontSize:"26px"}} className='searchIconNavbarBeltIcon'/>
                    </div>
                    
                </div>
          </div>

          <div className="rightSideNavbarBelt">
                <div className="tunisFlagCode" >
                        <img className='tunisFlag' src={tunisia} alt='tunisFlag' />
                        <div className='tunisCodeNavbarBelt'>En <ArrowDropDownOutlinedIcon sx={{ fontSize:16,marginTop:1,marginLeft:-0.4 }} className='tunisCodeNavbarBeltDrp'/> </div>
                </div>
                <div class="helloSignInNavbaeBelt">
                        <div class="helloTopNavbarBelt">Hello, User</div>
                        <div class="tunisCodeNavbarBelt">Accounts & Lists</div>
                </div>
                <div class="helloSignInNavbaeBelt">
                        <div class="helloTopNavbarBelt">Returns</div>
                        <div class="tunisCodeNavbarBelt">& Orders</div>
                </div>

                <Link to={'/cart'} className='helloSignInNavbaeBelt'>
                        <span className='cartItemNumberNavbarBelt'>{cartItems.length}</span>
                        <div className='helloTopNavbarBelt'>
                            <ShoppingCartOutlinedIcon/>
                            <span className='cartTitle'>Cart</span>
                        </div>
                </Link>

          </div>

    </div>
  )
}

export default Navbarbelt
