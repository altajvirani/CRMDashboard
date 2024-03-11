// import Chip from "../../../Chip";

// export default function CategoriesCol() {
//   return (
//     <td className="overflow-y-scroll no-scrollbar w-full h-full flex items-center justify-start border-r border-b border-slate-300 px-[1rem] py-[0.6rem] text-slate-700 font-qanelassemibold whitespace-nowrap gap-[0.4rem]">
//       <Chip theme="danger" content={"E-Commerce"} isClickable={true} />
//       <Chip theme="warning" content={"B2B"} isClickable={true} />
//     </td>
//   );
// }

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
