import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid, Tooltip, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating"; // Import the StarRating component

const ProductGridCard = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Card
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
        height: "390px",
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Product Image ${index + 1}`}
              style={{ width: "100%", height: "200px" }}
            />
          </div>
        ))}
      </Slider>
      <CardContent>
        <Grid container justifyContent="space-between" flexDirection="column">
          <Grid item xs={12}>
            <Tooltip title={description} aria-label="add" placement="top">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "#F9629F",
                  my: 2,
                }}
              >
                {title}
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item lg={5}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 18, color: "#4d4c51" }}
                >
                  Rs. {price}/-
                </Typography>
              </Grid>
              <Grid
                item
                lg={7}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 16, color: "#FF69B4" }}
                >
                  {brand}
                </Typography>
              </Grid>
            </Grid>
            <Tooltip title={`Rating: ${rating}`} placement="top">
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item lg={4}>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: 16, color: "#4d4c51" }}
                  >
                    {discountPercentage}% off
                  </Typography>
                </Grid>
                <Grid
                  item
                  lg={8}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <StarRating count={rating} />
                </Grid>
              </Grid>
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ProductGridCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductGridCard;
