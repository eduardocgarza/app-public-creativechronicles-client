import React from "react";

// import websiteIcon from "../../../../assets/"
// import blogIcon from "../../../../assets/"
// import linktreeIcon from "../../../../assets/"
// import snapchatIcon from "../../../../assets/"
import facebookIcon from "../../../../assets/icons/1217141_fb.png";
import instagramIcon from "../../../../assets/icons/1217174_instagram.png";
import linkedinIcon from "../../../../assets/icons/1217173_linkedin.png";
import redditIcon from "../../../../assets/icons/1217170_reddit.png";
import twitterIcon from "../../../../assets/icons/1217163_twitter.png";
import youtubeIcon from "../../../../assets/icons/1217140_youtube.png";

export default function CompanyItemExternalLinks() {
  return (
    <div className="flex items-start">
      <a
        className="block bg-gray-100 hover:bg-gray-200 transition duration-500 ease-in-out p-3 rounded-full mr-3"
        href="#"
      >
        <img alt="Facebook" className="block w-[20px]" src={facebookIcon} />
      </a>
      <a
        className="block bg-gray-100 hover:bg-gray-200 transition duration-500 ease-in-out p-3 rounded-full mr-3"
        href="#"
      >
        <img alt="Instagram" className="block w-[20px]" src={instagramIcon} />
      </a>
      <a
        className="block bg-gray-100 hover:bg-gray-200 transition duration-500 ease-in-out p-3 rounded-full mr-3"
        href="#"
      >
        <img alt="Linkedin" className="block w-[20px]" src={linkedinIcon} />
      </a>
      <a
        className="block bg-gray-100 hover:bg-gray-200 transition duration-500 ease-in-out p-3 rounded-full mr-3"
        href="#"
      >
        <img alt="Reddit" className="block w-[20px]" src={redditIcon} />
      </a>
      <a
        className="block bg-gray-100 hover:bg-gray-200 transition duration-500 ease-in-out p-3 rounded-full mr-3"
        href="#"
      >
        <img alt="Twitter" className="block w-[20px]" src={twitterIcon} />
      </a>
      <a
        className="block bg-gray-100 hover:bg-gray-200 transition duration-500 ease-in-out p-3 rounded-full mr-3"
        href="#"
      >
        <img alt="Youtube" className="block w-[20px]" src={youtubeIcon} />
      </a>
    </div>
  );
}
