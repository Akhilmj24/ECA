import React from "react";

export default function DasboardCard({title,value,icon}) {
  return (
    <div className="cardconatiner w-max px-5 py-3 bg-white rounded-2xl flex items-center gap-4">
      <div className="">
        <h6 className="">{title}</h6>
        <p className="text-2xl">${value},00</p>
      </div>
      <div className="cardIcon bg-blue-700 text-4xl h-[50px] w-[50px] flex items-center justify-center rounded-xl">
        <ion-icon name={icon}></ion-icon>
      </div>
    </div>
  );
}
