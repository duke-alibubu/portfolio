import type { NextComponentType } from "next";

import {
  FaLinkedin,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sans" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/duke-alibubu" />

        <Icon
          icon={<FaLinkedin />}
          url="https://www.linkedin.com/in/duke-trinh/"
        />

        <Icon icon={<MdEmail />} url="mailto:ttdungalibubu@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;
