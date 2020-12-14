import React, { Component } from 'react';
import { addProduct, removeProduct } from '../Reducers/product.actions';
import { connect } from "react-redux";
import { addToCart } from '../Reducers/cart.actions';
import { SAGA_FETCH_USER } from '../saga/sagaTypes';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            showHome: true,
            showMenu1: false                    
        }
    }

    toggleHome() {
        this.setState({showMenu1: false, showHome: !this.showHome});
    }

    toggleMenu1() {
        this.setState({showHome: false, showMenu1: !this.showMenu1});
    }

    render() {
        return (<div className="Center-content">

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" onClick={() => this.toggleHome()}>
                        <a className={"nav-link "+ (this.state.showHome ? 'active' : '')} id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Products (Redux)</a>
                    </li>
                    <li className="nav-item" onClick={() => this.toggleMenu1()}>
                        <a className={"nav-link "+ (this.state.showMenu1 ? 'active' : '')} id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Users (sagas)</a>
                    </li>
                </ul>
                <div className="tab-content main" id="myTabContent">
                    <div className={"tab-pane fade "+(this.state.showHome ? 'show active' : '')} id="home" role="tabpanel" aria-labelledby="home-tab">
                    
                    <div className="main">
                        <div>
                            <h5 className="bg-orange">Add Product</h5>
                            <span className="add-product-row ">Product Name <input type="text" id="product_name" name="product_name"/></span>
                            <span className="add-product-row">Product Model <input type="text" id="product_model" name="product_model"/></span>
                            <button className="btn btn-sm btn-primary" onClick={() => this.props.addProduct()}>Add Product</button>
                        </div>
                        <hr />
                        <div>
                            <h5 className="bg-orange">Product List </h5>
                            {this.props.product.products.length === 0 && 'No record found'}
                            {this.props.product.products.length > 0 &&
                                <div>
                                    <table cellPadding="5" cellSpacing="5">
                                        <thead>
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Product Model</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.product.products.map((p)=> {
                                            return (<tr className="product-list" key={p.id}>
                                                <td>{p.id}</td>
                                                <td>{p.name}</td>
                                                <td>{p.model}</td>
                                                <td><button className="btn btn-sm btn-success" onClick={() => this.props.addToCart(this, p.id)}>Add To Cart</button> &nbsp;
                                                <button className="btn btn-sm btn-danger" onClick={() => this.props.removeProduct(p.id)}>Delete Product</button></td>
                                            </tr>)
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            }

                        </div>
                        <hr />
                        <div>
                        <h5 className="bg-orange">Products added in Cart</h5>
                            {this.props.cart.products.length === 0 && 'No record found'}

                            {this.props.cart.products.length > 0 &&
                                <div>
                                    <table cellPadding="5" cellSpacing="5">
                                        <thead>
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Product Model</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.cart.products.map((p) => {
                                                return <tr key={p.id}>
                                                    <td>{p.id}</td>
                                                    <td>{p.name}</td>
                                                    <td>{p.model}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            }
                        </div>
                    </div>
                    
                    </div>
                    <div className={"tab-pane fade "+(this.state.showMenu1 ? 'show active' : '')} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <button className="btn btn-sm btn-primary" onClick={this.props.fetchUser}>View Users</button>

                        {this.props.cart.users.length > 0 &&
                            this.props.cart.users.map((p) => {
                                return <div>{p.id}, {p.name}, {p.email}</div>
                            })
                        }
                    </div>
                </div>
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
let productId = 1;
function mapDispatchToProps(dispatch) {
    return {
      addProduct: () => dispatch(addProduct({id: productId++, name: document.getElementById('product_name').value, model: document.getElementById('product_model').value})),
      removeProduct: (pid) => dispatch(removeProduct(pid)),
      addToCart: (thisObj, pid) => dispatch(addToCart(thisObj.props.product.products.filter(p => p['id'] === pid)[0])),
      //fetchUser: () => fetchUser()
      fetchUser: () => dispatch({ type: SAGA_FETCH_USER, value: 1 })
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

