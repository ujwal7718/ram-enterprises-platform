export interface Product {
  id: string;
  name: string;
  category: string;
  overview: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  images: string[];
  relatedProducts: string[]; // array of product ids
  isCustomEngineered: boolean; // if true, CTA is "Request a Quote", else "Enquire on WhatsApp"
}

export interface Project {
  id: string;
  client: string;
  location: string;
  capacity: string;
  type: string;
  image: string;
  description?: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
}
