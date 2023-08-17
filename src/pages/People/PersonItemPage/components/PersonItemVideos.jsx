import React from "react";
import { fakeVideos } from "../../../../constants/fakeVideos";
import VideoItem from "./VideoItem";
import { VideosContainer } from "../helpers/VideosContainer";

export default function PersonItemVideos(props) {
  const { mainMode, personResource } = props;
  if (mainMode) return null;

  const { videos } = personResource;

  return (
    <section className="bg-white py-10 rounded-[30px] mb-6 shadow-md blur-2 text-opacity-15 spread-0">
      <header className="text-center md:text-left px-10 mb-10">
        <h2 className="text-2xl font-bold mb-6">Videos</h2>
      </header>
      <section>
        <VideosContainer>
          {videos.map((videoResource) => (
            <VideoItem videoResource={videoResource} />
          ))}
        </VideosContainer>
      </section>
    </section>
  );
}
