import React from "react";
import Image from "next/image";

export default function MapItemList() {
  const deals = [
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
  ];

  return (
    <div className="absolute top-0 left-0 z-10 h-full w-96 overflow-y-auto scrollbar-hide">
      {deals.map((item) => (
        <div className="m-4 flex items-center overflow-hidden rounded-lg bg-white ">
          <img src={item.img} className="h-40 w-40 object-cover" />
          <div className="flex flex-col  justify-center px-2">
            <p className="text-2xl font-bold">{item.title}</p>
            <p className="font-semibold">10+ tickets left</p>
            <p className="">Happens on 12/15/22</p>
            <div className="mt-2 flex">
              <p className="mr-2 text-gray-400 line-through">
                ${item.value}
              </p>
              <p className="mr-2 font-bold text-black">${item.price}</p>
              <div className="brand-color-opaque flex justify-center rounded-lg p-2 text-lg font-bold">
                <Image src="/50off.svg" alt="50% off" width={80} height={20} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
