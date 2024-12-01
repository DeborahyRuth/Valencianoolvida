import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, CardMedia } from '@mui/material';

interface IProps {
  fullName: string;
  images: string[];
}

const CarouselImages = ({ images, fullName }: IProps): JSX.Element => {
  return (
    <Box
      sx={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}
      onClick={(e) => e.stopPropagation()}
    >
      <ResponsiveCarousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        stopOnHover={true}
      >
        {images.map((image, index) => (
          <CardMedia key={index} component='img' image={image} alt={fullName} />
        ))}
      </ResponsiveCarousel>
    </Box>
  );
};

export default CarouselImages;
