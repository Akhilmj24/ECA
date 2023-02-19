import React from "react";

export default function Header({ title, tagLine }) {
  return (
    <header className="px-6 py-2">
      <h2 className="text-3xl font-medium">{title}</h2>
      <p className="text-gray-400">{tagLine}</p>
    </header>
  );
}
