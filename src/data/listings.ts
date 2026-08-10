import { ImageSourcePropType } from "react-native";

export type Listing = {
  id: string;
  name: string;
  price: number;
  businessName: string;
  image: ImageSourcePropType;
};

export const listings: Listing[] = [
  {
    id: "1",
    name: "Oil Change & Inspection",
    price: 45,
    businessName: "Midtown Auto Care",
    image: require("../../assets/ListingImages/1.jpg"),
  },
  {
    id: "2",
    name: "Haircut & Beard Trim",
    price: 30,
    businessName: "Fade Kings Barbershop",
    image: require("../../assets/ListingImages/2.jpg"),
  },
  {
    id: "3",
    name: "Deep House Cleaning",
    price: 120,
    businessName: "Sparkle Home Services",
    image: require("../../assets/ListingImages/3.jpg"),
  },
  {
    id: "4",
    name: "Lawn Mowing & Edging",
    price: 55,
    businessName: "GreenScape Lawn Co.",
    image: require("../../assets/ListingImages/4.jpg"),
  },
  {
    id: "5",
    name: "Dog Walking (30 min)",
    price: 25,
    businessName: "Pawsome Pet Care",
    image: require("../../assets/ListingImages/5.jpg"),
  },
  {
    id: "6",
    name: "Furniture Assembly",
    price: 65,
    businessName: "Handy Hands Repair",
    image: require("../../assets/ListingImages/6.jpg"),
  },
  {
    id: "7",
    name: "Photography Session",
    price: 150,
    businessName: "Sac Valley Studios",
    image: require("../../assets/ListingImages/7.jpg"),
  },
  {
    id: "8",
    name: "Personal Training (1 hr)",
    price: 60,
    businessName: "Peak Fitness Coaching",
    image: require("../../assets/ListingImages/8.jpg"),
  },
];
