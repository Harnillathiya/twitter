import React from "react";
import { CiSearch } from "react-icons/ci";
import dhoni from "../image/Indian-cricketer-Mahendra-Singh-Dhoni-2011.webp";
import kohli from "../image/virat-kohli.png";
import ruturaj from "../image/102.png";
import { Container } from "@mui/material";

const Rightsidebar = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none">
          <CiSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none px-4 p-1"
          />
        </div>
        <div className="bg-gray-200 mt-4 rounded-3xl p-4">
          <div className="mb-4">
            <p className="font-bold">TypeScript</p>
            <p className="text-gray-700 text-sm">1,823 posts</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700 text-sm">
                Open-wheel racing . Trending
              </p>
            </div>
            <div>
              <p>...</p>
            </div>
          </div>
          <p className="font-bold">Verstappen</p>
          <p className="text-gray-700 text-sm">
            Trending with{" "}
            <span className="text-blue-500">#bahrainGP, Ferrari</span>
          </p>
          <p className="text-blue-500 mt-4">Show more</p>
        </div>
        <div className="bg-gray-200 mt-4 rounded-3xl p-4">
          <div>
            <p className="font-bold text-2xl">Who to follow</p>
          </div>
          <div className="main-flex">
            <div>
              <img src={dhoni} alt="" className="dhoni-img" />
            </div>
            <div>
              <p className="font-bold text-base">dhoni</p>
              <p className="text-base">@dhoni_007</p>
            </div>
            <div>
              <button type="button" className="follow-btn">
                Follow
              </button>
            </div>
          </div>
          <div className="main-flex">
            <div>
              <img src={kohli} alt="" className="dhoni-img" />
            </div>
            <div>
              <p className="font-bold text-base">Virat Kohli</p>
              <p className="text-base">@virat_kohli</p>
            </div>
            <div>
              <button type="button" className="follow-btn">
                Follow
              </button>
            </div>
          </div>
          <div className="main-flex">
            <div>
              <img src={ruturaj} alt="" className="dhoni-img" />
            </div>
            <div>
              <p className="font-bold text-base">Ruturaj</p>
              <p className="text-base">@rutu_0031</p>
            </div>
            <div>
              <button type="button" className="follow-btn">
                Follow
              </button>
            </div>
          </div>
          <p className="text-blue-500 mt-4">Show more</p>
        </div>
        <footer>
          <div>
            <a href="tos" className="footer-text">
              Terms of Service
            </a>
            <a href="pp" className="footer-text">
              Privacy policy
            </a>
            <a href="pp" className="footer-text">
              Cookie policy
            </a>
          </div>
          <div>
            <a href="pp" className="footer-text">
              Accessibility
            </a>
            <a href="pp" className="footer-text">
              Ads info
            </a>
            <a href="pp" className="footer-text">
              More ...
            </a>
            <span className="footer-text">@2024 X Corp</span>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Rightsidebar;
