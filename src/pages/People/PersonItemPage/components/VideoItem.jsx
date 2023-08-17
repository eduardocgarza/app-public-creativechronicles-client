import React from "react";
import numberToShorthand from "../../../../helpers/numberToShorthand";
import moment from "moment";

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

  const formattedPublishedDate = moment(youtubeVideoPublishedDate).format(
    "MMM D, YYYY"
  );
  const formattedEventDate = moment(dateEvent).format("MMM D, YYYY");

  return (
    <section className="mb-6">
      <a
        className="block mb-2"
        href={youtubeVideoURL}
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="block w-full md:rounded-2xl md:hover:rounded-lg transition-border duration-[400ms]"
          src={youtubeVideoThumbnailMediumURL}
          alt={youtubeVideoTitle}
        />
      </a>
      <section>
        <a
          className="block text-sm font-medium mb-2 px-4 md:px-2"
          href={youtubeVideoURL}
          rel="noreferrer"
          target="_blank"
        >
          {youtubeVideoTitle}
        </a>
        <div className="flex items-center mb-2 px-4 md:px-2">
          <a
            className="block w-[40px] h-[40px] overflow-hidden rounded-full"
            href={youtubeChannelURL}
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="block object-cover w-full h-full"
              src={youtubeChannelThumbnailSmallURL}
              alt={youtubeChannelName}
            />
          </a>
          <div className="flex-1 ml-2">
            <a
              className="block text-sm font-medium"
              href={youtubeChannelURL}
              rel="noreferrer"
              target="_blank"
            >
              {youtubeChannelName}
            </a>
            <p className="text-xs opacity-50">{formattedChannelSubscribers}</p>
          </div>
        </div>
        <footer className="py-2 text-xs px-4 md:px-2">
          <div className="flex flex-wrap mb-3">
            <p className="flex items-center justify-center bg-gray-100 rounded-full px-2 py-1 text-gray-700 mr-2 mb-1">
              {formattedVideoViews}
            </p>
            <p className="flex items-center justify-center bg-gray-100 rounded-full px-2 py-1 text-gray-700 mr-2 mb-1">
              {formattedVideoLikes}
            </p>
            <p className="flex items-center justify-center bg-gray-100 rounded-full px-2 py-1 text-gray-700 mr-2">
              {formattedVideoComments}
            </p>
          </div>
          <div className="flex sm:flex-col">
            <div className="flex mr-2 md:mr-0 mb-1">
              <h3 className="font-medium mr-2">Published on</h3>
              <p className="opacity-50">{formattedPublishedDate}</p>
            </div>
            <div className="flex mr-2 md:mr-0">
              <h3 className="font-medium mr-2">Event on</h3>
              <p className="opacity-50">{formattedEventDate}</p>
            </div>
          </div>
        </footer>
      </section>
    </section>
  );
}
