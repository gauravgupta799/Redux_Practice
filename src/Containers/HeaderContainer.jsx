import Header from "../Components/Header";
import {connect} from "react-redux";
// import {addToCart} from "../Serices/Actions/Actions";

const mapStateToProps = (state) =>({
    cardData:state.CardItems
})

const mapDispatchToProps = (dispatch) =>({
    // addToCartHandler:(data)=> dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);