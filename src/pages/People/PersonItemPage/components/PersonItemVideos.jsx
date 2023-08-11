import React from "react";
import { fakeVideos } from "../../../../constants/fakeVideos";
import VideoItem from "./VideoItem";

export default function PersonItemVideos(props) {
  const { mainMode, personResource } = props;
  if (mainMode) return null;

  const { videos } = personResource;

  return (
    <section className="bg-white p-10 rounded-[30px] mb-6 shadow-md blur-2 text-opacity-15 spread-0">
      <header className="mb-4">
        <h2 className="text-2xl font-bold mb-6">Videos</h2>
      </header>
      <nav className="flex mb-6">
        {["All", "2023", "2022", "2021", "2020"].map((buttonName) => (
          <button className="block text-sm py-1 px-3 rounded-full bg-gray-200 hover:bg-gray-300 opacity-[60%] mr-3">
            {buttonName}
          </button>
        ))}
      </nav>
      <section>
        {[2023].map((yearItem) => (
          <section className="mb-6">
            <header className="mb-4">
              <h2 className="font-bold text-lg opacity-50">{yearItem}</h2>
            </header>
            <section>
              {/* Video Item */}
              {videos.map((videoResource) => (
                <VideoItem videoResource={videoResource} />
              ))}
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}
