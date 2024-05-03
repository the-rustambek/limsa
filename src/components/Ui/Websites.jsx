import Link from "next/link";
import React from "react";

const Websites = ({ image, link }) => {
  return (
    <Link href={link} target="_blank" style={{border:"1px solid var(--light-purple)", borderRadius:"12px", overflow:"hidden"}}>
      <img src={image.src} alt="Website image" style={{objectFit:"cover", width:"100%", height:"100%"}} />
    </Link>
  );
};

export default Websites;
