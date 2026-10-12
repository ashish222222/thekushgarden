export type MenuCategory = 'all' | 'starters' | 'main' | 'desserts' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  nepaliSubtitle?: string;
  description: string;
  price: number;
  formattedPrice: string;
  category: 'starters' | 'main' | 'desserts' | 'drinks';
  categoryLabel: string;
  image: string;
  isSignature?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  pairing?: string;
  ingredients?: string[];
  spiciness?: 0 | 1 | 2 | 3;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambiance' | 'dishes' | 'hearth' | 'cocktails';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: string;
  specialRequests?: string;
}
