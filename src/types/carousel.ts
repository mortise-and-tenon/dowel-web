export interface CarouselImage {
  id: string | number;
  url: string;
  alt?: string;
}

export interface CarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
}
