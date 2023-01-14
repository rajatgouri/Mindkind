import React, {useContext} from "react";

import FeedContainer from "src/components/containers/FeedContainer";
import List from "src/components/feed/List";
import Map from "src/components/feed/Map";

import ListFilter from "src/components/filters/ListFilter";
import MapFilter from "src/components/filters/MapFilter";

import { FeedContext, FeedContextType } from "src/components/contexts/ToggleFeedContext";


export default function Home() {

  const { feed } = useContext<FeedContextType>(FeedContext);

  return (
    <FeedContainer>
      <div className="my-2 flex w-full justify-center">
        {
          feed ? <ListFilter /> : <MapFilter />
        }
      </div>

      {
        feed ? <List /> : <Map />
      }
      </FeedContainer>
  );
}
