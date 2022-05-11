import type { NextPage } from "next";

import {
  Header,
  About,
  Projects,
  Skills,
  Contact,
  NowPlaying,
  Work,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />

      <div className="flex justify-center">
        <p className="text-0.5xl font-bold text-white mb-10">© 2022 created by Dung Trinh (Duke)</p>
      </div>
    </div>
  );
};

export default Home;
