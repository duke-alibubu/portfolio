import type { NextComponentType } from "next";


const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sans text-white" id="projects">
      <p className="text-3xl font-bold text-white">Personal Projects</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="mb-5 flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <div className="work__container bd-grid">
            <div>
              <h3>
                <h3>
                  <a
                    className="text-blue-400 border border-transparent hover:border-b-cyan-100"
                    href="https://github.com/duke-alibubu/BubuBot"
                  >
                    BubuBot - A Discord bot
                  </a>
                </h3>
              </h3>
              <p>
                <i>My first effort in creating a Discord bot</i>
              </p>
            </div>
            <dl className="m-4 ml-10 text-gray-400">
              <li>
                I made this bot during the free time I had between graduation and start of my current job. BubuBot is an utility bot that can perform various commands such as playing music, sending happy birthday gifts, annoy people to help manage a Discord server.
              </li>
            </dl>
          </div>
        </p>

        <p className="mb-5 mt-5 flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <div className="work__container bd-grid">
            <div>
              <h3>
                <h3>
                  <a
                    className="text-blue-400 border border-transparent hover:border-b-cyan-100"
                  >
                    Interactive E-book Application for university courses
                  </a>
                </h3>
              </h3>
              <p>
                <i>Final Year Project</i>
              </p>
            </div>
            <dl className="m-4 ml-10 text-gray-400">
              <li>
                Create an interactive e-book application for a course at NTU under the form of a cross-platform mobile app, using React Native.
              </li>
            </dl>
          </div>
        </p>

        <p className="mt-5 mb-5 flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <div className="work__container bd-grid">
            <div>
              <h3>
                <h3>
                  <a
                    className="text-blue-400 border border-transparent hover:border-b-cyan-100"
                  >
                    SECHI - A task management app for families
                  </a>
                </h3>
              </h3>
              <p>
                <i>AngelHack’s HACKcelerator 2020 program</i>
              </p>
            </div>
            <dl className="m-4 ml-10 text-gray-400">
              <li>
                SECHI is a project that aims to promote happiness and gender equality amongst families in Vietnam, by providing
                an easy-to-use mobile platform for family members to organize and share household chores.
              </li>
              <li>
                Develop a back-end service using ExpressJS and MySQL as a database and deployed to AWS.
              </li>
              <li>
                Co-participate in the Android part of the project, using Android Studio and Java.
              </li>
            </dl>
          </div>
        </p>
      </div >
    </div >
  );
};

export default Projects;
