import React from "react";
import { DestinasiMetaData } from "./DestinasiMetaData";
import Image from "next/image";
import UnstyledLink from "./links/UnstyledLink";
import { IoMapOutline } from "react-icons/io5";
import Button from "./button/Button";

const DestinasiPreview = (props: DestinasiMetaData) => {
  return (
    <div className="max-w-md rounded-md bg-white drop-shadow-lg border">
      <div className="flex justify-center mb-3">
        <Image
          src={props.cover}
          alt={""}
          width={1200}
          height={(1200 * 2) / 5}
          className="card-image block"
        />
      </div>
      <div className="flex gap-4 items-center mt-3 px-4">
        <div>⭐ 4.5</div>
        {/* <div>
          <Button className={""} onClick={undefined}>
            <IoMapOutline />
          </Button>
        </div> */}
      </div>
      <div className="py-2 mt-3 px-4">
        <UnstyledLink href={`/destinasi/${props.slug}`}>
          <div className="mt-1">
            <p className="font-bold text-lg">{props.title}</p>
          </div>
        </UnstyledLink>
      </div>
    </div>
    // <div className="card mb-1">
    //   <UnstyledLink href={`/destinasi/${props.slug}`}>
    //     <Image
    //       src={props.cover}
    //       alt={""}
    //       width={1200}
    //       height={(1200 * 2) / 5}
    //       className="card-image block"
    //     />
    //     <div className="py-2 mt-3 px-4">
    //       <div className="mt-1">
    //         <h4 className="font-bold text-lg">{props.title}</h4>
    //         <p className="text-sm ">{props.date}</p>
    //       </div>
    //       <div className="mt-1">
    //         <p className="">{props.desc}</p>
    //       </div>
    //     </div>
    //   </UnstyledLink>
    // </div>
  );
};

export default DestinasiPreview;
