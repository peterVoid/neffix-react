import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Rows = ({ title, fetchigURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchigURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchigURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="my-20">
        <h2 className="text-white md:text-lg xl:text-xl font-semibold pl-4">
          {title}
        </h2>
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-30 hidden group-hover:block"
            size={40}
          />
          <div
            id={"slider" + rowId}
            className="w-full h-full relative whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide">
            {movies.map((item, i) => (
              <Movie key={i} item={item} />
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-30 hidden group-hover:block"
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default Rows;
