import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function CardName() {
  return (
    <>
      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <div className="w-94 h-auto border-0 p-4 bg-white rounded-2xl shadow-lg">
          <div className="flex justify-center items-center pt-5 flex-col">
            <img
              src="src\assets\Boboiboy Api.jpg"
              alt="Boboiboy"
              className="w-30 rounded-full shadow-xl"
            />
            <h1 className="text-xl font-bold">M Aji Putra Prijaya</h1>
            <p className="text-gray-400">Mahasiswa</p>
          </div>
          <div className="text-justify">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              dolor eum dolore vero. Ratione quo saepe magnam sit nostrum
              pariatur culpa maiores iste voluptas nobis quia reiciendis, harum,
              architecto dolorem!
            </p>
          </div>

          <LinkSocial
            text="Instagram"
            icon={<FaInstagram />}
            link="https://www.instagram.com/majiputraa/"
          />
          <LinkSocial
            text="LinkedIn"
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/majiputraa"
          />
          <LinkSocial
            text="Github"
            icon={<FaGithub />}
            link="https://www.github.com/majiputraa"
          />
        </div>
      </div>
    </>
  );
}

export default CardName;

function LinkSocial(props) {
  return (
    <>
      <div className="mt-4 flex justify-center text-center">
        <a
          className="flex p-2 w-full text-center justify-center items-center rounded-md bg-black text-white"
          href={props.link}
        >
          <span className="mr-2">{props.icon}</span>
          {props.text}
        </a>
      </div>
    </>
  );
}
