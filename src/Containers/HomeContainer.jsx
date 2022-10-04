import Home from "../Components/Home";
import {addToCart} from "../Serices/Actions/Actions";
import {connect} from "react-redux";

const mapStateToProps = (state) =>({

})

const mapDispatchToProps = (dispatch) =>({
    addToCartHandler:(data)=> dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);