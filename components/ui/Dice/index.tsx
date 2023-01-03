import { DiceProps } from "./type";
import styles from "./index.module.scss";
export default function Dice({ diceNum }: DiceProps) {
  return <span className={styles.root}>{diceNum}</span>;
}
