export default function Header() {
  return (
    <div className="bg-white rounded-t-xl org-user-tab w-full flex items-center justify-between px-[1rem] py-[1rem] absolute">
      <div className="org-avatar flex items-center gap-[0.6rem]  cursor-pointer">
        <div className="avatar h-full transition-transform hover:scale-105 active:scale-95 ">
          <div className="w-10 rounded-xl">
            <img src="https://cdn.dribbble.com/userupload/5116624/file/original-cb12940e1e88b404209be28630fbafbe.jpg?resize=752x" />
          </div>
        </div>
        <div className="h-full flex flex-col">
          <span className="font-qanelasregular text-[0.9rem] leading-5">
            INC
          </span>
          <span className="font-qanelassemibold text-[1.2rem] leading-5">
            InnovateHub
          </span>
        </div>
      </div>
      <div className="user-avatar avatar flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer">
        <div className="w-9 rounded-3xl">
          <img src="https://cdn.dribbble.com/users/9567364/avatars/normal/29e1e95ca64e12b312ab51d7cd950627.png?1673438081" />
        </div>
      </div>
    </div>
  );
}
