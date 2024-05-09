"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "./components/feature-card";
import {
  UserIcon,
  ClockIcon,
  LifebuoyIcon 
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: UserIcon,
    title: "Wide Range of Pages",
    description:
      "Access a diverse selection of Instagram pages from various niches to find the perfect match for your campaign.",
  },
  {
    icon: ClockIcon,
    title: "Real-Time Bidding",
    description:
      "Experience the thrill of live bidding for ad spaces on your chosen Instagram pages in real time.",
  },
  {
    icon: LifebuoyIcon ,
    title: "Dedicated Support",
    description:
      "Our expert team is always ready to help you optimize your campaigns and answer any queries 24/7.",
  },
];

export function GetYourBookFromUs() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
        Elevate Your Instagram Advertising
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-5/12"
        >
          Engage directly with pages and maximize your brand's impact on Instagram through targeted advertisement placements.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;
