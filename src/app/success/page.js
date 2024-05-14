"use client"

import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md space-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto w-20 h-20 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Thank You!
        </h1>
        <p className="text-center text-base text-gray-600 sm:text-lg">
          Thank you for your bidding! Our team will contact you shortly.
        </p>
        <a
          href="#"
          className="flex items-center justify-center px-4 py-2 text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => router.push("market")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <span className="text-sm font-medium">MarketPlace</span>
        </a>
      </div>
    </div>
  );
};

export default Success;
