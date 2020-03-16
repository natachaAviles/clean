import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { 
  fetchProducts, 
  addToCart,
  deleteFromCart 
} from '../actions'

import ProductView from '../components/product_view'
import CartView from '../components/cart_view'

class MainContent extends React.Component {
  componentDidMount () {
    this.props.fetchProducts()
  }

  renderCart () {
    return (
      <Popper
        className='n-cart-display'
        placement="bottom"
        open={true}
        disablePortal={false}
      >
        <Paper className='n-cart-display__content'>
          {this.props.cartProducts.map((item) => (
            <p>
              {item.name}
              <DeleteIcon
                onClick={() => this.props.deleteFromCart(item.name)} />
            </p>
          ))}
         <Link to='/Cart'>
            <Button color='primary'>
              <ShoppingCartIcon/>
              Ir a Carrito
            </Button>
         </Link>
        </Paper>
      </Popper>
    )
  }

	render() {

		return (
			<Router>
				<AppBar position="static" className='n-appbar'>
					<Toolbar>
            <Link to='/'>
              <img
                className='n-appbar__image'
                src='https://vignette.wikia.nocookie.net/es.pokemon/images/3/3b/Logo_de_amiibo.png/revision/latest?cb=20150909205748'
                alt='amibo' />
            </Link>
            <Link to='/Cart'>Mi Carrito de compras</Link>
            {this.renderCart()}
          </Toolbar>
				</AppBar>
				<Container fixed>
					<h3>Amiibo SHOP </h3>
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



