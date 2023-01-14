import React from "react";
import { useRouter } from "next/router";
import { trpc } from "src/utils/trpc";

import Image from "next/image";
import PageContainer from "src/components/containers/PageContainer";
import { iDeal } from "src/types/deals";

import { MdStarRate } from "react-icons/md";

export default function DealPage() {
  const { query } = useRouter();

  const dealQuery = trpc.deals.getById.useQuery(query.slug?.toString() || "");

  const deal:iDeal = dealQuery.data;

  return (
    <PageContainer>
      <div className="sm:py-26 mx-auto px-4 pt-2 pb-20 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between pt-8">
          <Image
            src={deal?.image}
            alt={deal?.title}
            width={1000}
            height={1000}
            className="h-80 max-w-md rounded-2xl object-cover object-center"
          />
          <Image
            src={deal?.image}
            alt={deal?.title}
            width={1000}
            height={1000}
            className="h-80 max-w-md rounded-2xl object-cover object-center"
          />
        </div>
        <div className="flex">
          <div className="w-2/3">
            <h1 className="mt-8 text-2xl font-bold">{deal?.title}</h1>
            <div className="relative flex">
              <Image
                src={deal?.businessImage}
                alt={deal?.businessName}
                width={200}
                height={200}
                className="mt-1 h-8 w-8 rounded-full border-2 border-black object-cover object-center"
              />
              <a
                href={deal?.businessWebsite}
                target="_blank"
                rel="noreferrer"
                className="mt-1 ml-2 text-lg font-semibold text-black"
              >
                {deal?.businessName}
              </a>
            </div>
            <div className="mt-2 flex items-center">
              <MdStarRate className="text-2xl" />
              <p className="flex items-start text-lg font-bold text-black">
                &nbsp;
                {deal?.businessRating}
              </p>
            </div>
            <p className="mt-2 font-semibold text-slate-500 underline">
              Address
            </p>
            <div className="mt-4 h-0.5 w-full bg-slate-600" />
            {/* eslint-disable react/no-unescaped-entities */}
            
          </div>
          <div className="w-md">
            <div className=" sticky top-10 mt-10">
              <div>
                <div className=" flex items-center">
                  <div className="border-2 rounded-xl p-4 ">
                  <button className="mt-4 w-full brand-color text-white font-bold py-2 px-4 rounded">
                      Reedem
                    </button>

                    <button className="mt-4 w-full brand-color text-white font-bold py-2 px-4 rounded">
                      Access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
