const blogs = [
  {
    slug: "getaway-near-bangalore",
    titleTag: "Peaceful Getaway Near Bangalore | Nature Escapes",
    metaDescription:
      "Explore serene getaways near Bangalore perfect for a tranquil break. Reconnect with nature and relax amidst lush greenery and fresh air",
  },
  {
    slug: "day-outing-near-bangalore",
    titleTag: "Day Outing Near Bangalore | Fun & Relaxation Awaits",
    metaDescription: `Discover exciting day outing spots near Bangalore for fun, food, and relaxation. Ideal for families, friends, and corporate groups.
`,
  },
  {
    slug: "corporate-day-outing-near-bangalore",
    titleTag: "Corporate Day Outing Near Bangalore | Team Building",
    metaDescription: ` Boost employee morale with curated corporate day outings near Bangalore. Engage in team games, activities, and stress-free bonding.`,
  },
  {
    slug: "good-resort-in-bangalore",
    titleTag: "Good Resort in Bangalore | Create Unforgettable Moments",
    metaDescription: `Looking for a good resort in Bangalore? Explore options with top amenities, scenic views, and activities for families, couples, and groups.`,
  },
  {
    slug: "resorts-near-bangalore-for-weekend",
    titleTag: "Weekend Resorts Near Bangalore | Romantic Escapades",
    metaDescription: `Explore handpicked resorts near Bangalore perfect for romantic weekend getaways. Scenic settings and cozy stays await your escape.

`,
  },
  {
    slug: "best-resorts-near-bangalore",
    titleTag: `Best Resorts Near Bangalore | Nature’s Lap Awaits`,
    metaDescription: `Discover the best resorts near Bangalore surrounded by nature. Perfect for families, couples, and groups seeking luxury and peace.

    `,
  },
  {
    slug: "resorts-with-activities-in-bangalore",
    titleTag: `Resorts with Activities in Bangalore | Budget-Friendly Fun
`,
    metaDescription: ` Enjoy activity-packed yet affordable resorts in Bangalore. From games to adventure, find a fun and pocket-friendly escape.
`,
  },
  {
    slug: "pet-friendly-resorts-in-bangalore",
    titleTag:
      "Pet Friendly Resorts in Bangalore | Bring Your Fur Buddy",
    metaDescription: `Enjoy a vacation with your pets! Explore pet-friendly resorts in Bangalore that welcome your furry companions with open arms.`,
  },
  {
    slug: "resort-in-bangalore-for-night-stay",
    titleTag: `Night Stay Resorts in Bangalore | Kitty Party Paradise`,
    metaDescription: `Plan a memorable kitty party at night stay resorts in Bangalore. Perfect for evening fun, dinner, and overnight bond`,
  },
];

// This function dynamically generates metadata for the page
export async function generateMetadata({ params }) {
  const { title } = await params; // Get the dynamic route parameter
  const blog = blogs.find((blog) => blog.slug === title);

  // Use the title or fetch additional data if needed
  return {
    title: blog.titleTag,
    description: blog.metaDescription,
  };
}

function Layout({ children }) {
  return <div>{children}</div>;
}

export default Layout;
