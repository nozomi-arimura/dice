import Head from "next/head";
import { Inter } from "@next/font/google";
import { useMemo, useRef, useState } from "react";
import DiceQuantitySelect from "../components/logic/DiceQuantitySelect";
import Dice from "../components/ui/Dice";
import useDice from "../hooks/useDice";
import styles from "../styles/page/index.module.scss";
export default function Home() {
  const [diceQuantity, setDiceQuantity] = useState(1);
  const { dices, rollDice } = useDice({ quantity: diceQuantity });
  const rolledRef = useRef(false); //rollDiceが動いた際に再レンダリングが走るため、refで問題ない
  const rolled = rolledRef.current;
  const total = useMemo(
    () =>
      dices.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.value;
      }, 0),
    [dices]
  );
  return (
    <>
      <Head>
        <title>サイコロコロ</title>
        <meta name="description" content="サイコロを回すよ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.controller}>
          <DiceQuantitySelect
            onChange={setDiceQuantity}
            quantity={diceQuantity}
          />
          <button
            onClick={() => {
              rolledRef.current = true;
              rollDice();
            }}
          >
            回す
          </button>
        </div>
        {rolled && (
          <div className={styles.result}>
            <div>TOTAL</div>
            {total}
          </div>
        )}
      </header>
      <main>
        {rolled && (
          <div className={styles.dices}>
            {dices.map(({ value }, index) => (
              <Dice diceNum={value} key={index} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
