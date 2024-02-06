import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Grid } from '@mui/material';

const ProductListCard = ({ id, slug, title, price, discountPercentage, rating, imgUrl }) => (
  <ListItem 
    alignItems="flex-start"
    style={{ 
      width: '100%', 
      border: '1px solid #ccc', 
      borderRadius: '4px', 
      marginBottom: '8px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' // Adding box shadow
    }}
  >
    <ListItemAvatar>
      <Avatar alt={title} src={imgUrl} />
    </ListItemAvatar>
    <ListItemText
      primary={title}
      secondary={
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Typography component="span" variant="body2" color="textPrimary" style={{ fontWeight: 'bold' }}>
              Price: {price}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography component="span" variant="body2" color="textPrimary" style={{ fontWeight: 'bold' }}>
              Discount: {discountPercentage}%
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography component="span" variant="body2" color="textPrimary" style={{ fontWeight: 'bold' }}>
              Rating: {rating}
            </Typography>
          </Grid>
        </Grid>
      }
    />
  </ListItem>
);

ProductListCard.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default ProductListCard;
