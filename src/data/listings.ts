import { ImageSourcePropType } from "react-native";

export type Listing = {
  id: string;
  name: string;
  price: number;
  businessName: string;
  image: ImageSourcePropType;
  description: string;
  location: string;
  responseTime: string;
  nextAvailable: string;
};

export const listings: Listing[] = [
  {
    id: "1",
    name: "Oil Change & Inspection",
    price: 45,
    businessName: "Midtown Auto Care",
    image: require("../../assets/ListingImages/1.jpg"),
    description:
      "Full synthetic oil change with a 21-point vehicle inspection, including brakes, fluids, and tire tread.",
    location: "1800 Broadway, Sacramento, CA",
    responseTime: "Usually responds within 1 hour",
    nextAvailable: "2026-08-14T09:00:00",
  },
  {
    id: "2",
    name: "Haircut & Beard Trim",
    price: 30,
    businessName: "Fade Kings Barbershop",
    image: require("../../assets/ListingImages/2.jpg"),
    description:
      "Precision fade haircut with hot towel beard trim and lineup finish.",
    location: "2400 J St, Sacramento, CA",
    responseTime: "Usually responds within 30 minutes",
    nextAvailable: "2026-08-13T13:30:00",
  },
  {
    id: "3",
    name: "Deep House Cleaning",
    price: 120,
    businessName: "Sparkle Home Services",
    image: require("../../assets/ListingImages/3.jpg"),
    description:
      "Top-to-bottom deep clean covering kitchens, bathrooms, baseboards, and interior windows.",
    location: "3500 Fair Oaks Blvd, Sacramento, CA",
    responseTime: "Usually responds within 3 hours",
    nextAvailable: "2026-08-16T10:00:00",
  },
  {
    id: "4",
    name: "Lawn Mowing & Edging",
    price: 55,
    businessName: "GreenScape Lawn Co.",
    image: require("../../assets/ListingImages/4.jpg"),
    description:
      "Mowing, edging, and blowing for front and back yards, plus a quick shrub trim on request.",
    location: "4200 Freeport Blvd, Sacramento, CA",
    responseTime: "Usually responds within 2 hours",
    nextAvailable: "2026-08-15T08:00:00",
  },
  {
    id: "5",
    name: "Dog Walking (30 min)",
    price: 25,
    businessName: "Pawsome Pet Care",
    image: require("../../assets/ListingImages/5.jpg"),
    description:
      "A 30-minute neighborhood walk with fresh water and a post-walk photo update.",
    location: "1200 K St, Sacramento, CA",
    responseTime: "Usually responds within 15 minutes",
    nextAvailable: "2026-08-13T16:00:00",
  },
  {
    id: "6",
    name: "Furniture Assembly",
    price: 65,
    businessName: "Handy Hands Repair",
    image: require("../../assets/ListingImages/6.jpg"),
    description:
      "Assembly for flat-pack furniture — shelving, bed frames, desks — tools and hardware included.",
    location: "5600 Stockton Blvd, Sacramento, CA",
    responseTime: "Usually responds within 4 hours",
    nextAvailable: "2026-08-17T11:00:00",
  },
  {
    id: "7",
    name: "Photography Session",
    price: 150,
    businessName: "Sac Valley Studios",
    image: require("../../assets/ListingImages/7.jpg"),
    description:
      "One-hour portrait or event session with 20 edited digital photos delivered within a week.",
    location: "1616 Del Paso Blvd, Sacramento, CA",
    responseTime: "Usually responds within 6 hours",
    nextAvailable: "2026-08-20T15:00:00",
  },
  {
    id: "8",
    name: "Personal Training (1 hr)",
    price: 60,
    businessName: "Peak Fitness Coaching",
    image: require("../../assets/ListingImages/8.jpg"),
    description:
      "One-on-one strength and conditioning session tailored to your goals, equipment provided.",
    location: "3800 Watt Ave, Sacramento, CA",
    responseTime: "Usually responds within 1 hour",
    nextAvailable: "2026-08-14T17:00:00",
  },
];
