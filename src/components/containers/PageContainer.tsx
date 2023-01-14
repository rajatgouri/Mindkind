import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "../Footer";
import SimpleNav from "src/components/nav/SimpleNav";

export default function PageContainer(props: {
  [x: string]: any;
  children: any;
}) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Deals, discounts and experiences - MindKind",
    description: `MindKind is the platform connecting our community builders. Find deals and access experiences created by local businesses.`,
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://mindkind.life${router.asPath}`}
        />
        <link rel="canonical" href={`https://mindkind.life${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <SimpleNav />
      <main
      className="sm:py-26 mx-auto px-4 pt-2 pb-20 sm:px-6 lg:max-w-7xl lg:px-8"
      // className="flex flex-col justify-center px-8 bg-gray-50"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
