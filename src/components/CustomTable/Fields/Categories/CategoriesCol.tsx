/* eslint-disable @typescript-eslint/no-explicit-any */
import Chip from "../../../Chip";

export default function CategoriesCol({ props }: { props: any }) {
  const { categories } = props;

  const getRandomColorsArray = (count: number) => {
    const colors = [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ];

    const colorsArr: string[] = [];
    const colorsSet: Set<string> = new Set();

    while (colorsArr.length < count) {
      while (
        colorsSet.size < count - colorsArr.length &&
        colorsSet.size < colors.length
      )
        colorsSet.add(colors[Math.floor(Math.random() * colors.length)]);
      colorsArr.push(...Array.from(colorsSet));
      colorsSet.clear();
    }
    return colorsArr;
  };

  const pickedColors: string[] = getRandomColorsArray(categories.length);

  return (
    <>
      {categories.map((cat: string, i: number) => (
        <Chip
          key={i}
          theme={pickedColors[i]}
          content={cat}
          isClickable={true}
        />
      ))}
    </>
  );
}
