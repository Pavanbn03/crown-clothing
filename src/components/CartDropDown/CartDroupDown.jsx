import React from 'react'
import './CartDroupDown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/cartItem'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cartSelectors'

const CartDroupDown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <CustomButton >Go TO CHECKOUT </CustomButton>
        </div>
    )
}
const mapsStateToProps = (state)=>({
    cartItems:selectCartItems(state)
})
export default connect(mapsStateToProps)(CartDroupDown);


