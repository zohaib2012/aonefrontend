import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs1 = [
  {
    question: "How do I start trading Forex?",
    answer:
      "To start, create an account, verify your identity, deposit funds, and access our trading platform to begin trading.",
  },
  {
    question: "What are trading hours?",
    answer:
      "Forex is open 24 hours a day, five days a week, starting from Sunday evening to Friday evening (GMT).",
  },
  {
    question: "What documents are required for verification?",
    answer:
      "Typically, we need a valid ID (passport, driver’s license, or national ID card) and a proof of address (utility bill, bank receipt or bank statement).",
  },
];

const faqs2 = [
  {
    question: "How long does the verification process take?",
    answer:
      "Verification usually takes 12-24 hours, but it may vary depending on the volume of requests.",
  },
  {
    question: "How can I deposit funds?",
    answer:
      "You can deposit funds via bank transfer or e-wallets like PayPal or Skrill.",
  },
  {
    question: "How do I withdraw funds?",
    answer:
      "Log into your account on aone, go to the 'Withdraw Funds' section, and submit your request.",
  },
];

export default function Faq() {
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const toggleFAQ1 = (index) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };

  const toggleFAQ2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  return (
    <div className="bg-[#F8F9FA] py-16">
      <section className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center justify-center gap-y-4 py-5">
          <h2 className="text-4xl md:text-5xl font-bold text-Blue  text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-medium text-gray-600 text-center">
            Answers to the most common questions related to Forex trading
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6">
          <div className="space-y-6">
            {faqs1.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-none"
              >
                <button
                  onClick={() => toggleFAQ1(index)}
                  className="flex w-full items-center justify-between p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                      openIndex1 === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex1 === index && (
                  <div className="bg-white pt-4 pb-6 px-6 text-sm text-gray-700 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {faqs2.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-none "
              >
                <button
                  onClick={() => toggleFAQ2(index)}
                  className="flex w-full items-center justify-between p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                      openIndex2 === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex2 === index && (
                  <div className="bg-white pt-4 pb-6 px-6 text-sm text-gray-700 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
