"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

function Hero() {

  const router = useRouter();

  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
          >
            Revolutionize Your Ads on Instagram
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
            Connect directly with top Instagram pages and bid for your ad space in real-time. Gain control, maximize engagement, and ensure your campaign reaches the perfect audience. Start transforming your digital advertising strategy today!
          </Typography>
          <Button size="lg" color="gray" onClick={() => {
            router.push('/market')
          }}>
            Start Bidding
          </Button>
        </div>
        <div className="mt-40 grid gap-6 lg:mt-0">
          <div className="grid grid-cols-4 gap-6">
            <Image
              width={768}
              height={768}
              src="https://res.cloudinary.com/dznv29nlm/image/upload/v1713681992/acgoydgrenlfphvrmrgv.jpg"
              className="-mt-7 rounded-lg shadow-md"
              alt="bms"
            />
            <Image
              width={768}
              height={768}
              src="https://res.cloudinary.com/dznv29nlm/image/upload/v1713682362/qkfvmo4dwwcngx4ldkyu.jpg"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="https://res.cloudinary.com/dznv29nlm/image/upload/v1713682467/gmkfkx8cgfmzhv3nivqo.jpg"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="https://res.cloudinary.com/dznv29nlm/image/upload/v1713682583/sytkkgwrsdkomqmj2aic.jpg"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
          <div className="grid grid-cols-4 gap-6 mt-8">
            <div></div>
            <Image
              width={768}
              height={768}
              src="https://res.cloudinary.com/dznv29nlm/image/upload/v1713682649/glwbtrnookpeno3w76qt.jpg"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="https://res.cloudinary.com/dznv29nlm/image/upload/v1713684554/hab9s0y0rlunn2gxyt6e.jpg"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="https://res.cloudinary.com/dznv29nlm/image/upload/v1713684631/sekkvgo45rxksine2hdv.jpg"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
