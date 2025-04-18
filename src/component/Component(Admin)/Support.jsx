import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Support = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("English");
  const [preferredTime, setPreferredTime] = useState("");
  const [callMeSoon, setCallMeSoon] = useState(false);

  const countries = [
    { code: "GB", name: "English" },
    { code: "PK", name: "Pakistan" },
  ];

  return (
    <div className=" min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg px-6 md:px-14 py-6 bg-[#2C3235] rounded-xl">
        <div className="mb-6">
          <h1 className="text-white text-2xl font-bold">
            24/5 support for you
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            At ProTech, we are committed to providing our clients with the
            highest level of support services. Our team of experienced
            professionals is always ready to assist you. That's why we are proud
            to offer award-winning 24/7 expert support from our team of seasoned
            professionals.
          </p>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your First Name"
            className="w-full bg-[#1E1E1E] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Your Last Name"
            className="w-full bg-[#1E1E1E] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Your telephone number"
            className="w-full bg-[#1E1E1E] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full bg-[#1E1E1E] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full bg-[#1E1E1E] text-white p-3 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
              size={20}
            />
          </div>

          <select className="w-full bg-[#1E1E1E] text-white p-3 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="pakistan">Pakistan</option>
            <option value="china">China</option>
            <option value="India">India</option>
          </select>

          <input
            type="text"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            placeholder="Preferred time of call"
            className="w-full bg-[#1E1E1E] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={callMeSoon}
              onChange={() => setCallMeSoon(!callMeSoon)}
              className="mr-2 focus:ring-2 focus:ring-blue-500"
            />
            <label className="text-white">Call me as soon as possible</label>
          </div>

          <button className="w-full bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
