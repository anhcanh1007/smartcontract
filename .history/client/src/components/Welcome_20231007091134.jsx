import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const Welcome = () => {
  return (
    <div className="flex w-ful justify-center items-center">
      <div className="flex md:flex-row flex-col items-star justify-between md:p-20 py-12">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto
          </h1>
          <p className="text-left mt-5 text-white">
            Explo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
