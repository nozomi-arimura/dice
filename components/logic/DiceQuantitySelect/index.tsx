import { DiceQuantitySelectProps } from "./types";

const Index = ({ quantity, onChange }: DiceQuantitySelectProps) => {
  return (
    <>
      サイコロ数
      <input
        max={10}
        type={"number"}
        onChange={({ target: { valueAsNumber } }) => {
          if (Number.isNaN(valueAsNumber) || valueAsNumber < 0) return;
          onChange(valueAsNumber, quantity);
        }}
      />
    </>
  );
};

export default Index;
