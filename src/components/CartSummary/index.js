import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalPrice = () => {
        const req = cartList.map(each => each.price * each.quantity)

        return req.reduce((each, acc) => each + acc)
      }

      const itemsInCart = cartList.length

      return (
        <div className="summary-container">
          <h1 className="summary-para-1">
            Order Total:
            <span className="summary-span">Rs {totalPrice()}/-</span>
          </h1>
          <p className="summary-para-2">{itemsInCart} items in cart</p>
          <button type="button" className="checkOut">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
