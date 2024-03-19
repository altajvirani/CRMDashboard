/* eslint-disable @typescript-eslint/no-unused-vars */
export default function MembersCol() {
  let lastIndex = 0;
  return (
    <div className="avatar-group -space-x-[0.8rem] rtl:space-x-reverse">
      {[
        ...Array.from({ length: 6 }, (_, i: number) => {
          lastIndex = i + 1;
          return (
            <div
              key={i}
              className="avatar w-[2.1rem] h-[2.1rem] border-[0.15rem] rounded-3xl transition-transform hover:scale-105 active:scale-95 cursor-pointer">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          );
        }),
        <div
          key={lastIndex}
          className="avatar w-[2.1rem] h-[2.1rem] border-[0.15rem] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-gray-200 text-gray-500 font-qanelasmedium text-[0.8rem]">
          <span className="leading-[0.8rem]">{`99+`}</span>
        </div>,
      ].map((avatar) => avatar)}
    </div>
  );
}
