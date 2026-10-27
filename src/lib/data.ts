export type CategoryRecord = {
  id: number;
  name: string;
  image: string;
  count?: number;
};

export const categories: CategoryRecord[] = [
  { id: 1, name: "Embroidery", image: "/category-images/embroidery.jpg" },
  { id: 2, name: "Mehndi", image: "/category-images/mehndi.jpg" },
  { id: 3, name: "Crochet", image: "/category-images/crochet.jpg" },
  { id: 4, name: "Stitching", image: "/category-images/stitching.jpg" },
  { id: 5, name: "Fashion Design", image: "/category-images/fashion-design.jpg" },
  { id: 6, name: "Tutoring", image: "/category-images/tutoring.jpg" },
  { id: 7, name: "Handmade Crafts", image: "/category-images/handmade-crafts.jpg" },
  { id: 8, name: "Jewelry Making", image: "/category-images/jewelry-making.jpg" },
];

export type CreatorRecord = {
  id: number;
  name: string;
  skill: string;
  city: string;
  rating: number;
  reviews: number;
  image: string;
  bio: string;
  skills: string[];
  portfolio: string[];
};

export const featuredCreators: CreatorRecord[] = [];

export type MarketplaceItem = {
  id: number;
  title: string;
  creator: string;
  creatorId: number;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
};

export const marketplaceItems: MarketplaceItem[] = [];

export type TestimonialRecord = {
  id: number;
  name: string;
  role: string;
  city: string;
  content: string;
  rating: number;
  image: string;
};

export const testimonials: TestimonialRecord[] = [];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Create Your Profile",
    description: "Sign up and showcase your talent with your skills, portfolio, and pricing.",
  },
  {
    step: 2,
    title: "Meet Clients & Negotiate Prices",
    description: "Connect with customers, discuss their needs, and agree on clear pricing.",
  },
  {
    step: 3,
    title: "Get Discovered",
    description: "Customers browse and find your services through the marketplace.",
  },
  {
    step: 4,
    title: "Earn & Grow",
    description: "Build your reputation and grow your creative business.",
  },
];

export type CreatorReview = {
  id: number;
  reviewer: string;
  rating: number;
  date: string;
  comment: string;
};

export const creatorReviews: CreatorReview[] = [];

export const pakistanCities = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan",
  "Peshawar", "Quetta", "Sialkot", "Hyderabad", "Gujranwala", "Bahawalpur",
  "Sargodha", "Abbottabad", "Mardan", "Sukkur",
];

export const skillCategories = [
  "Embroidery", "Mehndi", "Crochet", "Stitching", "Fashion Design", "Tutoring",
  "Handmade Crafts", "Jewelry Making", "Calligraphy", "Baking & Cooking", "Other",
];
