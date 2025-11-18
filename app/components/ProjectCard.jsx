import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import NotDeployedOverlay from "./NotDeployedOverlay";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [showNotDeployedOverlay, setShowNotDeployedOverlay] = useState(false);
  const [overlayVisibleOnTap, setOverlayVisibleOnTap] = useState(false);

  const handlePreviewClick = (e) => {
    if (!previewUrl || previewUrl.length === 0) {
      e.preventDefault();
      setShowNotDeployedOverlay(true);
      setTimeout(() => setShowNotDeployedOverlay(false), 2000);
    }
  };

  // Toggle overlay only on mobile by tapping the card
  const handleCardTapOnMobile = () => {
    if (window.innerWidth < 768) {
      setOverlayVisibleOnTap((prev) => !prev);
    }
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl rounded-b-md relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        onClick={handleCardTapOnMobile}
      >
        {(!previewUrl || previewUrl.length === 0) && (
          <NotDeployedOverlay visible={showNotDeployedOverlay} />
        )}

        <div
          className={`overlay rounded-t-lg items-center justify-center
            absolute top-0 left-0 w-full h-full bg-[#181818]
            transition-all duration-500
            ${overlayVisibleOnTap ? "flex bg-opacity-80" : "hidden bg-opacity-0"}
            md:group-hover:flex md:group-hover:bg-opacity-80`}
        >
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 mr-2 border-2 relative rounded-full
                      border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon
              className="h-10 w-10 text-[#ADB7BE] absolute
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                cursor-pointer group-hover/link:text-white"
            />
          </a>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            onClick={handlePreviewClick}
          >
            <EyeIcon
              className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2
                transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
            />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
