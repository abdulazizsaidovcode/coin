import React from "react";
import { notFound } from "./assits";

function NotFound() {
  return (
    <div className="flex justify-center w-full pt-5">
      <img className="w-[200px]" src={notFound} alt="...." />
      
    </div>
  );
}

export default NotFound;
