"use client";
import Form from "@/Components/ReuseComponent/Form";
import { useParams } from "next/navigation";
import React from "react";

const blogs = [
  {
    slug: "getaway-near-bangalore",
    img: "/images/blogs/escape-to-tranquility-the-starry-nights-resort-getaway-near-bangalore.webp",

    content: `<div class="mx-auto ">
          <div>
            <h1 class="text-2xl lg:text-4xl font-medium text-gray-800 mb-6">
          Escape to Tranquility: Getaway Near Bangalore
            </h1>

            <p class="text-gray-600   mb-6">
             If you're craving a break from Bangalore’s hustle, a peaceful getaway near Bangalore is your answer. Discover serene landscapes, eco-friendly resorts, and rejuvenating experiences just a few hours away. Whether it's misty mornings, forest trails, or riverside relaxation, these tranquil destinations promise to calm your mind and refresh your soul. Perfect for couples, families, and solo travelers, these spots offer the much-needed escape you deserve.

            </p>

            <h4 class="text-2xl  text-gray-800 mt-8 mb-4">
              Why Choose The Starry Nights Resort?
            </h4>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">1. A Blend of Luxury and Nature</h5>
            <p class="text-gray-600  mb-6">
              Experience the perfect harmony of comfort and the outdoors at The Starry Nights Resort. Surrounded by lush greenery, this resort provides top-notch accommodations, from cozy cottages to spacious villas, ensuring a stay that suits all preferences.
            </p>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">2. Adventure and Fun for Everyone</h5>
            <p class="text-gray-600  mb-6">
              Looking for some thrill? The resort offers a range of adventure activities such as sky cycling, rope courses, and bonfire nights. For those seeking relaxation, the resort’s tranquil atmosphere, swimming pool, and nature trails are perfect for unwinding.
            </p>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">3. Perfect for Day Outings</h5>
            <p class="text-gray-600  mb-6">
              If you don’t have time for an overnight stay, this resort in Bangalore for a day out is an ideal choice. Enjoy a day filled with fun activities, delicious food, and scenic views without the need for a long vacation.
            </p>

            <h4 class="text-2xl  text-gray-800 mt-8 mb-4">
              An Ideal Location Near Bangalore
            </h4>
            <p class="text-gray-600  mb-6">
              Located just a short drive away, The Starry Nights Resort is one of the best resorts from Bangalore that offers a seamless getaway experience. Whether you are looking for resorts at Bangalore for a family get-together or planning a team outing, this place has something for everyone.
            </p>

            <h4 class="text-2xl  text-gray-800 mt-8 mb-4">
              Plan Your Visit Today!
            </h4>
            <p class="text-gray-600  mb-6">
              With its blend of adventure, relaxation, and nature, The Starry Nights Resort stands out as one of the finest day outing resorts in Bangalore. Book your stay now and experience the magic of a perfect escape!
            </p>

            <p class="text-gray-600  mb-6">
              For more details and bookings, visit:
              <a href="https://www.thestarrynights.in" class="text-blue-500 hover:underline">
                www.thestarrynights.in
              </a>
            </p>
          </div>
        </div>`,
  },
  {
    slug: "day-outing-near-bangalore",
    img: "/images/blogs/unwind-and-rejuvenate-the-starry-nights-resort-day-outing.webp",

    content: `  <div class="mx-auto ">
        <div>
          <h1 class="text-2xl lg:text-4xl font-medium text-gray-800 mb-6">
           Unwind and Rejuvenate: Day Outing Near Bangalore

          </h1>

          <p class="text-gray-600 mb-6">
          A perfect day outing near Bangalore can transform your mundane routine into a joyful memory. Just a short drive away, explore beautiful resorts and adventure parks that offer outdoor games, swimming, meals, and nature trails. Whether you’re planning a family picnic, a quick friends’ hangout, or a romantic escape, these one-day options deliver both relaxation and entertainment in a budget-friendly way.

          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Why Choose The Starry Nights Resort for a Day Outing?
          </h4>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">1. Thrilling Adventure Activities</h5>
          <p class="text-gray-600 mb-6">
            Get your adrenaline pumping with exciting activities such as zip-lining, sky cycling, mud volleyball, and rope courses. Whether you’re an adventure enthusiast or just looking to try something new, this resort near Bangalore offers an array of thrilling experiences.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">2. Relax and Unwind in Nature</h5>
          <p class="text-gray-600 mb-6">
            Escape the city’s chaos and immerse yourself in the lush greenery of the resort. Take a dip in the swimming pool, enjoy a peaceful nature walk, or simply lounge by the scenic landscapes.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">3. Ideal for Corporate and Family Outings</h5>
          <p class="text-gray-600 mb-6">
            From corporate team-building activities to family picnics, The Starry Nights Resort is the ultimate venue for group outings. With spacious outdoor spaces, comfortable seating, and delicious dining options, it ensures a delightful experience for all.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">4. Delectable Culinary Delights</h5>
          <p class="text-gray-600 mb-6">
            Indulge in a variety of delicious meals with buffet options that cater to all tastes. Enjoy traditional and contemporary flavors, perfectly complementing your fun-filled day.
          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Easy Accessibility & Seamless Experience
          </h4>
          <p class="text-gray-600 mb-6">
            Located conveniently, this resort in Bangalore for a day out is easily accessible, making it a hassle-free destination for your weekend retreat.
          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Book Your Perfect Day Out Now!
          </h4>
          <p class="text-gray-600 mb-6">
            Whether you’re seeking adventure, relaxation, or a mix of both, The Starry Nights Resort is the ideal choice among day outing resorts in Bangalore. Plan your visit today and create unforgettable memories!
          </p>

          <p class="text-gray-600 mb-6">
            For bookings and more details, visit:
            <a href="https://www.thestarrynights.in" class="text-blue-500 hover:underline">
              www.thestarrynights.in
            </a>
          </p>
        </div>
      </div>`,
  },

  {
    slug: "corporate-day-outing-near-bangalore",
    img: "/images/blogs/corporate-day-outing-the-starry-nights-resort.webp",

    content: `  <div class="mx-auto ">
        <div>
          <h1 class="text-2xl lg:text-4xl font-medium text-gray-800 mb-6">
            Elevate Your Team Spirit: Corporate Day Outing Near Bangalore

          </h1>

          <p class="text-gray-600 mb-6">
    Corporate day outings near Bangalore are more than just a break—they're team-building catalysts. With adventure games, collaborative activities, and curated experiences, these getaways help strengthen bonds and recharge team energy. Just a few hours from the city, these venues provide professional setups and fun zones ideal for large groups, startups, and MNCs looking to elevate team morale in a refreshing environment.

          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Why Choose The Starry Nights Resort for Your Corporate Outing?
          </h4>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">1. Team-Building Activities & Adventure Sports</h5>
          <p class="text-gray-600 mb-6">
            Strengthen team connections with a variety of engaging activities such as obstacle courses, zip-lining, and sky cycling. Designed to promote collaboration and teamwork, these experiences make for an unforgettable corporate retreat.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">2. Scenic and Relaxing Environment</h5>
          <p class="text-gray-600 mb-6">
            Surrounded by lush greenery, this resort in Bangalore for a day out provides the perfect escape from the hectic work routine. Unwind by the pool, take a relaxing nature walk, or enjoy the peaceful surroundings.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">3. Spacious Conference & Event Facilities</h5>
          <p class="text-gray-600 mb-6">
            Need to mix work with leisure? The resort offers well-equipped conference halls and outdoor seating arrangements, making it an excellent venue for meetings, workshops, and corporate training sessions.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">4. Delicious Cuisine & Refreshments</h5>
          <p class="text-gray-600 mb-6">
            Energize your team with a delectable buffet spread featuring a mix of local and international dishes. Enjoy a delightful dining experience while networking and bonding over great food.
          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Easily Accessible from Bangalore
          </h4>
          <p class="text-gray-600 mb-6">
            Conveniently located, The Starry Nights Resort is one of the best resorts in Bangalore for corporate events and outings. With seamless arrangements and top-notch hospitality, your team is guaranteed a refreshing break from the work grind.
          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Book Your Corporate Day Outing Today!
          </h4>
          <p class="text-gray-600 mb-6">
            Whether it’s team-building activities, relaxation, or a combination of both, The Starry Nights Resort stands out as one of the best day outing resorts in Bangalore for corporate groups. Plan your corporate retreat today and foster stronger connections with your team!
          </p>

          <p class="text-gray-600 mb-6">
            For bookings and inquiries, visit:
            <a href="https://www.thestarrynights.in" class="text-blue-500 hover:underline">
              www.thestarrynights.in
            </a>
          </p>
        </div>
      </div>`,
  },
  {
    slug: "good-resort-in-bangalore",
    img: "/images/blogs/create-unforgettable-moments-family-day-outing-at-the-starry-nights-resort.webp",

    content: `  <div class="mx-auto ">
        <div>
          <h1 class="text-2xl lg:text-4xl font-medium text-gray-800 mb-6">
  Create Unforgettable Moments at a Good Resort in Bangalore

          </h1>

          <p class="text-gray-600 mb-6">
Finding a good resort in Bangalore means discovering a blend of luxury, comfort, and nature. From elegant cottages to adventure activities and poolside relaxation, the city and its outskirts are home to a variety of resorts perfect for every mood and occasion. Whether you're celebrating an anniversary, planning a birthday bash, or just need a staycation, these resorts ensure memories that last a lifetime.
          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Why Choose The Starry Nights Resort for Your Family Outing?
          </h4>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">1. Exciting Activities for All Ages</h5>
          <p class="text-gray-600 mb-6">
            From kids to grandparents, everyone can find something enjoyable! Engage in thrilling activities like zip-lining and nature walks, or simply relax by the scenic poolside.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">2. Relaxing and Scenic Surroundings</h5>
          <p class="text-gray-600 mb-6">
            Escape the city’s chaos and enjoy the lush greenery and peaceful ambiance of this resort in Bangalore for a day out. It’s the perfect place to unwind and create beautiful family memories.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">3. Spacious Play & Picnic Areas</h5>
          <p class="text-gray-600 mb-6">
            The resort features well-maintained lawns and play areas where kids can have fun while parents relax. Enjoy games, storytelling sessions, and bonding time in a stress-free environment.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">4. Delicious Multi-Cuisine Buffet</h5>
          <p class="text-gray-600 mb-6">
            Savor a delightful buffet spread that includes a variety of mouth-watering dishes catering to all taste preferences. From traditional flavors to contemporary favorites, there’s something for everyone!
          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Conveniently Located Near Bangalore
          </h4>
          <p class="text-gray-600 mb-6">
            Easily accessible from the city, The Starry Nights Resort is among the best resorts in Bangalore for family getaways. With top-notch facilities and excellent hospitality, it guarantees a hassle-free outing.
          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Plan Your Family Day Outing Today!
          </h4>
          <p class="text-gray-600 mb-6">
            Whether it’s an adventure-packed day or a relaxing retreat, The Starry Nights Resort is one of the top day outing resorts in Bangalore for families. Book your visit now and make beautiful memories with your loved ones!
          </p>

          <p class="text-gray-600 mb-6">
            For bookings and inquiries, visit:
            <a href="https://www.thestarrynights.in" class="text-blue-500 hover:underline">
              www.thestarrynights.in
            </a>
          </p>
        </div>
      </div>`,
  },

    {
    slug: "resorts-near-bangalore-for-weekend",
    img: "/images/blogs/romantic-getaway-couples-day-out-at-the-starry-nights-resort_lg.webp",

    content: `  <div class="mx-auto ">
          <div>
            <h1 class="text-2xl lg:text-4xl font-medium text-gray-800 mb-6">
        Romantic Escapade: Resorts Near Bangalore for Weekend

            </h1>

            <p class="text-gray-600 mb-6">
Rediscover romance with handpicked resorts near Bangalore for the weekend. Nestled amidst hills, lakes, or coffee estates, these romantic stays offer candlelight dinners, private pools, spa sessions, and scenic surroundings. Whether it’s a surprise for your partner or a couple’s retreat, these weekend escapes ensure you fall in love all over again—away from the city chaos and close to nature.

            </p>

            <h4 class="text-2xl text-gray-800 mt-8 mb-4">
              Why Choose The Starry Nights Resort for Your Couples' Day Out?
            </h4>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">1. Romantic and Private Ambiance</h5>
            <p class="text-gray-600 mb-6">
              Enjoy a peaceful retreat away from the city's hustle. The resort’s lush greenery, serene water features, and cozy settings make it the ideal place to unwind and connect with your partner.
            </p>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">2. Fun and Engaging Activities</h5>
            <p class="text-gray-600 mb-6">
              Indulge in exciting activities together like cycling, nature walks, and adventure sports. For those who prefer a relaxed experience, enjoy a private bonfire or a candlelit setup by the poolside.
            </p>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">3. Relaxing Spa & Wellness Options</h5>
            <p class="text-gray-600 mb-6">
              Pamper yourselves with a rejuvenating couple’s spa session. The tranquil ambiance combined with expert therapies ensures a refreshing experience.
            </p>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">4. Exquisite Dining Experience</h5>
            <p class="text-gray-600 mb-6">
              Savor a delightful meal with a specially curated menu featuring gourmet delicacies. Enjoy a romantic dining setup with breathtaking views, making your outing truly special.
            </p>

            <h4 class="text-2xl text-gray-800 mt-8 mb-4">
              Conveniently Located Near Bangalore
            </h4>
            <p class="text-gray-600 mb-6">
              Easily accessible from the city, The Starry Nights Resort is among the best resorts in Bangalore for couples looking for a quick romantic getaway. With top-notch facilities and excellent hospitality, it promises an unforgettable experience.
            </p>

            <h4 class="text-2xl text-gray-800 mt-8 mb-4">
              Plan Your Romantic Getaway Today!
            </h4>
            <p class="text-gray-600 mb-6">
              Whether you’re celebrating an anniversary, a special occasion, or simply seeking a peaceful retreat, The Starry Nights Resort is one of the top day outing resorts in Bangalore for couples. Book your romantic escape now and make beautiful memories together!
            </p>

            <p class="text-gray-600 mb-6">
              For bookings and inquiries, visit:
              <a href="https://www.thestarrynights.in" class="text-blue-500 hover:underline">
                www.thestarrynights.in
              </a>
            </p>
          </div>
        </div>`,
  },
   {
    slug: "best-resorts-near-bangalore",
    img: "/images/blogs/unwind-in-natures-lap-the-best-resorts-near-bangalore.webp",

    content: `  <div class="mx-auto ">
        <div>
          <h1 class="text-2xl lg:text-4xl font-medium text-gray-800 mb-6">
   Unwind in Nature’s Lap: Best Resorts Near Bangalore

          </h1>

          <p class="text-gray-600   mb-6">
For those who seek the finest stays, the best resorts near Bangalore deliver unmatched comfort, stunning views, and immersive experiences. From luxury villas and infinity pools to treks and bonfires, these resorts cater to all types of travelers. Located within 50–150 km of the city, they’re your ticket to relaxation, adventure, and nature—all in one getaway.
          </p>

          <h4 class="text-2xl  text-gray-800 mt-8 mb-4">
            Why Choose The Starry Nights Resort?
          </h4>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">1. Prime Location for a Quick Getaway</h5>
          <p class="text-gray-600  mb-6">
            If you are searching for resorts from Bangalore, resorts at Bangalore, in Bangalore resorts, or a resort at Bangalore, our easily accessible location makes us the perfect pick. Located close to the city yet surrounded by nature, we provide the perfect escape from the urban grind.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">2. Experience the Best of Comfort & Adventure</h5>
          <p class="text-gray-600  mb-6">
            From serene relaxation to adrenaline-pumping activities, we cater to all travelers. Whether you’re looking for resorts near by Bangalore or a resort near Bangalore for day outing, we offer a mix of both leisure and adventure.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">3. Perfect for Families, Couples & Corporate Teams</h5>
          <p class="text-gray-600  mb-6">
            Looking for Bangalore resorts for family or resorts near me for couples? Whether it’s a special occasion or a weekend escape, we have curated experiences to make your stay memorable. Corporate teams can also enjoy engaging team-building activities at our resort with activities in Bangalore.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">4. Day Outing & Night Stay Options</h5>
          <p class="text-gray-600  mb-6">
            Choose between an exciting one-day resort in Bangalore experience or an extended stay at our night stay resort in Bangalore. Enjoy the best of both worlds with thrilling activities by day and stargazing by night.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">5. Nearby Locations for a Hassle-Free Retreat</h5>
          <p class="text-gray-600  mb-6">
            We are conveniently located for travelers seeking a resort in Nelamangala, resort near Nelamangala, or a resort in Tumkur. Whether you need an adventure resort in Bangalore or a peaceful nature retreat, we have the perfect package for you.
          </p>

          <h4 class="text-2xl  text-gray-800 mt-8 mb-4">
            Book Your Perfect Getaway Today!
          </h4>
          <p class="text-gray-600  mb-6">
            Discover the charm of The Starry Nights Resort, one of the Bangalore best resorts, where nature meets luxury. Whether it's a quick weekend getaway or a full-fledged holiday, we ensure an experience like no other.
          </p>

          <p class="text-gray-600  mb-6">
            Visit <a href="https://www.thestarrynights.in/" class="text-blue-500 hover:underline">
              www.thestarrynights.in/
            </a> now and plan your dream escape!
          </p>
        </div>
      </div>`,
  },

    {
    slug: "resorts-with-activities-in-bangalore",
    img: "/images/blogs/affordable-getaway-budget-friendly-day-out-at-the-starry-nights-resort.webp",

    content: `  <div class="mx-auto ">
          <div>
            <h1 class="text-2xl lg:text-4xl font-medium text-gray-800 mb-6">
Affordable Getaway: Resorts with Activities in Bangalore




            </h1>

            <p class="text-gray-600 mb-6">
Why settle for just a stay when you can play? Resorts with activities in Bangalore offer everything from ziplining, rain dance, and archery to indoor games and karaoke nights. Ideal for families, friends, and groups looking for a lively day or weekend without overspending, these budget-friendly resorts combine fun, food, and comfort to create the perfect city break.
            </p>

            <h4 class="text-2xl text-gray-800 mt-8 mb-4">
              Why Choose The Starry Nights Resort for a Budget-Friendly Day Out?
            </h4>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">1. Affordable Packages Without Compromising on Fun</h5>
            <p class="text-gray-600 mb-6">
              Enjoy an exciting day filled with adventure, relaxation, and entertainment—all at an unbeatable price! Whether you're coming with family, friends, or as a couple, our cost-effective packages cater to all.
            </p>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">2. Exciting Activities for All</h5>
            <p class="text-gray-600 mb-6">
              From nature walks and outdoor games to adventure sports and bonfire nights, there’s something for everyone to enjoy. Experience fun-filled moments without overspending.
            </p>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">3. Scenic and Peaceful Ambiance</h5>
            <p class="text-gray-600 mb-6">
              Escape the city's chaos without traveling far. The lush greenery and serene surroundings of this resort near to Bangalore offer a refreshing break at a fraction of the cost of high-end resorts.
            </p>

            <h5 class="text-xl text-gray-700 mt-6 mb-3">4. Delicious Yet Budget-Friendly Dining</h5>
            <p class="text-gray-600 mb-6">
              Relish a variety of delectable dishes that suit all taste buds. The resort offers budget-friendly meal options that ensure a satisfying dining experience.
            </p>

            <h4 class="text-2xl text-gray-800 mt-8 mb-4">
              Conveniently Located Near Bangalore
            </h4>
            <p class="text-gray-600 mb-6">
              Easily accessible from the city, The Starry Nights Resort is one of the best budget resorts in Bangalore for those looking for an affordable yet fulfilling getaway.
            </p>

            <h4 class="text-2xl text-gray-800 mt-8 mb-4">
              Plan Your Budget-Friendly Day Out Today!
            </h4>
            <p class="text-gray-600 mb-6">
              Whether you're planning a family outing, a corporate retreat, or a romantic getaway, The Starry Nights Resort is among the top day outing resorts in Bangalore that offer great value for money. Book now and enjoy an unforgettable experience without stretching your budget!
            </p>

            <p class="text-gray-600 mb-6">
              For bookings and inquiries, visit:
              <a href="https://www.thestarrynights.in/" class="text-blue-500 hover:underline">
                www.thestarrynights.in
              </a>
            </p>
          </div>
        </div>`,
  },
  {
    slug: "pet-friendly-resorts-in-bangalore",
    img: "/images/blogs/escape-to-tranquility-the-best-resorts-near-bangalore.webp",

    content: `  <div class=\"mx-auto \">
        <div>
          <h1 class=\"text-2xl lg:text-4xl font-medium text-gray-800 mb-6\">
     Pet-Friendly Getaways Near Bangalore

          </h1>

          <p class=\"text-gray-600   mb-6\">
Don’t leave your furry friend behind! Pet-friendly resorts in Bangalore offer a warm welcome not just to you but also to your pets. With open lawns, pet play zones, and special menus for your fur babies, these resorts make your getaway truly inclusive. Whether it's a weekend stay or a day visit, these resorts ensure tails wag and memories stay.
          </p>

          <h4 class=\"text-2xl  text-gray-800 mt-8 mb-4\">
            Why Choose The Starry Nights Resort?
          </h4>

          <h5 class=\"text-xl text-gray-700 mt-6 mb-3\">1. Ideal Location for Easy Accessibility</h5>
          <p class=\"text-gray-600  mb-6\">
            Conveniently situated, our resort is perfect for those searching for resorts from Bangalore, resorts at Bangalore, in Bangalore resorts, or resort at Bangalore. Whether you're in the city or nearby, reaching us is hassle-free, making it one of the most sought-after resorts near by Bangalore.
          </p>

          <h5 class=\"text-xl text-gray-700 mt-6 mb-3\">2. Perfect for All Types of Travelers</h5>
          <p class=\"text-gray-600  mb-6\">
            Whether you’re looking for Bangalore resorts for family, resorts near me for couples, or adventure resorts in Bangalore, we cater to everyone. Spend quality time with loved ones, indulge in thrilling activities, or unwind with a romantic getaway.
          </p>

          <h5 class=\"text-xl text-gray-700 mt-6 mb-3\">3. Thrilling Activities & Serene Retreats</h5>
          <p class=\"text-gray-600  mb-6\">
            As a leading resort with activities in Bangalore, we offer adventure sports, nature trails, and fun-filled games to make your visit unforgettable. Experience the perfect mix of relaxation and excitement at our one-day resorts in Bangalore.
          </p>

          <h5 class=\"text-xl text-gray-700 mt-6 mb-3\">4. Great Options for Day & Night Stays</h5>
          <p class=\"text-gray-600  mb-6\">
            Whether you’re planning a resort near Bangalore for day outing or seeking a night stay resort in Bangalore, The Starry Nights Resort provides flexible packages to suit your needs. From daytime adventures to cozy overnight stays, we ensure a rejuvenating experience.
          </p>

          <h5 class=\"text-xl text-gray-700 mt-6 mb-3\">5. Nearby Locations for Easy Getaways</h5>
          <p class=\"text-gray-600  mb-6\">
            For those looking beyond Bangalore, we are also a resort in Nelamangala, resort near Nelamangala, and resort in Tumkur, providing an ideal escape for travelers searching for resorts near by Bangalore or near Bangalore resorts.
          </p>

          <h4 class=\"text-2xl  text-gray-800 mt-8 mb-4\">
            Book Your Perfect Retreat Today!
          </h4>
          <p class=\"text-gray-600  mb-6\">
            Escape the routine and create lasting memories at The Starry Nights Resort, one of the Bangalore best resorts. Whether you're planning a family outing, a romantic retreat, or an adventure-packed getaway, we promise a memorable experience.
          </p>

          <p class=\"text-gray-600  mb-6\">
            Visit
            <a href=\"https://www.thestarrynights.in\" class=\"text-blue-500 hover:underline\">
              www.thestarrynights.in
            </a>
            to book your dream getaway now!
          </p>
        </div>
      </div>`,
  },
  {
    slug: "resort-in-bangalore-for-night-stay",
    img: "/images/blogs/discover-the-ultimate-getaway-the-best-resorts-near-bangalore.webp",

    content: `  <div class="mx-auto ">
        <div>
          <h1 class="text-2xl lg:text-4xl font-medium text-gray-800 mb-6">
          Unforgettable Kitty Party in Bangalore

          </h1>

          <p class="text-gray-600 mb-6">
Planning a lively kitty party or a special ladies’ night out? Choose a resort in Bangalore for night stay that offers poolside lounging, DJ nights, buffet dinners, and cozy rooms. Add in karaoke sessions, bonfires, and spa treatments to turn your gathering into an unforgettable overnight celebration. A perfect way to bond, laugh, and indulge—right within city limits.          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Why Choose The Starry Nights Resort?
          </h4>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">1. Perfect Location for a Quick Escape</h5>
          <p class="text-gray-600 mb-6">
            Strategically located, our resort is a top pick for those searching for resorts from Bangalore, resorts at Bangalore, in Bangalore resorts, and resort at Bangalore. If you're looking for resorts near by Bangalore or a resort near by Bangalore, we are just a short drive away.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">2. Tailored Experiences for Every Traveler</h5>
          <p class="text-gray-600 mb-6">
            From Bangalore resorts for family to resorts near me for couples, we cater to all kinds of travelers. Whether it’s a family day out, a corporate retreat, or a romantic escape, we have something special for everyone.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">3. Adventure & Activities Galore</h5>
          <p class="text-gray-600 mb-6">
            As one of the leading adventure resorts in Bangalore, we offer a range of thrilling activities including trekking, zip-lining, and water sports. If you’re looking for a resort with activities in Bangalore, your search ends here.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">4. Day & Night Stay Packages</h5>
          <p class="text-gray-600 mb-6">
            Whether you need a resort near Bangalore for day outing or a cozy night stay resort in Bangalore, we provide flexible packages that suit your needs. Enjoy a thrilling day filled with activities or stay overnight to experience the serene ambiance under a starlit sky.
          </p>

          <h5 class="text-xl text-gray-700 mt-6 mb-3">5. Conveniently Located for Weekend Getaways</h5>
          <p class="text-gray-600 mb-6">
            For those looking to escape Bangalore, we are also a resort in Nelamangala, resort near Nelamangala, and resort in Tumkur, making us an accessible retreat for short getaways and adventure lovers.
          </p>

          <h4 class="text-2xl text-gray-800 mt-8 mb-4">
            Plan Your Dream Getaway Today!
          </h4>
          <p class="text-gray-600 mb-6">
            Escape to The Starry Nights Resort, one of the Bangalore best resorts, and indulge in an unforgettable experience. Whether it’s an adventure-packed day or a peaceful retreat, we’ve got it all covered.
          </p>

          <p class="text-gray-600 mb-6">
            Book now at 
            <a href="https://www.thestarrynights.in" class="text-blue-500 hover:underline">
              www.thestarrynights.in
            </a> 
            and make memories that last a lifetime!
          </p>
        </div>
      </div>`,
  },
 
];

function page(props) {
  const { title } = useParams();

  const blog = blogs.find((blog) => blog.slug === title);

  if (!blog) {
    return (
      <div className="pt-[200px] text-primary text-center text-4xl  min-h-[50vh]">
        (404) Blog Not Found
      </div>
    );
  }

  return (
    <div class="mt-[70px]">
      <img
        src={blog.img}
        alt="Blog thumbnail"
        loading="lazy"
        class="w-full h-[200px] bg-gray-300 lg:h-[500px] object-cover"
      />
      <div className="w-11/12 lg:flex justify-between mx-auto mt-8">
        <section class="lg:basis-[65%] p-4 lg:p-8 bg-white shadow-lg rounded-lg overflow-hidden  text-lg">
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
          {/* <div class="mt-8 font-anek_bangla">
            <Link
              href="/resorts-at-bangalore"
              class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              BOOK YOUR VACATION NOW
            </Link>
          </div> */}
        </section>

        <div className="lg:basis-[32%] lg:pl-6 lg:sticky top-10 h-full border bg-white rounded-lg px-4 py-6 mt-8 lg:mt-0">
          {/* <h1 className="text-3xl font-bold mb-4 text-primary"> CONTACT US</h1> */}
          <Form label_bg="white" />
        </div>
      </div>
    </div>
  );
}

export default page;
