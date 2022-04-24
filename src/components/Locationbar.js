import React, { useState } from "react";

// Custom Dependancies
import Dropdown from "./Dropdown.js";

export default function Locationbar() {
  const extensions = [
    {
      id: "1",
      label: "PNG",
      value: "png",
    },
    {
      id: "2",
      label: "JPEG",
      value: "jpeg",
    },
    {
      id: "3",
      label: "WEBP",
      value: "webp",
    },
  ];

  const temp = extensions.find((ext) => ext.value);

  const [currentExtension, setCurrentExtension] = useState(temp);

  return (
    <div className="flex items-center justify-center">
      <div className="w-52 mx-auto">
        <Dropdown
          //className="flex-1"
          options={extensions}
          selectedOption={currentExtension}
          handelChange={(event) => {
            console.log("parent", event);
            setCurrentExtension(event);
          }}
        />
      </div>
    </div>
  );
}
