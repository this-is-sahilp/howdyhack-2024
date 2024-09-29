"use client";

import { useState } from 'react';

export default function Home() {
  // State to track whether to show the new DOM element
  const [elements, setElements] = useState([]);

  // Function to add a new element to the DOM
  const addElement = () => {
    setElements((prevElements) => [
      ...prevElements,
      <p key={prevElements.length}>New Element {prevElements.length + 1}</p>,
    ]);
  };

  return (
    <div>
      <h1>Dynamic DOM Elements in Next.js</h1>
      <button onClick={addElement}>Add Element</button>

      {/* Render the new elements */}
      <div>
        {elements}
      </div>
    </div>
  );
}