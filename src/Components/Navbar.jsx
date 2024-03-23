import React from "react";
function Navbar({ SongData }) {
  return (
    <div className="w-[100vw] flex justify-between px-5 p-2 bg-teal-200 items-center">
      <div className="text-xl font-semibold">Spotify</div>
      <div className="">
        <button className=" bg-orange-400 p-2 px-3 rounded-xl ">
          Favorite {SongData.filter((item) => item.added).length}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
