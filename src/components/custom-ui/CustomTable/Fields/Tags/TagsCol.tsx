/* eslint-disable @typescript-eslint/no-explicit-any */
import Chip from "../../../Chip";

export default function TagsCol({ props }: { props: any }) {
  const { tags } = props;
  return (
    <>
      {tags.map((tag: string, i: number) => (
        <Chip key={i} theme="ghost" content={"#" + tag} isClickable={true} />
      ))}
    </>
  );
}
