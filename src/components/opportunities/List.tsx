// import Link from "next/link";
// import Image from "next/image";

// export default function List() {
//   return (
//     <>
//       <div className="col-span-3...">05</div>


//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { trpc } from "../../utils/trpc";
// Icons
import { MdFavoriteBorder, MdStarRate } from "react-icons/md";
// import { iDeal } from 'src/types/deals'

export default function List() {

  const dealQuery = trpc.deals.getAll.useQuery();
  const [deals, setDeals]: any = useState([
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
    <>
      <div className="ms:col-start-2 col-span-2 ms:mt-0 mt-5">
        <div className="grid grid-cols-1 gap-y-5  sm:grid-cols-1 md:grid-cols-1 ">
          {dealQuery.data?.map((deal: any) => (
            <div key={deal.id} className="group relative max-w-xl">
              <div className="relative shadow-xl">
                <div className="grid  grid-cols-2 gap-y-10   sm:grid-cols-2 md:grid-cols-2 ">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl group-hover:opacity-75 ">
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      width={600}
                      height={600}
                      className="h-full w-full rounded-2xl object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="border-r border-b border-t rounded-lg ml-2">
                    <div className="font-bold text-lg">Deal title</div>

                    <div className=" text-lg absolute top-[45%] ">Business name</div>

                    <div className="  absolute bottom-2">Happens on 12/10/2022</div>


                  </div>
                </div>
              </div>
              <div className="mt-4 flex">
                <div className="w-full">
                  <h3 className="text-2xl font-bold">
                    <Link href={`/opportunities/${deal.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />

                    </Link>
                  </h3>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
   
  );
}
