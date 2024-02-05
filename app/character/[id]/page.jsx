"use client";
import Navbar from "@/app/components/Element/Navbar";
import { charData } from "@/public/data/charData";
const { data } = charData;
import { usePathname } from "next/navigation";

export default function CharacterId() {
  const path = usePathname();
  const id = path.slice(11) - 1;

  const banner = data[id].attributes.image.original;
  const title = data[id].attributes.canonicalName;
  const detail = data[id].attributes.description;
  return (
    <div>
      <div className="p-2">
        <Navbar />
      </div>
      <div className="p-4 md:flex md:flex-row md:justify-between">
        <div className="py-4">
          <img
            src={banner}
            alt="banner"
            style={{ width: 415 }}
            className="object-contain rounded-md border-2 border-button"
          />
        </div>
        <div className="md:ml-8">
          <h1 className="py-4 text-5xl font-bold text-center">{title}</h1>
          <p className="py-4 text-lg text-button max-w-5xl text-justify">
            {`${detail.slice(0, 850)}...`}
          </p>
        </div>
      </div>
    </div>
  );
}
