import React, { useState } from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import { v4 as uuidv4 } from "uuid";
const Faq = () => {
  const [showQuestion, setShowQuestion] = useState(5);
  const questions = [
    {
      question: "How do I reach The Starry Nights Resort?",
      answer: `<p>The Starry Nights Resort is just 28 km from Bangalore, easily accessible from Magadi Road and Tumkur Road. The resort is near Nelamangala and Peenya Industrial Area.</p>`,
    },
    {
      question:
        "What are the adventure activities available at The Starry Nights?",
      answer: `<p>At The Starry Nights, you can enjoy a range of thrilling adventure activities, including:</p>
      <ul class='list-disc pl-5 pt-3 pb-2'>
        <li>Ziplining 🕹️</li>
        <li>Sky cycling 🚲</li>
        <li>Wall climbing 🧗</li>
        <li>Low rope course</li>
        <li>Archery 🎯</li>
        <li>ATV rides (paid activity)</li>
      </ul>
      <p>These activities make The Starry Nights one of the top adventure resorts near Bangalore, ideal for adrenaline junkies and adventure seekers.</p>`,
    },
    {
      question: "Are all the adventure activities complimentary?",
      answer: `<p>Most of the adventure activities at The Starry Nights are complimentary with your stay or day outing package. This includes ziplining, sky cycling, wall climbing, and the low rope course. However, some activities like the ATV ride are available at an additional cost.</p>`,
    },
    {
      question: "What are the adventure activities available for kids?",
      answer: `<p>The Starry Nights offers several fun and safe adventure activities for kids, including:</p>
      <ul class='list-disc pl-5 pt-3 pb-2'>
        <li>Low rope course</li>
        <li>Pool</li>
        <li>Archery 🎯</li>
        <li>Indoor games like carrom, chess, and table tennis 🏓</li>
      </ul>
      <p>These activities ensure that kids have a fun-filled and adventurous time during their stay.</p>`,
    },
    {
      question: "What are the things to carry while coming for a day outing?",
      answer: `<p>For a comfortable and enjoyable day outing at The Starry Nights, we recommend carrying the following items:</p>
      <ul class='list-disc pl-5 pt-3 pb-2'>
        <li>Comfortable clothing and footwear suitable for adventure activities</li>
        <li>Swimwear for the swimming pool 🏊‍♂️ and rain dance 💃</li>
        <li>A hat, sunscreen, and sunglasses for protection from the sun</li>
        <li>A towel and personal toiletries</li>
        <li>A camera or smartphone to capture memorable moments</li>
      </ul>
      <p>These essentials will help you fully enjoy your adventure day outing near Bangalore at The Starry Nights.</p>`,
    },
    {
      question: "What kind of food is expected at The Starry Nights Resort?",
      answer: `<p>We have a wide spread buffet with a combination of South Indian, North Indian, Chinese, and Continental cuisines.</p>
      <p>🍴 <strong>Food Menu:</strong></p>
      <p><strong>Breakfast:</strong> Idli, vada, karabath, kesaribath, sambhar, chutney, bread-jam, boiled eggs, and coffee/tea ☕.</p>
      <p><strong>Lunch & Dinner:</strong></p>
      <p><strong>Veg:</strong> Soup 🥣, salad 🥗, Indian bread 🥖, veg starters, curry 🍛, flavored rice, rasam 🍲, and dessert 🍨.</p>
      <p><strong>Non-Veg:</strong> Starters 🍗, egg gravy 🥚, biryani 🍛, chicken curry 🍗.</p>`,
    },
    {
      question: "Do you have a swimming pool at The Starry Nights Resort?",
      answer: `<p>Yes, The Starry Nights is one of the best resorts with a swimming pool in Bangalore, perfect for relaxation during your stay.</p>`,
    },
    {
      question: "What activities are available at The Starry Nights Resort?",
      answer: `<p>The Starry Nights offers a wide range of adventure activities, including ziplining, sky cycling, ATV rides, and team-building activities, making it one of the top adventure resorts in Bangalore.</p>`,
    },
    {
      question:
        "Is The Starry Nights Resort good for a family day outing in Bangalore?",
      answer: `<p>Absolutely! The Starry Nights is one of the best family-friendly resorts in Bangalore, offering activities like camping, swimming, and adventure sports.</p>`,
    },
    {
      question:
        "Are there any adventure day outing packages at The Starry Nights?",
      answer: `<p>Yes, The Starry Nights offers exciting adventure day outing packages, making it a popular choice for adventure day outings near Bangalore.</p>`,
    },
    {
      question: "Can we camp at The Starry Nights near Bangalore?",
      answer: `<p>Yes, The Starry Nights provides adventure camping near Bangalore with options like tents, bonfires, and adventure activities like rope courses.</p>`,
    },
    {
      question:
        "Is The Starry Nights Resort suitable for corporate team outings?",
      answer: `<p>Yes, The Starry Nights is one of the best resorts for corporate team outings in Bangalore, offering team-building activities and corporate event spaces.</p>`,
    },
    {
      question: "Are there weekend getaway packages at The Starry Nights?",
      answer: `<p>Yes, The Starry Nights is a top weekend resort near Bangalore offering weekend getaway packages for families and corporate groups.</p>`,
    },
    {
      question: "What food options are available at The Starry Nights Resort?",
      answer: `<p>The Starry Nights offers a delicious spread of both vegetarian and non-vegetarian meals, including local delicacies for breakfast, lunch, and dinner.</p>`,
    },
    {
      question: "Is The Starry Nights an eco-friendly resort near Bangalore?",
      answer: `<p>Yes, The Starry Nights is an eco-friendly resort near Bangalore, designed to offer nature-friendly accommodations and activities.</p>`,
    },
    {
      question:
        "What’s the best time to visit The Starry Nights Resort near Magadi Road?",
      answer: `<p>The Starry Nights is open year-round, but the best time to visit is during the cooler months from October to February for outdoor activities.</p>`,
    },
    {
      question: "Do you offer corporate event spaces at The Starry Nights?",
      answer: `<p>Yes, The Starry Nights is a popular resort for corporate events in Bangalore, with spacious event areas and a variety of adventure activities for team building.</p>`,
    },
    {
      question:
        "What are the accommodation options at The Starry Nights Resort?",
      answer: `<p>The Starry Nights offers a range of accommodation options, including AC and non-AC rooms, family rooms, and camping tents, making it one of the best resorts for night stays near Bangalore.</p>`,
    },
    {
      question:
        "Are there outdoor and indoor activities at The Starry Nights Resort?",
      answer: `<p>Yes, The Starry Nights offers both outdoor and indoor activities, such as swimming, ziplining, table tennis, chess, and more.</p>`,
    },
    {
      question:
        "Is The Starry Nights a good resort for couples near Bangalore?",
      answer: `<p>Yes, couples can enjoy a romantic getaway at The Starry Nights, one of the best resorts for couples near Bangalore with cozy accommodations and outdoor activities.</p>`,
    },
    {
      question: "Do you offer adventure camps near Bangalore?",
      answer: `<p>Yes, The Starry Nights offers thrilling adventure camps near Bangalore with activities like ziplining, sky cycling, and wall climbing.</p>`,
    },
    {
      question: "Is The Starry Nights a luxury resort in Nelamangala?",
      answer: `<p>Yes, The Starry Nights offers luxury accommodation and facilities, making it one of the best resorts near Nelamangala for a comfortable and adventurous stay.</p>`,
    },
    {
      question: "Do you offer family day outing packages at The Starry Nights?",
      answer: `<p>Yes, The Starry Nights provides family day outing packages with activities like swimming, camping, and adventure sports, ideal for a fun-filled day near Bangalore.</p>`,
    },
    {
      question: "Are there affordable resorts with activities in Bangalore?",
      answer: `<p>Yes, The Starry Nights is an affordable resort with a wide range of activities, from swimming and bonfires to adventure sports, making it a popular choice for day outings.</p>`,
    },
    {
      question: "Can we host corporate retreats at The Starry Nights Resort?",
      answer: `<p>Yes, The Starry Nights is perfect for corporate retreats in Bangalore, offering team-building exercises, adventure activities, and event spaces.</p>`,
    },
    {
      question:
        "Do you have facilities for large family gatherings at The Starry Nights?",
      answer: `<p>Yes, The Starry Nights can accommodate large family gatherings with spacious rooms and group activities, making it an ideal resort for family outings near Bangalore.</p>`,
    },
    {
      question: "What adventure activities are at The Starry Nights Resort?",
      answer: `<p>Adventure enthusiasts can enjoy activities like ziplining, wall climbing, sky cycling, and ATV rides at The Starry Nights, making it one of the best adventure resorts in Bangalore.</p>`,
    },
    {
      question:
        "Do you offer weekend packages for families at The Starry Nights?",
      answer: `<p>Yes, The Starry Nights offers family-friendly weekend packages with accommodations, meals, and access to adventure activities.</p>`,
    },

    {
      question: "What are the best farm houses in Bangalore for a peaceful getaway?",
      answer: `<p>At Starry Nights, we offer two of the most serene farm houses in Bangalore – Courtyard Grove and Peacock Point. With mango plantations, green courtyards, and bird-filled mornings, it’s the perfect nature escape from the city.</p>`,
    },
    {
      question: "Do you offer a farm stay near Bangalore with event space?",
      answer: `<p>Yes! Peacock Point Farm House is a beautiful farm stay near Bangalore with 5 rooms, a cozy lounge, and a rooftop party area that’s ideal for birthdays, get-togethers, and small events under the stars.</p>`,
    },
    {
      question: "Which is the best farm house Bangalore for families and groups?",
      answer: `<p>Courtyard Grove is a peaceful farm house Bangalore option with 8 A/C rooms built around a lush green lawn. Families and groups love the inward-facing layout, outdoor sit-outs, and tranquil surroundings.</p>`,
    },
    {
      question: "Do you offer a farmhouse near Bangalore for stay with nature-based activities?",
      answer: `<p>Absolutely! Our farmhouse near Bangalore for stay offers nature walks, birdwatching, plantation visits, and outdoor lounging under mango trees and sandalwood groves. Wake up to the chirping of birds and peacocks each morning.</p>`,
    },
    {
      question: "Can I book a farm house in Bangalore for day outings?",
      answer: `<p>Yes, we offer farm house in Bangalore for day outing packages with access to the green lawn, sit-out areas, and nature trails. Perfect for families, corporate teams, or small celebrations without an overnight stay.</p>`,
    },
    {
      question: "How much does a farm house rent in Bangalore typically cost?",
      answer: `<p>Our farm house rent Bangalore options start at affordable rates based on group size and requirements. Day outing, overnight stay, and event packages are available with flexible pricing.</p>`,
    },
    {
      question: "Is your farm house stay near Bangalore pet-friendly?",
      answer: `<p>Yes! We welcome furry friends. Our pet friendly farm stay near Bangalore lets you and your pets enjoy open green spaces, nature trails, and fresh air away from the city bustle.</p>`,
    },
    {
      question: "Do you offer a farm stay near Nandi Hills?",
      answer: `<p>While we are not located exactly in Nandi Hills, our tranquil setting offers a similar experience to a farm stay near Nandi Hills, with plantations, greenery, and countryside charm, just a short drive from Bangalore.</p>`,
    },
    {
      question: "What activities can I expect at your farm resort near Bangalore?",
      answer: `<p>At our farm resort near Bangalore, enjoy plantation walks, lounging under mango trees, kids’ play zones, rooftop gatherings, and peaceful sit-outs with your morning coffee. It's the ultimate blend of comfort and nature.</p>`,
    },
    {
      question: "What makes your farm house stay near Bangalore unique?",
      answer: `<p>Our farm house stay near Bangalore combines rustic charm with modern comfort. With two unique properties — one with a green courtyard and another with a mango-view party deck — guests can enjoy peace, privacy, and farm life just outside the city.</p>`,
    },


  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleShowmore = () => {
    setShowQuestion((prev) => prev + 5);
  };

  return (
    <div className="mt-8 w-11/12 lg:w-4/5 mx-auto">
      <CommonHeading heading="FAQ" intro="Your Dream Event, Our Perfect Venue" />
      <div className="pt-8">
        {questions.slice(0, showQuestion).map((item, index) => (
          <div key={uuidv4()} className=" border-b  text-lg">
            <button
              className="flex justify-between items-center w-full bg-gray-100 hover:bg-gray-200 focus:outline-none px-2 md:px-4 py-2  "
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-start">{item.question}</span>
              <span className="text-gray-600 text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div
                className="bg-white border border-gray-200 p-4 mt-2 rounded-md transition-all duration-300 transform origin-top"
              // style={{ maxHeight: '100px', overflow: 'hidden' }}
              >
                <p
                  className="text-gray-800 text-lg"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            )}
          </div>
        ))}

      </div>
      {showQuestion >= questions.length ? null : (
        <button
          onClick={handleShowmore}
          className="text-gold_c 
         transition-colors duration-500	 cursor-pointer
            whitespace-nowrap  mt-6
            text-lg lg:text-xl px-4  lg:px-6  py-2 
            w-max mx-auto block
            "
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Faq;
