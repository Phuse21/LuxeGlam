import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import ReactPlayer from "react-player";

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <button className="relative w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-accent">
            <Image
              src="/assets/home/play.svg"
              width={36}
              height={36}
              alt="play"
            />
          </button>
          <span className="text-lg font-primary">Watch Video</span>
        </div>
      </DialogTrigger>
      <DialogTitle className="hidden">Youtube Video</DialogTitle>
      <DialogContent>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          muted
          url="https://www.youtube.com/watch?v=Er5a7snyQKM"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
