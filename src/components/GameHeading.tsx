import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const Games = gameQuery.genre?.name === "Board Games" ? "" : "Games";
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } ${Games}`;

  return (
    <Heading as="h1" marginBottom={7} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
