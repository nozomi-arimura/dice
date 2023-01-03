import { useCallback, useState } from "react";
import { getDiceNumber } from "../utils/dice";

export type useDiceArgs = {
  quantity: number;
};
export type Dice = {
  value: number;
};
const getDices = (quantity: number) =>
  new Array(quantity).fill(0).map(() => ({ value: getDiceNumber() }));
export default function useDice({ quantity }: useDiceArgs) {
  const [dices, setDices] = useState<Dice[]>(getDices(quantity));

  const rollDice = useCallback(() => setDices(getDices(quantity)), [quantity]);

  return { dices, rollDice };
}
