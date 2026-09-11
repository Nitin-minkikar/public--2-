export const metadata = {
    title: "Privacy Policy For The Starry Nights",
    description: "Privacy Policy for the website",
}
const PrivacyPolicy = () => {

  return (
    <div className='pt-14 text-lg lg:pt-[100px]'> 

    <div className="max-w-4xl mx-auto p-6 bg-white">
  
      <h1 className="text-xl font-semibold mb-4">Privacy Policy</h1>
      <p>Effective date: 30/12/2024</p>

      <h2 className="text-lg font-medium mt-6 mb-2">Introduction</h2>
      <p>
        Welcome to www.thestarrynights.in. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from <a href="https://www.thestarrynights.in" className='text-blue-500'> www.thestarrynights.in </a>
      </p>

        
      <h2 className="font-xl font-medium mt-4 ">
          Opt-In / Sign-up Policy
        </h2>
        <p>
          {" "}
          By providing your phone number during the sign-up process, you
          explicitly consent to receive calls and SMS messages from us regarding
          your account, services, and promotional offers, in accordance with
          applicable laws and regulations.
        </p>







      <h2 className="text-lg font-medium mt-6 mb-2">Personal Information</h2>
      <p>
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
      </p>

      <p>
        We collect Device Information using the following technologies:
      </p>
      <ul className="list-disc pl-5 ml-4">
        <li>"Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. </li>
        <li>"Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
        <li>"Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site.</li>
      </ul>

      {/* <h2 className="text-lg font-medium mt-6 mb-2">Sharing Your Personal Information</h2> */}
      <p className='pt-2'>
        We share your Personal Information with third parties to help us use your Personal Information, as described above.
      </p>

      <p>
        Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2">Changes</h2>
      <p>
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
      </p>


      <h2 className="text-lg font-medium mt-6 mb-2">Image Usage</h2>
        <p>
          The images displayed on our website are for representational purposes.
          They include both real images from The Starry Nights and
          stock photography.
        </p>
      <h2 className="text-lg font-medium mt-6 mb-2">Governing Law</h2>
      <p>
        This Privacy Policy is governed by and construed in accordance with the laws of India, including but not limited to the Information Technology Act, 2000 and its amendments.  The place of jurisdiction shall be exclusively in Bangalore.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2">Contact Us</h2>
      <div>
        For more information about our privacy practices,
         if you have questions, or if you would like to make a complaint,
          please contact us by e-mail at 
          <a href="mailto:bookings.starrynights@gmail.com" className='text-blue-500'>  bookings.starrynights@gmail.com </a>
      </div>
    
    </div>
    </div>
  );
};

export default PrivacyPolicy;
