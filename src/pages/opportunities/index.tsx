import { Fragment, useContext } from "react";
import PageContainer from "src/components/containers/PageContainer";
import Filter from "src/components/opportunities/Filter";
import List from "src/components/opportunities/List";


import Link from "next/link";
import { trpc } from "src/utils/trpc";
import BottomNav from "src/components/nav/BottomNav";


function BreadCrumb() {
  return (
    <nav className="flex items-center align-middle  mt-10" aria-label="Breadcrumb">
      <Link href="/opportunities" className="text-gray-800 text-2xl font-bold">Opportunities</Link>
    </nav>
  );
}
export default function index() {

  return (
    <PageContainer>
      <BreadCrumb />
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-1 md:grid-cols-1 ms:grid-cols-3 ml:grid-cols-3 2xl:grid-cols-3">
        <Filter />
        <List />
      </div>
      <div className="text-center">
        <BottomNav />
      </div>
    </PageContainer>
  );
}
