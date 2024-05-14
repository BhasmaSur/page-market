"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
  {
    title: "How do I start bidding on ad spaces?",
    desc: "To start bidding, simply create an account on our platform, select the Instagram page where you'd like to advertise, and place your bid through the user-friendly bidding interface. We provide real-time updates to keep you informed on the bidding status.",
  },
  {
    title: "What types of ad spaces are available for bidding?",
    desc: "Our marketplace offers a variety of ad spaces across numerous Instagram pages, ranging from niche markets to broad audiences. You can filter and select ad spaces based on page demographics, reach, and engagement rates.",
  },
  {
    title: "Are there any fees associated with bidding?",
    desc: "There are no fees to create an account or to bid on ad spaces. However, a service fee is applied to the final transaction once you win a bid, ensuring the maintenance and operation of our platform.",
  },
  {
    title: "Can I cancel or withdraw my bid?",
    desc: "Yes, bids can be adjusted or withdrawn before the bidding period closes. However, once the auction ends, the highest bidder is committed to purchasing the ad space at the bid amount.",
  },
  {
    title: "What should I do if I encounter issues during bidding?",
    desc: "Our support team is available to assist you with any issues or questions you may have. Contact us through the help section on our app or website for prompt assistance.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
          >
            Explore how to bid and advertise effectively with our Instagram page marketplace.
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
