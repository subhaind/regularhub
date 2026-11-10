import { useEffect, useRef } from "react";

// Below-the-fold videos: nothing is requested until the player is within ~300px of
// the viewport, so a multi-MB file does not compete with the content people see first.
const LazyVideo = ({ src, type = "video/mp4", rootMargin = "300px", ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const load = () => {
      video.src = src;
      video.load();
      const playing = video.play();
      if (playing && playing.catch) playing.catch(() => {});
    };
    if (!("IntersectionObserver" in window)) {
      load();
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src, rootMargin]);

  return <video ref={ref} preload="none" muted playsInline data-type={type} {...props} />;
};

export default LazyVideo;
