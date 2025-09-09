import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center p-3 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-3 text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const items = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "What is an Accordion?", content: "An accordion is a vertically stacked list of items that can expand/collapse." },
    { title: "Why use React?", content: "React makes it painless to create interactive UIs with reusable components." },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-lg shadow-lg">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
