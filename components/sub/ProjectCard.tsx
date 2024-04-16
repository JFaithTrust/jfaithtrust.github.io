'use client'

import React from "react";
import { motion } from "framer-motion";
import { BsGlobe } from "react-icons/bs";
import { fadeIn } from "@/utils/motion.js";
import Image from "next/image";
import { Tilt } from "react-tilt";

interface Props {
  index: number;
  name: string;
  description: string;
  tags: any[];
  image: string;
  source_code_link: string;
}



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: Props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            fill
            className="object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              {index === 2 ? (
                <Image
                  src="/github.png"
                  alt="source code"
                  width={30}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <BsGlobe className="w-1/2 h-1/2 object-contain text-white" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;