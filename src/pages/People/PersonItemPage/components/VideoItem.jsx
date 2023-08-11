import React from "react";
import numberToShorthand from "../../../../helpers/numberToShorthand";

export default function VideoItem(props) {
  const { videoResource } = props;
  const {
    videoID,
    youtubeVideoID,
    youtubeVideoURL,
    youtubeVideoTitle,
    youtubeVideoViews,
    youtubeVideoLikes,
    youtubeVideoComments,
    youtubeVideoDuration,
    youtubeVideoPublishedDate,
    youtubeVideoThumbnailSmallURL,
    youtubeVideoThumbnailMediumURL,
    youtubeVideoThumbnailLargeURL,
    appVideoThumbnailSmallURL,
    appVideoThumbnailMediumURL,
    appVideoThumbnailLargeURL,
    dateEvent,
    dateLastUpdated: dateVideoLastUpdated,
  } = videoResource.video;

  const {
    channelID,
    youtubeChannelID,
    youtubeChannelURL,
    youtubeChannelName,
    youtubeChannelSubscribers,
    dateLastUpdated: dateChannelLastUpdated,
    youtubeChannelThumbnailSmallURL,
    youtubeChannelThumbnailMediumURL,
    youtubeChannelThumbnailLargeURL,
    appChannelThumbnailSmallURL,
    appChannelThumbnailMediumURL,
    appChannelThumbnailLargeURL,
  } = videoResource.channel;

  console.log("videoResource: ", videoResource);

  /**
   * @Constants
   */
  const formattedChannelSubscribers = `${numberToShorthand(
    youtubeChannelSubscribers
  )} subscribers`;

  const formattedVideoViews = `${numberToShorthand(youtubeVideoViews)} views`;
  const formattedVideoLikes = `${numberToShorthand(youtubeVideoLikes)} likes`;
  const formattedVideoComments = `${numberToShorthand(
    youtubeVideoComments
  )} comments`;

  return (
    <section className="flex mb-4">
      <a
        className="block"
        href={youtubeVideoURL}
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="block rounded-3xl w-[250px]"
          // src={thumbnailURL}
          src={youtubeVideoThumbnailMediumURL}
          alt={youtubeVideoTitle}
        />
      </a>
      <section className="py-2 px-4 flex-1">
        <a
          className="block text-xl font-medium mb-4"
          href={youtubeVideoURL}
          rel="noreferrer"
          target="_blank"
        >
          {youtubeVideoTitle}
        </a>
        <div className="flex items-center mb-4">
          <a
            className="block w-[50px] h-[50px] overflow-hidden rounded-full"
            href={youtubeChannelURL}
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="block object-cover w-full h-full"
              // src={channelThumbnailURL}
              src={youtubeChannelThumbnailSmallURL}
              alt={youtubeChannelName}
            />
          </a>
          <div className="flex-1 ml-2">
            <a
              className="block text-sm font-medium mb-1"
              href={youtubeChannelURL}
              rel="noreferrer"
              target="_blank"
            >
              {youtubeChannelName}
            </a>
            <p className="text-xs opacity-50">{formattedChannelSubscribers}</p>
          </div>
        </div>
        <footer className="bg-gray-100 p-4 rounded-2xl text-xs opacity-[85%]">
          <div className="flex mb-1">
            <div className="flex mr-2">
              <h3 className="font-medium mr-2">Event date</h3>
              <p className="opacity-50">{youtubeVideoPublishedDate}</p>
            </div>
            <div className="flex">
              <h3 className="font-medium mr-2">Event date</h3>
              <p className="opacity-50">{dateEvent}</p>
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
