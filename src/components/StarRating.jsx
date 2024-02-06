import React from "react";
import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const StarRating = ({ count }) => {
  const maxStars = 5; // Assuming the maximum rating is 5 points
  const fullStars = Math.floor(count);
  const hasHalfStar = count % 1 !== 0;

  const renderStars = (count, type) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(type);
    }
    return stars;
  };

  return (
    <div>
      {renderStars(fullStars, <StarIcon style={{ fontSize: 28, color: "gold" }} />)}
      {hasHalfStar && <StarHalfIcon style={{ fontSize: 28, color: "gold" }} />}
      {renderStars(maxStars - fullStars - (hasHalfStar ? 1 : 0), <StarOutlineIcon style={{ fontSize: 28, color: "gold" }} />)}
    </div>
  );
};

StarRating.propTypes = {
  count: PropTypes.number.isRequired,
};

export default StarRating;
