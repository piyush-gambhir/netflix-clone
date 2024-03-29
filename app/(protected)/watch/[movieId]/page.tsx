import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { getMovieById } from "@/data/movie";

export default async function Watch({
  params,
}: {
  params: { movieId: string };
}) {
  const movie = await getMovieById(params.movieId);
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <Link href="/browse">
          <ArrowLeftIcon className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
        </Link>
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> {movie?.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        autoPlay
        controls
        src={movie?.videoUrl}
      ></video>
    </div>
  );
}
