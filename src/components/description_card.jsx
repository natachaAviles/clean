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
      <Card elevation={3} style={{ marginBottom: '10px', fontSize: '14px', padding: '5px 0' }}>
        <CardActionArea>
          <CardMedia
            style={{ height: '150px', backgroundSize: 'contain' }}
            image={amiibo.image}
            title="Contemplative Reptile"
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
            aria-label="add"
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