import React, { Component } from 'react'
import { connect } from "react-redux";

class Cart extends Component {
    render() {
        return (
            <div>
                Cart
                <span className="badge badge-secondary">{this.props.cart.products.length}</span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.products,
        cart: state.cart
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
//      addProductt: () => dispatch(addProduct({name: 'Samsung M31', model: 'Samsung'}))
      //onClose: () => dispatch(closeLoginDialog())
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

