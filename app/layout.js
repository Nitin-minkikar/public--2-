import Footer from "@/Components/Footer";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import QuickWhatsapp from "@/Components/ReuseComponent/QuickWhatsapp";
import QuickCall from "@/Components/ReuseComponent/QuickCall";
import ScrollTop from "@/Components/ReuseComponent/ScrollTop";
import { GoogleTagManager } from "@next/third-parties/google";
import { Anek_Bangla, Anek_Kannada, Marcellus } from "next/font/google";
import EnquireNow from "../Components/EnquireNow";
import Script from "next/script";
const anekBangla = Anek_Bangla({
  subsets: ["latin"], // Include a valid subset
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Valid weights
  variable: "--font-anek-bangla", // CSS variable for Tailwind integration
});

const anekKannada = Anek_Kannada({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-anek-kannada",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"], // Marcellus only supports weight 400
  variable: "--font-marcellus",
});

export const metadata = {
  title: "The Starry Nights: Best resorts in Bangalore",
  description:
    "Discover The Starry Nights, one of the top day outing resorts in Bangalore, where adventure meets luxury. Perfect for corporate team outings, family vacations, or a relaxing getaway, our resort offers exciting adventure camps near Bangalore, world-class facilities, and a refreshing swimming pool. Nestled in nature, it is one of the best resorts in Bangalore for families or corporates seeking memorable experiences. From thrilling outdoor activities to peaceful retreats, The Starry Nights is your go-to resort for both excitement and relaxation, offering something special for every type of traveler.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Resorts in Nelamangala
   Top resorts in Magadi Road
   Best resorts in Bangalore
   Adventure resorts in Bangalore
   Camping in Bangalore
   Day outing resorts in Bangalore
   Adventure camps near Bangalore
   Resorts with swimming pool in Bangalore
   Corporate team outing in Bangalore
   Bangalore resorts for family
   Night stay resorts in Bangalore
   Best day outing in Bangalore
   Resorts in Bangalore for couples
   Resorts for corporate events in Bangalore
   Hillside resorts near Bangalore
   Resorts for team building in Bangalore
   Adventure day outing in Bangalore
   Nature resorts in Bangalore
   Affordable resorts in Bangalore
   Luxury resorts in Bangalore
   Family day outing in Bangalore
   Eco-friendly resorts in Bangalore
   Resorts with activities in Bangalore
   Resorts near Peenya IndBest adventure resorts in Nelamangala for families
   Top resorts near Magadi Road with adventure activities
   Affordable resorts in Bangalore with swimming pool
   Best corporate team outing resorts near Bangalore
   Adventure camping and trekking near Bangalore
   Family-friendly resorts in Nelamangala for day outings
   Best resorts for night stay near Magadi Road, Bangalore
   Eco-friendly resorts in Bangalore for corporate events
   Bangalore resorts with outdoor and indoor activities
   Hillside adventure resorts near Bangalore for weekends
   Luxury resorts near Tumkur Road with swimming pool
   Resorts for couples near Bangalore with romantic ambiance
   Resorts near Nelamangala for adventure and team building
   Best resorts for corporate retreats in Bangalore
   Top adventure camps near Bangalore with zipline and trekking
   Best adventure day outing packages near Bangalore
   Family resorts in Bangalore with swimming pool and activities
   Corporate day outing resorts near Magadi Road
   Nature resorts near Bangalore for family and corporate outings
   Adventure resorts near Bangalore with ATV rides and wall climbing
   Affordable resorts for large family gatherings in Bangalore
   Best weekend getaway resorts near Peenya Industrial Area
   Top-rated hillside resorts near Bangalore with adventure sports
   Luxury adventure resorts near Nelamangala with premium facilities
   Budget-friendly day outing resorts near Magadi Road with fun activities
   ustrial Area
   Weekend resorts near Bangalore
   "
        />
        {/* Website Schema */}
     <Script 
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "The Starry Nights",
              url: "https://www.thestarrynights.in",
            }),
          }}
        />

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://thestarrynights.in/#organization",
                  name: "The Starry Nights",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "Ravuthanahalli, kithanahalli post Dasanapura Hobli, Bangalore North",
                    addressLocality: "Bengaluru",
                    addressRegion: "KA",
                    postalCode: "562130",
                    addressCountry: "IN",
                  },
                  telephone: "+91-8867352400",
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 13.021579,
                    longitude: 77.427885,
                  },
                  image: "https://www.thestarrynights.in/images/logo.webp",
                  sameAs: [
                    "https://www.instagram.com/thestarrynightsresort",
                    "https://www.facebook.com/thestarrynightsresort",
                    "https://www.youtube.com/@thestarrynightsresort",
                  ],
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script 
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.thestarrynights.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Day Outing",
                  item: "https://www.thestarrynights.in/day-outing-resorts-in-bangalore",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Stay",
                  item: "https://www.thestarrynights.in/best-resorts-in-nelamangala",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Activities",
                  item: "https://www.thestarrynights.in/resorts-with-activities-in-bangalore",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "About Us",
                  item: "https://www.thestarrynights.in/best-resorts-in-Bangalore",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Contact Us",
                  item: "https://www.thestarrynights.in/resort-near-by-bangalore",
                },
              ],
            }),
          }}
        />

        {/* Resort Schema */}
        <Script 
          id="resort-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Resort",
              "@id": "https://www.thestarrynights.in/#ResortNearBangalore",
              name: "The Starry Nights",
              priceRange: "660-3500",
              alternateName: [
                "Bangalore Adventure Resort",
                "Nelamangala Resort",
                "Camping in Bangalore",
              ],
              url: "https://www.thestarrynights.in",
              logo: "https://www.thestarrynights.in/logo.png",
              keywords:
                "Adventure, Camp, resort, Day outing, corporate, team building, Nature adventure camp, camping, bangalore ,ramanagara, camping, Bangalore, team outing, Nelamangala",
              description:
                "Discover The Starry Nights, one of the top day outing resorts in Bangalore, where adventure meets luxury...",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ravuthanahalli, kithanahalli post Dasanapura Hobli, Bangalore North,",
                addressLocality: "Nelamangala",
                addressRegion: "Karnataka",
                postalCode: "562130",
                addressCountry: "IN",
              },
              telephone: "+918867352400",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 13.021579,
                longitude: 77.427885,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.instagram.com/thestarrynightsresort",
                "https://www.facebook.com/thestarrynightsresort",
                "https://www.youtube.com/@thestarrynightsresort",
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
        <Script   
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              name: "The Starry Nights",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I reach The Starry Nights Resort?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Starry Nights Resort is just 28 km from Bangalore...",
                  },
                },
              
              ],
            }),
          }}
        />
        {/* Google Analytics Script */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YE8L9ETMRC"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag("config", "G-R4S080GC4P");
            `}
        </Script>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1130659318750678');
            fbq('track', 'PageView');
          `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=1130659318750678&ev=PageView&noscript=1`}
          />
        </noscript> */}
      </head>
      <body
        className={`font-primary_font max-w-[1700px] mx-auto bg-[#f5f5f5] text-black ${anekBangla.variable} ${anekKannada.variable} ${marcellus.variable} `}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKJJ3TBF"
            height="0"
            width="0"
            style={{display:'none', visibility:"hidden"}}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <GoogleTagManager gtmId="GTM-MKJJ3TBF" />
 <EnquireNow/>
        <QuickWhatsapp />
        <QuickCall />
        <ScrollTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
