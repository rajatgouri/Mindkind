import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { FeedProvider } from "../components/contexts/ToggleFeedContext";
import { AccountProvider } from "src/components/contexts/ToggleAccountContext";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AccountProvider>
        <FeedProvider>
          <Component {...pageProps} />
        </FeedProvider>
      </AccountProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
