/* eslint-disable @typescript-eslint/no-unused-vars */
export default function MembersCol() {
  return (
    <div className="avatar-group -space-x-[1rem] rtl:space-x-reverse">
      {[
        ...Array.from({ length: 3 }, (_, i: number) => (
          <div
            key={i}
            className="avatar w-[2.75rem] h-[2.75rem] border-[0.25rem] rounded-3xl transition-transform hover:scale-105 active:scale-95 cursor-pointer">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        )),
        <div
          key={3}
          className="avatar w-[2.75rem] h-[2.75rem] border-[0.25rem] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-gray-200 text-gray-500 font-qanelasmedium">
          <span className="leading-[0.8rem]">99+</span>
        </div>,
      ].map((avatar) => avatar)}
    </div>
  );
}
