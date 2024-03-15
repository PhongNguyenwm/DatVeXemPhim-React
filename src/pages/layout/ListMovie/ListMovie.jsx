import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../../services/QuanLyPhim";
import { Carousel, Col, Row } from "antd";
import ModalVideo from "react-modal-video";
import "./listMovie.scss";

const ListMovie = () => {
  const [arrMovie, setArrMovie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    quanLyPhimServ
      .getAllMovie()
      .then((res) => {
        const movies = res.data.content;
        const chunks = [];
        for (let i = 0; i < movies.length; i += 3) {
          chunks.push(movies.slice(i, i + 3));
        }
        setArrMovie(chunks);
        // Lấy ID video đầu tiên và thiết lập cho tất cả các video
        if (movies.length > 0) {
          setSelectedVideoId(movies[0].trailer);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="listMovie">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={"NYH2sLid0Zc"} // Truyền chuỗi trực tiếp vào videoId
        onClose={() => setIsOpen(false)}
        center
        width="800px"
        height="600px"
        top="20%"
      />
      <Carousel
        arrows={true}
        afterChange={onChange}
        nextArrow={
          <div>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        }
        prevArrow={
          <div>
            <i class="fa-solid fa-chevron-left"></i>
          </div>
        }
      >
        {arrMovie.map((chunk, index) => (
          <div className="listMovie" key={index}>
            <div>
              <div className="grid grid-cols-3 gap-10">
                {chunk.map((movie) => (
                  <div className="carousel_banner" key={movie.maPhim}>
                    <div className="movie_item space-y-4">
                      <button
                        onClick={() => {
                          setIsOpen(true);
                        }}
                        className="click-play absolute flex items-center justify-center"
                      >
                        <i class="fa-regular fa-circle-play"></i>
                      </button>
                      <img
                        className="w-full h-96 object-cover rounded"
                        src={movie.hinhAnh}
                        alt=""
                      />
                      <div className="describe">
                        <h3 className="mb-3">
                          <span className="bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                            C18
                          </span>
                          <span className="text-xl font-semibold">
                            {movie.tenPhim}
                          </span>
                        </h3>
                        <p className="line-clamp-2">{movie.moTa}</p>
                      </div>
                      <div className="order">
                        <button className="dat-ve">MUA VÉ</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ListMovie;
