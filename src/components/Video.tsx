import introVideo from '../assets/videos/intro.mp4';

const Video = () => (
  <figure className="absolute z-1 inset-0 w-full h-full m-0">
    <video src={introVideo} loop autoPlay muted className="w-full h-full object-cover" />
  </figure>
);

export default Video;
