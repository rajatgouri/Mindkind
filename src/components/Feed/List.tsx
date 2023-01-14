import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { trpc } from "../../utils/trpc";
// Icons
import { MdFavoriteBorder, MdStarRate } from "react-icons/md";
// import { iDeal } from 'src/types/deals'

export default function List() {

  const dealQuery = trpc.deals.getAll.useQuery();
  const [deals, setDeals]: any  = useState([
    {
      id: 1,
      title: "Cardinal",
      img: "https://images.unsplash.com/photo-1670518962076-7e1320ba6215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      business_name: "24 Restaurant",
      business_img:
        "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_rating: 4,
      price: 10,
      value: 20,
    },
    {
      id: 2,
      title: "Cardinal",
      img: "https://images.unsplash.com/photo-1670871139297-a0fa99ec523d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      business_name: "24 Restaurant",
      business_img:
        "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_rating: 4,
      price: 10,
      value: 20,
    },
    {
      id: 3,
      title: "Cardinal",
      img: "https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_name: "24 Restaurant",
      business_img:
        "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_rating: 4,
      price: 10,
      value: 20,
    },
    {
      id: 4,
      title: "Cardinal",
      img: "https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_name: "24 Restaurant",
      business_img:
        "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_rating: 4,
      price: 10,
      value: 20,
    },
    {
      id: 5,
      title: "Cardinal",
      img: "https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_name: "24 Restaurant",
      business_img:
        "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_rating: 4,
      price: 10,
      value: 20,
    },
    {
      id: 6,
      title: "Cardinal",
      img: "https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_name: "24 Restaurant",
      business_img:
        "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_rating: 4,
      price: 10,
      value: 20,
    },
    {
      id: 7,
      title: "Cardinal",
      img: "https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_name: "24 Restaurant",
      business_img:
        "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_rating: 4,
      price: 10,
      value: 20,
    },
    {
      id: 8,
      title: "Cardinal",
      img: "https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_name: "24 Restaurant",
      business_img:
        "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      business_rating: 4,
      price: 10,
      value: 20,
    },
  ]);

  return (
    <div className="sm:py-26 mx-auto px-4 pt-2 pb-20 sm:px-6  lg:max-w-7xl lg:px-8 2xl:max-w-screen-2xl">
      <div className="mt-2 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 ms:grid-cols-3 ml:grid-cols-4 2xl:grid-cols-5">
        {dealQuery.data?.map((deal: any) => (
          <div key={deal.id} className="group relative">
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl group-hover:opacity-75 ">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  width={600}
                  height={600}
                  className="h-full w-full rounded-2xl object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="absolute bottom-2 right-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white text-center font-bold">
                <p className="mb-1 text-2xs">
                  1% <br />
                  cash back
                </p>
              </div>
              <div className="absolute top-2 right-4">
                <MdFavoriteBorder className="text-3xl text-gray-500" />
              </div>
            </div>
            <div className="mt-4 flex">
              <div className="w-full">
                <h3 className="text-2xl font-bold">
                  <Link href={`/deal/${deal.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {deal.title}
                  </Link>
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <Image
                      src={deal.businessImage}
                      alt={deal.businessName}
                      width={200}
                      height={200}
                      className="mt-1 h-8 w-8 rounded-full border-2 border-black object-cover object-center"
                    />
                    <p className="mt-1 ml-2 text-lg font-semibold text-black ">
                      {deal.businessName}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <MdStarRate className="text-2xl" />
                    <p className="flex items-start text-lg font-bold text-black">
                      &nbsp;
                      {deal.businessRating}
                    </p>
                  </div>
                </div>
                <p className="mt-1 font-semibold text-black">0.4 miles away</p>
                <p className="mt-1 font-semibold text-black">10+ deals left</p>
                <div className="mt-2 flex">
                  <p className="mr-4 text-xl text-gray-400 line-through">
                    ${deal.value}
                  </p>
                  <p className="mr-4 text-xl font-bold text-black">
                    ${deal.price}
                  </p>
                  <div className="brand-color-opaque flex justify-center rounded-lg p-2 text-lg font-bold">
                    <Image
                      src="/50off.svg"
                      alt="50% off"
                      width={80}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
