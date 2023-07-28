import React from "react";
import videoThumbnail from "../../../../assets/videoThumbnail.png";
import numberToShorthand from "../../../../helpers/numberToShorthand";

export default function VideoItem(props) {
  const {
    thumbnailURL,
    videoURL,
    videoTitle,
    videoDescription,
    videoViews,
    videoLikes,
    videoComments,
    eventDate,
    publishedDate,
    channelThumbnailURL,
    channelName,
    channelURL,
    channelSubscribers,
  } = props;

  /**
   * @Constants
   */
  const formattedChannelSubscribers = `${numberToShorthand(
    channelSubscribers
  )} subscribers`;

  const formattedVideoViews = `${numberToShorthand(videoViews)} views`;
  const formattedVideoLikes = `${numberToShorthand(videoLikes)} likes`;
  const formattedVideoComments = `${numberToShorthand(videoComments)} comments`;

  return (
    <section className="flex mb-4">
      <a className="block" href={videoURL} rel="noreferrer" target="_blank">
        <img
          className="block rounded-3xl w-[250px]"
          // src={thumbnailURL}
          src={videoThumbnail}
          alt={videoTitle}
        />
      </a>
      <section className="py-2 px-4 flex-1">
        <a
          className="block text-xl font-medium mb-4"
          href={videoURL}
          rel="noreferrer"
          target="_blank"
        >
          {videoTitle}
        </a>
        <div className="flex items-center mb-4">
          <a
            className="block w-[50px] h-[50px] overflow-hidden rounded-full"
            href={channelURL}
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="block object-cover w-full h-full"
              // src={channelThumbnailURL}
              src={videoThumbnail}
              alt={channelName}
            />
          </a>
          <div className="flex-1 ml-2">
            <a
              className="block text-sm font-medium mb-1"
              href={channelURL}
              rel="noreferrer"
              target="_blank"
            >
              {channelName}
            </a>
            <p className="text-xs opacity-50">{formattedChannelSubscribers}</p>
          </div>
        </div>
        <footer className="bg-gray-100 p-4 rounded-2xl text-xs opacity-[85%]">
          <div className="flex mb-1">
            <div className="flex mr-2">
              <h3 className="font-medium mr-2">Event date</h3>
              <p className="opacity-50">{publishedDate}</p>
            </div>
            <div className="flex">
              <h3 className="font-medium mr-2">Event date</h3>
              <p className="opacity-50">{eventDate}</p>
            </div>
          </div>
          <div className="flex">
            <p className="mr-2">{formattedVideoViews}</p>
            <p className="mr-2">{formattedVideoLikes}</p>
            <p className="mr-2">{formattedVideoComments}</p>
          </div>
        </footer>
      </section>
    </section>
  );
}
