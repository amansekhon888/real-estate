import Heading from "../Common/Heading"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import ExploreCard from "../Cards/Explore.card";
import { dining_area4, living_room3, living_room5, living_room7 } from "../../assets/images";
import Button from "../Common/Button";

const HomeExplore = () => {
  const [category, setCategory] = useState('Interior Design');
  const [budget, setBudget] = useState('$2.6M - $3.8M');
  const [scale, setScale] = useState('Commercial');

  const properties = [
    {
      title: "Cozy Downtown Apartment",
      description: "A chic 2-bedroom apartment in the heart of the city, offering convenience and comfort with modern interiors.",
      location: {
        address: "456 Elm Street, New York, NY",
        city: "New York",
        state: "New York",
        country: "USA",
        zipCode: "10001",
      },
      price: "$750,000",
      propertyType: "Apartment",
      features: [
        "2 Bedrooms",
        "2 Bathrooms",
        "Balcony with City View",
        "Open Kitchen",
        "Built-in Wardrobes",
      ],
      area: {
        builtUp: "1200 sq.ft",
      },
      images: [living_room7],
      status: "Available",
      agent: {
        name: "Emily Smith",
        contact: "+1 987-654-3210",
        email: "emilysmith@example.com",
      },
      amenities: [
        "Gym",
        "Rooftop Pool",
        "24/7 Concierge",
        "Underground Parking",
        "Pet Friendly",
      ],
      nearby: {
        schools: "0.5 miles",
        hospitals: "1 mile",
        malls: "0.8 miles",
        transport: "0.2 miles to nearest subway station",
      },
      postedDate: "2024-12-01",
    },
    {
      id: "P12347",
      title: "Spacious Suburban House",
      description: "A beautiful 4-bedroom family home in a quiet suburban neighborhood, with a large garden and ample parking.",
      location: {
        address: "789 Oak Drive, Austin, TX",
        city: "Austin",
        state: "Texas",
        country: "USA",
        zipCode: "73301",
      },
      price: "$1,200,000",
      propertyType: "House",
      features: [
        "4 Bedrooms",
        "3 Bathrooms",
        "Private Garden",
        "2-Car Garage",
        "Fireplace",
        "Spacious Kitchen",
      ],
      area: {
        builtUp: "3500 sq.ft",
        plotSize: "8000 sq.ft",
      },
      images: [living_room3],
      status: "Under Construction",
      agent: {
        name: "Michael Johnson",
        contact: "+1 555-789-1234",
        email: "michaelj@example.com",
      },
      amenities: [
        "Community Pool",
        "Jogging Track",
        "Children’s Play Area",
        "24/7 Security",
      ],
      nearby: {
        schools: "1 mile",
        hospitals: "2 miles",
        malls: "3 miles",
        transport: "1 mile to bus stop",
      },
      postedDate: "2024-11-25",
    },
    {
      id: "P12348",
      title: "Luxurious Beachfront Penthouse",
      description: "A premium 3-bedroom penthouse with stunning ocean views, private terrace, and high-end amenities.",
      location: {
        address: "12 Seaside Boulevard, Miami, FL",
        city: "Miami",
        state: "Florida",
        country: "USA",
        zipCode: "33139",
      },
      price: "$3,500,000",
      propertyType: "Penthouse",
      features: [
        "3 Bedrooms",
        "4 Bathrooms",
        "Private Terrace",
        "Oceanfront View",
        "Jacuzzi",
        "Modern Furnishings",
      ],
      area: {
        builtUp: "5000 sq.ft",
      },
      images: [living_room5],
      status: "Available",
      agent: {
        name: "Sophia Brown",
        contact: "+1 444-567-8901",
        email: "sophiab@example.com",
      },
      amenities: [
        "Infinity Pool",
        "Private Elevator",
        "Spa and Sauna",
        "Beach Access",
        "24/7 Concierge",
      ],
      nearby: {
        schools: "2 miles",
        hospitals: "1.5 miles",
        malls: "1 mile",
        transport: "0.3 miles to metro station",
      },
      postedDate: "2024-12-10",
    },
    {
      id: "P12349",
      title: "Modern Urban Studio",
      description: "A compact and stylish studio apartment in the city center, perfect for young professionals or students.",
      location: {
        address: "23 Pearl Street, San Francisco, CA",
        city: "San Francisco",
        state: "California",
        country: "USA",
        zipCode: "94103",
      },
      price: "$450,000",
      propertyType: "Studio Apartment",
      features: [
        "1 Bedroom",
        "1 Bathroom",
        "Open Floor Plan",
        "High Ceilings",
        "Natural Lighting",
      ],
      area: {
        builtUp: "800 sq.ft",
      },
      images: [dining_area4],
      status: "Available",
      agent: {
        name: "Rachel Green",
        contact: "+1 123-789-6540",
        email: "rachelgreen@example.com",
      },
      amenities: [
        "Rooftop Lounge",
        "24/7 Security",
        "Co-working Space",
        "Pet Friendly",
      ],
      nearby: {
        schools: "1 mile",
        hospitals: "0.5 miles",
        malls: "1.2 miles",
        transport: "0.3 miles to nearest bus stop",
      },
      postedDate: "2024-12-15",
    },
  ];
  
  return (
    <div className="tablet:w-10/12 w-11/12 max-h-[100vh] m-auto">
      <Heading text="Explore Our Services" custom_css="text-center" />
      <p className="text-center mt-[1.2vw]">Explore our range of specialized services designed to bring your vision to life, from groundbreaking concepts to the final touches.</p>
      <div className="mt-[2vw] p-[1.4vw] bg-secondaryBackground rounded-[1.6vw] flex justify-between">
        <div className="font-medium flex gap-[1vw] items-center">
          <p>CATEGORY: </p>
          <Select
            className="mui-form--select w-[14vw]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="Interior Design">Interior Design</MenuItem>
            <MenuItem value="Renovation">Renovation</MenuItem>
            <MenuItem value="Architecture">Architecture</MenuItem>
            <MenuItem value="Building Design">Building Design</MenuItem>
          </Select>
        </div>
        <div className="flex gap-[2vw]">
          <div className="font-medium flex gap-[1vw] items-center">
            <p>SCALE: </p>
            <Select
              className="mui-form--select w-[10vw]"
              value={scale}
              onChange={(e) => setScale(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="Residential">Residential</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
            </Select>
          </div>
          <div className="font-medium flex gap-[1vw] items-center">
            <p>PRICING: </p>
            <Select
              className="mui-form--select w-[12vw]"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="less than $1M">less than $1M</MenuItem>
              <MenuItem value="$1M - $2.6M">$1M - $2.6M</MenuItem>
              <MenuItem value="$2.6M - $3.8M">$2.6M - $3.8M</MenuItem>
              <MenuItem value="$3.8M - $5M">$3.8M - $5M</MenuItem>
              <MenuItem value="more than $5M">more than $5M</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div className="mt-[1.4vw] grid grid-cols-4 gap-[1.2vw]">
        {properties?.map((property, index) => (
          <ExploreCard key={index} property={property} />
        ))}
      </div>
      <Button text="Explore More" custom_css="justify-self-center" />
    </div>
  )
}

export default HomeExplore