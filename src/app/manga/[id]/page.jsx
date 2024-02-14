"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mangaData } from "@/public/data/mangaData";

import Navbar from "@/src/components/Element/Navbar";
import Feedback from "@/src/components/Element/Feedback";

export default function AnimeId() {
  const path = usePathname();
  const id = path.slice(7) - 1;

  const { data } = mangaData;
  const poster = data[id].attributes.posterImage.medium;
  const title = data[id].attributes.canonicalTitle;
  const detail = data[id].attributes.description;
  const start = data[id].attributes.startDate;
  const youtube = data[id].attributes.youtubeVideoId;
  const feedback = data[id].feedbacks;

  const yt = `https://www.youtube.com/embed/${youtube}`;

  return (
    <div>
      <div className="p-2">
        <Navbar />
      </div>
      <div className=" md:flex md:flex-row md:justify-between">
        <div className="p-4">
          <img
            src={poster}
            alt="Poster"
            style={{ width: 450 }}
            className="object-contain rounded-md border-2 border-button"
          />
        </div>
        <div className="p-4">
          <h1 className="pb-4 text-5xl font-bold text-center">{title}</h1>

          <div className="flex py-4 justify-center">
            <div className="bg-button text-bg p-1 px-2 mx-2 rounded-md">
              <p className="font-semibold">Start : {start}</p>
            </div>
          </div>

          <p className="py-4 text-lg text-button max-w-5xl text-justify">
            <span className="py-2 font-bold">Info : </span>
            {`${detail.slice(0, 850)}...`}
          </p>

          <div id="membershipDiv" className="flex justify-center py-4">
            <Link
              href="https://rzp.io/i/9y4vDreOC9"
              target="_blank"
              className="p-1 px-2 mb-4 bg-purple text-light font-semibold rounded-md"
            >
              Get Membership - ₹199
            </Link>
          </div>

          <Feedback feedbacks={feedback} />

          <div>
            <iframe
              className="w-full h-96 rounded-md py-4"
              src={yt}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
