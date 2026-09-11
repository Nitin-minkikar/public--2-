"use client";

import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  const blogs = [
      {
      name: "Escape to Tranquility: Getaway Near Bangalore",
      description: `If you're craving a break from Bangalore’s hustle, a peaceful getaway near Bangalore is your answer. Discover serene landscapes, eco-friendly resorts, and rejuvenating experiences just a few hours away. Whether it's misty mornings, forest trails, or riverside relaxation, these tranquil destinations promise to calm your mind and refresh your soul. Perfect for couples, families, and solo travelers, these spots offer the much-needed escape you deserve.`,
      slug: "getaway-near-bangalore",
      image:
        "/images/blogs/escape-to-tranquility-the-starry-nights-resort-getaway-near-bangalore.webp",
    },
    {
      name: "Unwind and Rejuvenate: Day Outing Near Bangalore",
      description:`A perfect day outing near Bangalore can transform your mundane routine into a joyful memory. Just a short drive away, explore beautiful resorts and adventure parks that offer outdoor games, swimming, meals, and nature trails. Whether you’re planning a family picnic, a quick friends’ hangout, or a romantic escape, these one-day options deliver both relaxation and entertainment in a budget-friendly way.
`,
      slug: "day-outing-near-bangalore",
      image:
        "/images/blogs/unwind-and-rejuvenate-the-starry-nights-resort-day-outing.webp",
    },
    {
      name: "Elevate Your Team Spirit: Corporate Day Outing Near Bangalore",
      description:`Corporate day outings near Bangalore are more than just a break—they're team-building catalysts. With adventure games, collaborative activities, and curated experiences, these getaways help strengthen bonds and recharge team energy. Just a few hours from the city, these venues provide professional setups and fun zones ideal for large groups, startups, and MNCs looking to elevate team morale in a refreshing environment.
`,
      image:
        "/images/blogs/corporate-day-outing-the-starry-nights-resort_sm.webp",
      slug: "corporate-day-outing-near-bangalore",
    },
    {
      name: "Create Unforgettable Moments at a Good Resort in Bangalore",
      image:
        "/images/blogs/create-unforgettable-moments-family-day-outing-at-the-starry-nights-resort.webp",
      description:`Finding a good resort in Bangalore means discovering a blend of luxury, comfort, and nature. From elegant cottages to adventure activities and poolside relaxation, the city and its outskirts are home to a variety of resorts perfect for every mood and occasion. Whether you're celebrating an anniversary, planning a birthday bash, or just need a staycation, these resorts ensure memories that last a lifetime.
`,
      slug: "good-resort-in-bangalore",
    },
    {
      name: "Romantic Escapade: Resorts Near Bangalore for Weekend",
      image:
        "/images/blogs/romantic-getaway-couples-day-out-at-the-starry-nights-resort.webp",
      description:`Rediscover romance with handpicked resorts near Bangalore for the weekend. Nestled amidst hills, lakes, or coffee estates, these romantic stays offer candlelight dinners, private pools, spa sessions, and scenic surroundings. Whether it’s a surprise for your partner or a couple’s retreat, these weekend escapes ensure you fall in love all over again—away from the city chaos and close to nature.
`,
      slug: "resorts-near-bangalore-for-weekend",
    },
{
      slug: "best-resorts-near-bangalore",
      image: "/images/blogs/unwind-in-natures-lap-the-best-resorts-near-bangalore.webp",

      name: "Unwind in Nature’s Lap: Best Resorts Near Bangalore",
      description: `For those who seek the finest stays, the best resorts near Bangalore deliver unmatched comfort, stunning views, and immersive experiences. From luxury villas and infinity pools to treks and bonfires, these resorts cater to all types of travelers. Located within 50–150 km of the city, they’re your ticket to relaxation, adventure, and nature—all in one getaway.
`,},
    {
      slug: "resorts-with-activities-in-bangalore",
      image:
        "/images/blogs/affordable-getaway-budget-friendly-day-out-at-the-starry-nights-resort.webp",
      name: "Affordable Getaway: Resorts with Activities in Bangalore",
      description: `Why settle for just a stay when you can play? Resorts with activities in Bangalore offer everything from ziplining, rain dance, and archery to indoor games and karaoke nights. Ideal for families, friends, and groups looking for a lively day or weekend without overspending, these budget-friendly resorts combine fun, food, and comfort to create the perfect city break.
`
    },
    {
      slug: "pet-friendly-resorts-in-bangalore",
      image:
        "/images/blogs/escape-to-tranquility-the-best-resorts-near-bangalore.webp",
      name: "Pet-Friendly Getaways Near Bangalore",
      description: `Don’t leave your furry friend behind! Pet-friendly resorts in Bangalore offer a warm welcome not just to you but also to your pets. With open lawns, pet play zones, and special menus for your fur babies, these resorts make your getaway truly inclusive. Whether it's a weekend stay or a day visit, these resorts ensure tails wag and memories stay.


`,
    },
    {
      slug: "resort-in-bangalore-for-night-stay",
      image:
        "/images/blogs/discover-the-ultimate-getaway-the-best-resorts-near-bangalore.webp",

      name: "Unforgettable Kitty Party in Bangalore",
      description: `Planning a lively kitty party or a special ladies’ night out? Choose a resort in Bangalore for night stay that offers poolside lounging, DJ nights, buffet dinners, and cozy rooms. Add in karaoke sessions, bonfires, and spa treatments to turn your gathering into an unforgettable overnight celebration. A perfect way to bond, laugh, and indulge—right within city limits.`,
    },
        
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 lg:px-6 py-12 mt-14">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col"
          >
            <Image
              src={blog.image}
              alt={blog.name}
              width={500}
              height={220}
              loading="lazy"
              className="w-full bg-gray-300 h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className=" text-lg lg:text-2xl  leading-6 mb-3 ">
                {blog.name}
              </h2>
              <p className=" font-light leading-6 text-base mb-4 line-clamp-3">
                {blog.description}
              </p>
              <div className="mt-auto text-lg font-anek_bangla">
                <Link
                  href={`/post/${blog.slug}`}
                  className="inline-flex items-center text-[#8D700E] font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
