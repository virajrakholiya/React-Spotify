import { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
function App() {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&w=600",
      song: "Ham Tum",
      artist: "Viraj Rakholiya",
      added: false,
    },
    {
      image:
        "https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      song: "Without Me",
      artist: "Eminame",
      added: false,
    },
    {
      image:
        "https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      song: "Sunflower",
      artist: "Krishna",
      added: false,
    },
    {
      image:
        "https://images.pexels.com/photos/9786/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      song: "Garba 2.0",
      artist: "Viviek",
      added: false,
    },
  ];

  const [SongData, setSongData] = useState(data);

  const handelClick = (index) => {
    // alert(index)
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };
  return (
    <div className="h-[100vh] w-[100vw]">
      <Navbar SongData={SongData} />
      <div className="flex gap-3 px-20 mt-10">
        {SongData.map((obj, index) => (
          <Card
            key={index}
            data={obj}
            index={index}
            handelClick={handelClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
