import tips from "./tipsData";
import { shuffle } from "lodash";

export const getRandomTip = () => {
  return shuffle(tips)[0].tip;
};
