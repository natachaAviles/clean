import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import AmiiboCard from '../components/description_card'

class ProductView extends React.Component {
  render () {

    const { products = [], pending, addToCart } = this.props

    return (
      <Grid container
        spacing={3}
        justify="center"
        alignItems="center">
        {pending && <CircularProgress/>}
        {products.map((amiibo) => (
          <Grid item xs={3}>
            <AmiiboCard amiibo={amiibo} addToCart={addToCart}></AmiiboCard>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default ProductView



