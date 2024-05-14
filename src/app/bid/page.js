"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

const Bid = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageid = searchParams.get("pageid");
  const name = searchParams.get("name");
  const followers = searchParams.get("followers");
  const audienceType = searchParams.get("audienceType");
  const pageType = searchParams.get("pageType");
  const postPricing = parseFloat(searchParams.get("postPricing"));
  const reelPricing = parseFloat(searchParams.get("reelPricing"));
  const storyPricing = parseFloat(searchParams.get("storyPricing"));
  const imgurl = searchParams.get("imgurl");

  const [username, setName] = useState();
  const [contact, setContact] = useState();
  const [desc, setDesc] = useState();
  const [email, setEmail] = useState();
  const [rqst, setRqst] = useState();

  const [selectedOptions, setSelectedOptions] = useState({
    story: storyPricing !== null,
    post: false,
    reel: false,
  });

  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculatePrice();
  }, [selectedOptions]);

  const handleSubmit = () => {
    const serviceID = "service_a7avyx6";
    const templateId = "template_uq73kss";
    const publicKey = "UG1eXYC9xIK21-rub";



    const templateParams = {
        from_name: username,
        from_email: email,
        from_contact: contact,
        from_description: desc,
        from_request: rqst
    }

    emailjs.send(serviceID, templateId, templateParams, publicKey)
    .then((response) => {
        console.log("Successfully sent:",response)
        router.push('success')
    }),
    (error) => {
        console.log('FAILED...', error.text);
    }
  };

  const calculatePrice = () => {
    let newPrice = 0;
    if (selectedOptions.story) newPrice += storyPricing || 0;
    if (selectedOptions.post) newPrice += postPricing || 0;
    if (selectedOptions.reel) newPrice += reelPricing || 0;
    setPrice(newPrice);
    setTotal(newPrice + 8); // Assuming a fixed shipping cost of ₹8
  };

  const handleSelectionChange = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">
          PageMarket
        </a>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src={imgurl}
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{name}</span>
                <span className="float-right text-gray-400">
                  {followers} Followers
                </span>
                <p className="text-lg font-bold">₹{price}</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium">Available Bidding</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="checkbox_story"
                type="checkbox"
                checked={selectedOptions.story}
                onChange={() => handleSelectionChange("story")}
                disabled={storyPricing === null}
              />
              <label
                className={`peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 ${
                  storyPricing == NaN ? "opacity-50" : ""
                }`}
                htmlFor="checkbox_story"
              >
                <img
                  className="w-14 object-contain"
                  src="https://res.cloudinary.com/dznv29nlm/image/upload/v1714752603/xcjm8dxcfyquiodqtbom.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Story Bidding</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Price: ₹{storyPricing}
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="checkbox_post"
                type="checkbox"
                checked={selectedOptions.post}
                onChange={() => handleSelectionChange("post")}
                disabled={postPricing === null}
              />
              <label
                className={`peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 ${
                  postPricing == null ? "opacity-50" : ""
                }`}
                htmlFor="checkbox_post"
              >
                <img
                  className="w-14 object-contain"
                  src="https://res.cloudinary.com/dznv29nlm/image/upload/v1714752748/urz1zcqzaztroedlbwgv.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Post Bidding</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Price:{" "}
                    {isNaN(postPricing) ? "Not available" : "₹" + postPricing}
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="checkbox_reel"
                type="checkbox"
                checked={selectedOptions.reel}
                onChange={() => handleSelectionChange("reel")}
                disabled={reelPricing === null}
              />
              <label
                className={`peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 ${
                  reelPricing == null ? "opacity-50" : ""
                }`}
                htmlFor="checkbox_reel"
              >
                <img
                  className="w-14 object-contain"
                  src="https://res.cloudinary.com/dznv29nlm/image/upload/v1714754475/d2stfw95dld5ey27ioek.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Reel Bidding</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Price:{" "}
                    {isNaN(reelPricing) ? "Not available" : "₹" + reelPricing}
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Bidding Details</p>
          <div>
            {/* Additional user information fields */}
            <label
              for="user-name"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="user-name"
              name="user-name"
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Full name"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for="user-name"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="name@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              for="contact"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label
              for="ad-description"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Advertisement Description
            </label>
            <textarea
              id="ad-description"
              name="ad-description"
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Describe your advertisement"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label
              for="additional-requests"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Additional Requests
            </label>
            <textarea
              id="additional-requests"
              name="additional-requests"
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Any special requests or requirements"
              value={rqst}
              onChange={(e) => setRqst(e.target.value)}
            />
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">₹{price}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">₹8.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">₹{total}</p>
            </div>
          </div>
          <button
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            onClick={handleSubmit}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Bid;
