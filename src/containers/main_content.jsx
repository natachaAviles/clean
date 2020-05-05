import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { 
  fetchProducts, 
  addToCart,
  deleteFromCart 
} from '../actions'

import ProductView from '../components/product_view'
import CartView from '../components/cart_view'

class MainContent extends React.Component {

	render() {

		return (
			<Router>
				<AppBar position="static" className='n-appbar'>
					<Toolbar>
            <Link to='/'>
               Servicio Limpieza
            </Link>
          </Toolbar>
				</AppBar>
				<Container maxWidth='xl'>
          <Switch>
            <Route exact path="/" component={(props) => 
              <ProductView 
              products={this.props.products} 
              pending={this.props.pending} 
              cartProducts={this.props.cartProducts} 
              addToCart={this.props.addToCart} />} 
            />
            <Route 
              exact 
              path="/Cart" 
              component={(props) => 
              <CartView cartProducts={this.props.cartProducts}
              deleteFromCart={this.props.deleteFromCart}/>} 
              />
          </Switch>
				</Container>
        <Grid className='c-footer'></Grid>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
  products: state.products,
  pending: state.pending,
  cartProducts: state.addedProducts
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProducts,
  addToCart: addToCart,
  deleteFromCart: deleteFromCart
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);



