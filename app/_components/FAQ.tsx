import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is this community about?",
      answer: "Our community is a platform for tech enthusiasts to learn, share, and grow together.",
    },
    {
      question: "How can I join the community?",
      answer: "You can join by signing up on our website and participating in discussions and events.",
    },
    {
      question: "Is there any membership fee?",
      answer: "No, joining the community is completely free.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
