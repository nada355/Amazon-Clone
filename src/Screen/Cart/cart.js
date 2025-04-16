import React, { useState, useEffect } from 'react'
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/actions';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    let a = 0;
    let cost = cartItems.map((item)=>{return  a = a+ item.price})

    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems])

    const handleRemoveFromCart=(id)=>{
        toast.error("Item Removed From Cart",{
            position:"bottom-right"
          })
        dispatch(removeFromCart(id));
    }
    return (
        <div className="cart">

            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shopping Cart</div>
                <div className="desellectAllCart">Deselect all items</div>
                <div className="cartPriceTextDivider">Price</div>

                <div className="cartItemsDiv">
                    {
                        cartItems.map((item, ind) => {
                            return (
                                <div className="cartItemBlock">
                                <div className="cartItemLeftBlock">
                                    <div className="cartItemLeftBlockImage">
                                        <img className="cartItemLeftBlockImg" src={item.imageUrl} alt="" />
                                    </div>
                                    <div className="cartItemLeftBlockDetails">
                                        <div className="cartItemProductName">
                                        {item.name}
                                        </div>
                                        <div className="inStockCart">
                                        In stock
                                        </div>
                                        <div className="elgFreeShp">
                                        Elligible for FREE shopping
                                        </div>
                                        <div className="removeFromCart" onClick={()=>{handleRemoveFromCart(item.id)}}>
                                        Remove from Basket
                                        </div>
                                    </div>
                                </div>

                                <div className="cartItemRightBlock">
                                    $ {item.price}
                                </div>
                            </div>
                            );
                        })
                    }




                </div>

            </div>

            <div className="topRightCart">
                <div className="subTotalTitle">Subtotal ({cartItem.length} items) : <span className='subTotalTitleSpan'>$ {a}</span></div>
                <div className="giftAddto">
                    <input type='checkbox' />
                    <div>This Order Contains a gift</div>
                </div>
                <div className="proceedToBuy">Proceed To Buy</div>

            </div>
            <ToastContainer/>
        </div>
    )
}

export default Cart