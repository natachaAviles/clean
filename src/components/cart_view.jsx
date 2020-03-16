import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

class CartView extends React.Component {
  render () {

    const { cartProducts =[] } = this.props

    return (
      <Grid direction="row">
         <Grid item sm={8}>
          {cartProducts.map((amiibo) => (
            <Paper style={{ marginBottom: '10px', fontSize: '14px' }}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-evenly"
              >
                <Grid item xs={2}>
                  <img src={amiibo.image} alt={amiibo.name} style={{ width: '55px' }} />
                </Grid>
                <Grid item xs={2}>
                  <p>Nombre</p>
                  <p>{amiibo.name}</p>
                </Grid>
                <Grid item xs={2}>
                  <p>Serie</p>
                  <p>{amiibo.gameSeries}</p>
                </Grid>
                <Grid item xs={2}>
                  <p>tipo</p>
                  <p>{amiibo.type}</p>
                </Grid>
                <Grid>
                  <Fab>
                    <DeleteIcon onClick={() => this.props.deleteFromCart(amiibo.name)}/>
                  </Fab>
                </Grid>
              </Grid>
            </Paper>
          ))}
         </Grid>
         <Grid item sm={3}>
           <Paper style={{padding:'30px'}}>
              <h3>Checkout</h3>
              <p>Cantidad Productos: {cartProducts.length}</p>
              <p>Total Productos: $30.000 CLP</p>
           </Paper>
         </Grid>
      </Grid>
    );
  }
}

export default CartView



