"use client";
import { useRouter } from "next/navigation";

const Card = ({
  id,
  name,
  followers,
  imgurl,
  profileurl,
  audienceType,
  pageType,
  postPricing,
  reelPricing,
  storyPricing,
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(
      `/bid?pageid=${id}&name=${name}&followers=${followers}&audienceType=${audienceType}&pageType=${pageType}&postPricing=${postPricing}&reelPricing=${reelPricing}&storyPricing=${storyPricing}&imgurl=${imgurl}`  
      // `/bid?imgurl=${encodeURIComponent(imgurl)}&name=${encodeURIComponent(name)}`
    );
  };

  return (
    <>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <div class="flex justify-end px-4 pt-4"></div>
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={imgurl}
            alt={name}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {followers} followers
          </span>
          <div class="flex mt-4 md:mt-6" onClick={handlePress}>
            <div class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Bid
            </div>
            <a
              href={profileurl}
              target="_blank"
              class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Visit profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
