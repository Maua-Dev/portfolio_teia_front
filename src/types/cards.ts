interface BaseCard {
  id: string;
  image: string;
  hover: string; // Member's name or painting's title
}

// Specific type for Home Page paintings (Pinterest layout)
export interface PictureCardData extends BaseCard {
  tipo: 'picture';
  dimension: 'small' | 'medium' | 'large'; // Dynamically generated in the frontend
  categorias: string[];
  ano: string;
}

// Specific type for Members
export interface MemberCardData extends BaseCard {
  tipo: 'member';
}