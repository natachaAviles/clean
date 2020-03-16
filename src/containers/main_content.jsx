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
        style={{ position: 'absolute', top: '20px', right: '0', left: 'initial' }}
        placement="bottom"
        open={true}
        disablePortal={true}
      >
        <Paper style={{ padding: '15px', maxWidth:'350px', fontSize:'12px' }}>
          {this.props.cartProducts.map((item) => (
            <p>{item.name}
              <DeleteIcon
                onClick={() => this.props.deleteFromCart(item.name)} />
            </p>
          ))}
        </Paper>
      </Popper>
    )
  }

	render() {

		return (
			<Router>
				<AppBar position="static" className='n-appbar'>
					<Toolbar>
            <img
              src='https://vignette.wikia.nocookie.net/es.pokemon/images/3/3b/Logo_de_amiibo.png/revision/latest?cb=20150909205748' 
              style={{ width: '90px'}} 
              alt='amibo'/>
            <Link to='/Cart' style={{color: '#fff', flexGrow: '6'}}>Cart</Link>
            {this.renderCart()}
          </Toolbar>
				</AppBar>
				<Container fixed>
					<h1>Amiibo SHOP </h1>
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



