export default function sortPersonVideos(videos) {
  return videos.sort((a, b) => {
    const dateA = new Date(a.video.dateEvent).getTime();
    const dateB = new Date(b.video.dateEvent).getTime();
    return dateB - dateA;
  });
}
