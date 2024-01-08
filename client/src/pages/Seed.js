import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SEEDS } from "../utils/queries";
import { chakra } from "@chakra-ui/react";

const Seed = () => {
  // On page load, attempt to run seeds
  const { loading, data } = useQuery(QUERY_SEEDS);

  // Once the data object is returned from useQuery(), log the data
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data, loading]);

  return <chakra.div></chakra.div>;
};

export default Seed;
