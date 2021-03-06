import type { NextComponentType } from "next";

import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sans">
      <div>
        <p className="text-3xl font-bold text-white">Hi, I am Dung Trinh (Duke).</p>
        <p className="mt-1 text-lg text-gray-300">
          A Forever Curious Software Engineer
        </p>

        <p className="mt-4 text-gray-400">
          I am a passionate software engineer who continously seeks to perfect my craft.<br />
          I graduated from Nanyang Technological University with a Bachelor Degree <br />
          with Honours (Highest Distinction) in Computer Science.<br />
          <br />
          Through self-learning and school work, I was able to get experienced <br />
          with various Computer Science topics, from Software Engineering to Data Science <br />
          and Machine Learning.
          Software Engineering is the one that suits me the most <br />
          and I have chosen to master the craft ever since. <br />
          Though currently working as a backend developer,
          I also have great interest in frontend as well as mobile application developments.<br />
          <br />
          In my free time, I enjoy drawing and learning new geeky stuffs (currently I am trying out Blender). <br />
          I pick up a new book once a while - mostly fantasy or technical books.
        </p>

        <Link href="https://alibubu-99.artstation.com/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-serif text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            I post my drawings here sometimes.
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="hidden custom:block">
        <img
          src="https://raw.githubusercontent.com/duke-alibubu/portfolio/main/public/assests/pfp.jpg"
          width="150"
          height="150"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
