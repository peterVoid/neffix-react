import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "./../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
      setMovies(doc.data()?.favMovie);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (idMovie) => {
    try {
      const result = movies.filter((item) => item.id !== idMovie);
      await updateDoc(movieRef, {
        favMovie: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-20">
      <h2 className="text-white md:text-lg xl:text-xl font-semibold pl-4">
        My Shows
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-30 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full relative whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide">
          {movies.map((item, i) => (
            <div
              key={i}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative hover:scale-105  transition  duration-300 ">
              <img
                className="wfull h-auto block"
                src={`https://image.tmdb.org/t/p/original/${item?.img}`}
                alt={item?.title}
              />
              <div className="w-full h-full  bg-black/80 absolute top-0 lett-0 opacity-0 hover:opacity-100 whitespace-normal">
                <p className="absolute white-space-nowrap text-white top-0 left-0 p-1 flex items-center justify-center w-full h-full sm:text-sm md:text-lg">
                  {item?.title}
                </p>
                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute text-gray-300 top-3 right-4">
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-30 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default SavedShows;
