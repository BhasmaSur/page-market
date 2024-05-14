"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import BookCard from "./components/book-card";

const BOOKS = [
  {
    img: `https://res.cloudinary.com/dznv29nlm/image/upload/v1713681992/acgoydgrenlfphvrmrgv.jpg`,
    category: "bmsx2gang",
    title: "Bhaiya Meme Sena",
    desc: "Oc content meme page",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://res.cloudinary.com/dznv29nlm/image/upload/v1713682362/qkfvmo4dwwcngx4ldkyu.jpg`,
    category: "changotarlee",
    title: "Middle School: The Worst Years of My Life",
    desc: "A funny and relatable novel about the challenges of navigating middle school.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://res.cloudinary.com/dznv29nlm/image/upload/v1713682467/gmkfkx8cgfmzhv3nivqo.jpg`,
    category: "Helen W. Colby",
    title: "College Student: A Comprehensive Checklist",
    desc: "A practical guidebook that helps college students prepare for the transition to university.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://res.cloudinary.com/dznv29nlm/image/upload/v1713682583/sytkkgwrsdkomqmj2aic.jpg`,
    category: "Walter Pauk",
    title: "How to Study in College",
    desc: "A valuable resource for high school seniors and college freshmen, offering effective study strategies.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://res.cloudinary.com/dznv29nlm/image/upload/v1713682649/glwbtrnookpeno3w76qt.jpg`,
    category: "William Strunk Jr.",
    title: "The Elements of Style",
    desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://res.cloudinary.com/dznv29nlm/image/upload/v1713684554/hab9s0y0rlunn2gxyt6e.jpg`,
    category: "William Strunk Jr.",
    title: "The Elements of Style",
    desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
    price: "$99",
    offPrice: "$79",
  },
];

const BOOKS_TABS = [
  "Meme",
  "Health",
  "Sports",
  "Gaming",
  "business",
  "communication",
];

export function BackToSchoolBooks() {
  const [activeTab, setActiveTab] = React.useState("Meme");

  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-3 font-bold uppercase"
        >
          Premium Instagram Pages
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-2">
          Explore Top Instagram Listings
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
        >
          Connect with established Instagram pages in various niches and take
          your digital presence to the next level. Invest in a community and
          content that resonates with your brand.
        </Typography>
        <div className="mt-20 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full lg:w-8/12">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-gray-900 rounded-lg",
              }}
            >
              {BOOKS_TABS.map((book) => (
                <Tab
                  key={book}
                  value={book}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === book ? "text-white" : "capitalize"}
                  `}
                  onClick={() => setActiveTab(book)}
                >
                  {book}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {BOOKS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
      <div className="grid place-items-center">
        <Button className="mt-32" variant="outlined">
          Show more
        </Button>
      </div>
    </section>
  );
}

export default BackToSchoolBooks;
