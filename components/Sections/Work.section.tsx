import { BsArrowRightShort } from "../Misc/Icons.collection";
import Link from "next/link";

const Work = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="work">
      <p className="text-3xl font-bold text-white">Work Experience</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="mb-5 flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <div className="work__container bd-grid">
            <div>
              <h3>
                <h3>
                  <a
                    className="text-blue-400 border border-transparent hover:border-b-cyan-100"
                    href="https://shopee.sg/"
                  >
                    Shopee
                  </a>
                </h3>
              </h3>
              <p>
                Software Engineer <br />
                <i>Jun 2021 - Present</i>
              </p>
            </div>
            <dl className="m-4 ml-10 text-gray-400">
              <li>
                Work as a backend developer in the Promotion Team.
              </li>
              <li>
                In charge of various multiple in-house applications and microservices that help manage media file resources.
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
                    href="https://www.viki.com/"
                  >
                    Rakuten Viki
                  </a>
                </h3>
              </h3>
              <p>
                Platform Engineer Intern (part-time) <br />
                <i>Aug 2020 - Dec 2020</i>
              </p>
            </div>
            <dl className="m-4 ml-10 text-gray-400">
              <li>
                Perform refactoring of the Ruby backend codebase to make the code more extensible.
              </li>
              <li>
                Add a different payment provider for Viki’s plan subscription endpoint.
              </li>
              <li>
                Create an internal-use web interface to visualize the subscription data of users.
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
                    href="https://www.viki.com/"
                  >
                    Rakuten Viki
                  </a>
                </h3>
              </h3>
              <p>
                Android Engineer Intern (part-time) <br />
                <i>Jan 2020 - Apr 2020</i>
              </p>
            </div>
            <dl className="m-4 ml-10 text-gray-400">
              <li>
                Use Android’s WorkManager to schedule work to run in background threads. Technology used: Android
                WorkManager, OkHttp.
              </li>
              <li>
                Fix some existing bugs in the application code
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
                    href="https://www.autodesk.com/"
                  >
                    Autodesk
                  </a>
                </h3>
              </h3>
              <p>
                Software Engineering Intern <br />
                <i>May 2019 - Dec 2019</i>
              </p>
            </div>
            <dl className="m-4 ml-10 text-gray-400">
              <li>
                Use C++ and AutoCAD API to develop toolset components used for new features coming in the next release of
                AutoCAD Mechanical.
              </li>
              <li>
                Improve existing Python scripts which were used for automation testing of AutoCAD, made it easier for testers to
                add new test cases as well as checking the results.
              </li>
              <li>
                Write over seven hundred test scripts to test the new functionalities of AutoCAD Mechanical.
              </li>
            </dl>
          </div>
        </p>
      </div >
    </div >
  );
};

export default Work;
