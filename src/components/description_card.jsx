import React from 'react';
import Card from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';

class AmiiboCard extends React.Component {
  render () {
    const { amiibo, addToCart } = this.props

    return (
      <Card elevation={3} className='n-product-card'>
        <CardActionArea>
          <CardMedia
            className='n-product-card__image'
            image={amiibo.image}
            title={amiibo.character}
          />
          <CardContent>
            <p>Personaje: {amiibo.name}</p>
            <p>Serie : {amiibo.amiiboSeries}</p>
            <p>Tipo: {amiibo.type}</p>
            <p>Precio: $12.000 CLP</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            onClick={() => addToCart(amiibo)}
          >
            Agregar 
        </Fab>
        </CardActions>
      </Card>
    )
  }
}

export default AmiiboCard