import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import StayCard from "./StayCard";

function StayPackages() {
  const packages = [
    {
      heading: "AC Deluxe Rooms",
      description: "Cool and comfortable, perfect for a peaceful stay",
      imageUrl: "/images/ac_delux_room1.webp",

      inclusions: [
        {
          name: "22.12 Sq Ft",
          icon: "/images/icons/room_size.webp",
        },
        {
          name: "Queen Size Bed - 1",
          icon: "/images/icons/bed.webp",
        },
        {
          name: "Bathroom - 1",
          icon: "/images/icons/washroom.webp",
        },
        {
          name: " Occupancy - 2",
          icon: "/images/icons/person.webp",
        },
      ],
      images: [
        "/images/ac_delux_room2.webp",
        "/images/ac_delux_room3.webp",
        "/images/ac_delux_room4.webp",
      ],
      price: "3,500",
    },
    {
      heading: "Non-AC Premium Rooms",
      description: "Cozy and budget-friendly, with a natural breeze 🌬️",
      imageUrl: "/images/premium_non_ac_rooms1.webp",
      inclusions: [
        {
          name: "16.12 Sq Ft",
          icon: "/images/icons/room_size.webp",
        },
        {
          name: "Queen Size Bed - 1",
          icon: "/images/icons/bed.webp",
        },
        {
          name: "Bathroom - 1",
          icon: "/images/icons/washroom.webp",
        },
        {
          name: " Occupancy - 2-3",
          icon: "/images/icons/person.webp",
        },
      ],
      images: [
        "/images/premium_non_ac_rooms2.webp",
        "/images/premium_non_ac_rooms3.webp",
        "/images/premium_non_ac_rooms4.webp",
      ],
      price: "3,000",
    },
    {
      heading: "Family Room",
      description:
        "Spacious and ideal for families 👨‍👩‍👧‍👦, creating lasting memories.",
      imageUrl: "/images/family_room.webp",

      price: "2,750",
      inclusions: [
        {
          name: "39.16 Sq Ft",
          icon: "/images/icons/room_size.webp",
        },
        {
          name: "Queen Size Bed - 2  Single Bed - 2",
          icon: "/images/icons/bed.webp",
        },
        {
          name: "Bathroom - 2",
          icon: "/images/icons/washroom.webp",
        },
        {
          name: " Occupancy - 6",
          icon: "/images/icons/person.webp",
        },
      ],
      images: [
        "/images/family_room.webp",
        "/images/premium_non_ac_rooms3.webp",
        "/images/premium_non_ac_rooms4.webp",
      ],
    },
    {
      heading: "Camping Tents",
      description:
        "Ideal for nature lovers 🌿 and adventurers ⛺, offering a unique outdoor experience.",
      imageUrl: "/images/camping_tents.webp",

      price: "2,125",
      inclusions: [
        {
          name: "6 x 7  Sq Ft",
          icon: "/images/icons/room_size.webp",
        },
        {
          name: "Single Bed - 2",
          icon: "/images/icons/bed.webp",
        },
        {
          name: "Common Bathrooms",
          icon: "/images/icons/washroom.webp",
        },
        {
          name: " Occupancy - 2-3",
          icon: "/images/icons/person.webp",
        },
      ],
      images: [
        "/images/camping_tents.webp",
        "/images/camping_tents1.webp",
        "/images/camping_tents2.webp",
      ],
      time: "12:30 PM to 11:00 AM",
    },
  ];
  return (
    <div className="mt-8 w-11/12 mx-auto">
      <CommonHeading
        heading={"Welcome to The Starry Nights"}
        intro={
          "The Starry Nights, one of the top day outing resorts in Bangalore"
        }
      />

      <div className="pt-12">
        {packages.map((item, serial) => (
          <StayCard item={item} key={item.heading} serial={serial} />
        ))}
      </div>
    </div>
  );
}

export default StayPackages;
