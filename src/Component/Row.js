import React, { useEffect, useState } from "react";
import instance from "../instance";
import "../css/Row.css";


function Row({ isPoster, title, fetchurl }) {
  const baseurl = `https://image.tmdb.org/t/p/original/`;
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await instance.get(fetchurl);
      console.log(response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // dispatch(movies())
  }, [fetchurl]); // Add fetchurl as a dependency to re-fetch data if it changes)

  return (
    <>
      <div className="netflix">
        <h2>{title}</h2>
        <div className="imageRow">
          {data.map((movie) => (
            <div className={`image ${isPoster ? "movies" : ""}`}>
              <img
                key={movie.id}
                src={`${baseurl}${
                  isPoster ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
              />
              //{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
// return (
// <div className="row">

//   <div className="imagerow">
//     {data.map((movie) => (
//       <img
//         key={movie.id}
//         className="row__poster"
//         src={`${baseurl}${isPoster?movie.poster_path:movie.backdrop_path}`}
//         alt={movie.name || movie.title}
// style={{width:'400px',height:'400px'}}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
