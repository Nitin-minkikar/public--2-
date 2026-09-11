import React, { useRef, useState } from "react";
//import { ThankYouRenderContext } from "../../Context/ThankYouPageRenderStatus";
import { IoPersonOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRouter, usePathname } from "next/navigation";

function Form({ label_bg = "label_bg", headingHidden = false, quickform = false, setIsOpen }) {
  //  const { setIsFormSubmitted } = useContext(ThankYouRenderContext);
  const form = useRef(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    group_size: "",
    date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const location = usePathname();

  // Function to validate the form fields
  const validateForm = () => {
    let validationErrors = {};
    const phonePattern = /^\d{10}$/;

    if (!formData.name.trim()) validationErrors.name = "Name is required.";

    if (!phonePattern.test(formData.number))
      validationErrors.number = "Valid 10-digit number required.";

    if (formData.group_size.trim()) {
      if (formData.group_size < 2 || formData.group_size > 300)
        validationErrors.group_size = "Group size must be between 2 and 300.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const dateInputRef = useRef(null);

  const handleClick = () => {
    dateInputRef.current.showPicker();
  };

  const payload = {
    name: formData.name,
    mobile: formData.number,
    group_size: formData.group_size,
    date: formData.date, // Ensure this matches the API's expected format
    message: formData.message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    //await axios.post(process.env.REACT_APP_NEODOVE_API, payload)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_ACCOUNT_ID
      )
      .then(
        (result) => {
          setLoading(false);
          form.current.reset();
          const basePath = location;
          if (quickform) {
            setIsOpen(false)
          }
          //   setIsFormSubmitted(true);
          navigate.push("/thank-you");

          // if (basePath === "/") {
          //   navigate("/thank-you");
          // } else {
          //   navigate(`${basePath}/thank-you`);
          // }
        },
        (error) => {
          setLoading(false);
          // setIsFormSubmitted(false);
          alert("Please try again");
        }
      );
  };

  const today = new Date().toISOString().split("T")[0];
  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };
  return (
    <div>
      {!headingHidden && (
        <>
          {" "}
          <h1 className="text-4xl font-secondary_font ">Fill Up The Form</h1>
          <p className=" pt-2  text-gold_c pb-5">
            Your data will not be published. Required fields are marked*
          </p>
        </>
      )}
      <form ref={form} onSubmit={sendEmail} className="lg:w-10/12">
        <div className="relative mb-4  font-anek_bangla_font">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IoPersonOutline className="text-2xl text-gray-500" />
          </span>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => {
              const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
              setFormData({ ...formData, name: value });
              setErrors({ ...errors, name: "" });
            }}
            className={`block ${errors.name && "border-red-700"
              } px-2.5 pb-2.5 pt-4 pl-10 w-full text-sm
             text-gray-900 bg-transparent rounded-lg  border-2 
             appearance-none focus:outline-none focus:ring-0 
             focus:border-gold_c focus:border peer`}
            placeholder=" "
          />
          <label
            htmlFor="name"
            className={`absolute text-sm  text-gray-500 duration-300 transform
              -translate-y-4 scale-75 top-2 left-11  z-10 origin-[0]
               bg-${label_bg} px-2 peer-focus:px-2 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
                 peer-focus:-translate-y-4 peer-focus:text-gold_c  rtl:peer-focus:translate-x-1/4
                 `}
          >
            {errors.name ? (
              <span className="text-red-500 text-sm">{errors.name}</span>
            ) : (
              " Your Name*"
            )}
          </label>
        </div>

        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IoPhonePortraitOutline className="text-2xl text-gray-500" />
          </span>
          <input
            type="tel"
            name="number"
            id="number"
            className={`block ${errors.number && "border-red-700"
              } px-2.5 pb-2.5 pt-4 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-lg  border-2 appearance-none focus:outline-none focus:ring-0 focus:border-gold_c focus:border peer`}
            placeholder=" "
            maxLength={10}
            value={formData.number}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 10); // Allow only digits and limit to 10
              setFormData({ ...formData, number: value });
              setErrors({ ...errors, number: "" });
            }}
          />
          <label
            htmlFor="number"
            className={`absolute text-sm text-gray-500 duration-300 transform
              -translate-y-4 scale-75 top-2 left-11  z-10 origin-[0]
               bg-${label_bg} px-2 peer-focus:px-2 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
                 peer-focus:-translate-y-4 peer-focus:text-gold_c rtl:peer-focus:translate-x-1/4
                 `}
          >
            {errors.number ? (
              <span className="text-red-500 text-sm">{errors.number}</span>
            ) : (
              "Phone Number*"
            )}
          </label>
        </div>
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineUserGroup className="text-2xl text-gray-500" />
          </span>
          <input
            type="number"
            name="group_size"
            id="group_size"
            value={formData.group_size}
            onChange={handleChange}
            className={`block ${errors.group_size ? "border-red-700" : ""
              } px-2.5 pb-2.5 pt-4 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 focus:border-gold_c focus:border peer`}
            placeholder=" "
          />
          <label
            htmlFor="group_size"
            className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-11 z-10 origin-[0] bg-${label_bg} px-2 peer-focus:px-2`}
          >
            {errors.group_size ? (
              <span className="text-red-500 text-sm">{errors.group_size}</span>
            ) : (
              "Group Size*"
            )}
          </label>
        </div>

        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BsCalendar2Date className="text-2xl text-gray-500" />
          </span>
          <input
            type="date"
            name="date"
            id="date"
            min={today}
            className="block px-2.5 pb-2.5 pt-4 pl-10 w-full
             text-sm text-gray-900 bg-transparent rounded-lg
               border-2 appearance-none focus:outline-none
               focus:ring-0  focus:border-gold_c focus:border peer"
            placeholder=" "
            value={formData.date}
            onChange={handleChange}
            ref={dateInputRef}
            onClick={handleClick}
          />
          <label
            htmlFor="date"
            className={`absolute text-sm text-gray-500 duration-300 transform
              -translate-y-4 scale-75 top-2 left-11  z-10 origin-[0]
               bg-${label_bg} px-2 peer-focus:px-2 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
                 peer-focus:-translate-y-4 peer-focus:text-gold_c rtl:peer-focus:translate-x-1/4
                 `}
          >
            Date
          </label>
        </div>

        <div className="flex items-center">
          <FaRegEdit className="text-2xl text-gray-500 mr-2" />

          <p className="text-md text-gray-500"> Enter Your Message here</p>
        </div>
        <textarea
          type="text"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message here"
          className="min-h-20 rounded-lg bg-gray-200 w-full p-2 my-2 focus:outline-none   focus:border-gold_c focus:border"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-gold_c hover:bg-gold-500 rounded-lg font-anek_bangla_font text-white  py-2 px-4 "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Form;
