import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({id,title,description,img,spareImg,className,titleClassName,imgClassName}) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            img={img}
            spareImg={spareImg}
            className={className}
            titleClassName={titleClassName}
            imgClassName={imgClassName}            
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
