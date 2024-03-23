import React from "react";

function Card({ data, index, handelClick }) {
  const { image, song, artist, added } = data;
  return (
    <div className="w-64 h-36 p-4 bg-zinc-400 flex gap-3 relative rounded-lg">
      <div className="w-24 h-24 bg-orange-400 rounded-xl">
        <img
          src={image}
          alt=""
          className="h-fll w-full object-cover rounded-xl"
        />
      </div>
      <div className="">
        <h1 className="text-xl font-bold ">{song}</h1>
        <h3>{artist}</h3>
        <button
          onClick={() => {
            handelClick(index);
          }}
          className={`absolute top-[85%] right-5  ${
            added === false ? "bg-orange-400" : "bg-teal-200"
          } p-2 rounded-2xl w-30 text-center`}
        >
          {added === false ? "Add Favorite" : "Added"}
        </button>
      </div>
    </div>
  );
}

export default Card;
