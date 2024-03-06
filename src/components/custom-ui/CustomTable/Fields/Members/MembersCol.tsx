/* eslint-disable @typescript-eslint/no-unused-vars */
export default function MembersCol() {
  return (
    <td className="overflow-y-scroll no-scrollbar w-full h-full flex items-center justify-between border-r border-b border-slate-300 px-[1rem] py-[0.6rem] text-slate-700 font-qanelassemibold whitespace-nowrap">
      <div className="avatar-group -space-x-4 rtl:space-x-reverse">
        {[
          ...Array.from({ length: 3 }, (_) => (
            <div className="avatar transition-transform hover:scale-105 active:scale-95 cursor-pointer">
              <div className="w-[2.2rem]">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          )),
          <div className="avatar placeholder transition-transform hover:scale-105 active:scale-95 cursor-pointer">
            <div className="w-[2.2rem] bg-gray-200 text-gray-500 font-qanelasmedium">
              <span>99+</span>
            </div>
          </div>,
        ].map((avatar) => avatar)}
      </div>
    </td>
  );
}
