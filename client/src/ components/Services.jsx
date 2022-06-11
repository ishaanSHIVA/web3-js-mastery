import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = (props) => {
  const classStyle = `flex flex-row justify-start items-center white-glassmorphism
      p-3 m-2 cursor-pointer hover:shadow-xl `;
  return (
    <div className={classStyle}>
      <div
        className={`
      w-10 h-10 rounded-full flex justify-center items-center text-white
      ${props.color}
      `}
      >
        {props.icon}
      </div>
      <div className="ml-5 flex flex-col flex-1 ">
        <h1 className={"mt-2 text-white text-lg "}>{props.title}</h1>
        <p className={"mt-2 text-white text-sm md:w-9/12 "}>{props.subtitle}</p>
      </div>
    </div>
  );
};
const Services = () => {
  return (
    <div
      className="
        flex w-full-width  justify-center items-center
        gradient-bg-services
    "
    >
      <div
        className="
          flex mf:flex-row flex-col items-center justify-between
          md:p-20 py-12 px-4
      "
      >
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
            Services that we
            <br />
            continue to improve
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>
        <div
          className="
          flex-1 flex flex-col items-center justify-start ${}
        "
        >
          <ServiceCard
            color="bg-[#2952e3]"
            title="Security Guranteed"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guranteed.We always maintain privacy and the quality of our product"
          />
          <ServiceCard
            color="bg-[#89845f]"
            title="Best Exchange Rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Security is guranteed.We always maintain privacy and the quality of our product"
          />
          <ServiceCard
            color="bg-[#f84550]"
            title="Security Guranteed"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="Security is guranteed.We always maintain privacy and the quality of our product"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
