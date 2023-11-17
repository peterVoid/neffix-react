import { useState } from "react";
import { FaHeadset, FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
const Movie = ({ item }) => {
  const [likes, setLikes] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieId = doc(db, "users", `${user?.email}`);
  const saveShow = async () => {
    if (user?.email) {
      setLikes(true);
      setSaved(true);
      await updateDoc(movieId, {
        favMovie: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please login first");
    }
  };
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative hover:scale-105  transition  duration-300 ">
      <img
        className="wfull h-auto block"
        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="w-full h-full  bg-black/80 absolute top-0 lett-0 opacity-0 hover:opacity-100 whitespace-normal">
        <p className="absolute white-space-nowrap text-white top-0 left-0 p-1 flex items-center justify-center w-full h-full sm:text-sm md:text-lg">
          {item?.title}
        </p>
      </div>
      <p onClick={saveShow}>
        {likes ? (
          <FaHeart className="text-slate-300 absolute top-4 left-4" />
        ) : (
          <FaRegHeart className="text-slate-300 absolute top-4 left-4" />
        )}
      </p>
    </div>
  );
};

export default Movie;
