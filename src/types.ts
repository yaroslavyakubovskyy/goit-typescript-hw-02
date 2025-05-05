export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  user: {
    name: string;
  };
  likes: number;
}

export interface SearchBarProps {
  handleSearch: (query: string) => void;
}

export interface ImageGalleryProps {
  images: UnsplashImage[];
  openModal: (image: UnsplashImage) => void;
}

export interface LoadMoreBtnProps {
  onLoadMore: () => void;
  disabled?: boolean;
}

export interface ImageModalProps {
  data: UnsplashImage;
  onClose: () => void;
}

export interface ImageCardProps {
  image: UnsplashImage;
  openModal: (image: UnsplashImage) => void;
}

export interface FetchImagesProps {
  total_pages: number;
  results: UnsplashImage[];
}
