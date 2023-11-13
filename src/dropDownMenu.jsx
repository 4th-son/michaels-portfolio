function DropDownMenu() {
  return (
    <div className=" dropdown_menu md:hidden flex flex-col h-80 w-44 top-14 right-8 absolute bg-bg2 rounded-md">
      <ul className=" flex flex-col gap-4 text-customBlue font-semibold text-center cursor-pointer ">
        <button className=" text-amber-500 text-end"></button>
        <li className=" pt-4  font-bold capitalize text-white hover:text-amber-400 border-b-2 border-transparent shadow-md">
          <a href="">Home</a>
        </li>
        <li className=" pt-4 font-bold capitalize text-white hover:text-amber-400 border-t-2 border-transparent shadow-md ">
          <a href="">About Me</a>
        </li>
        <li className=" pt-4 font-bold capitalize text-white hover:text-amber-400 border-t-2 border-transparent shadow-md ">
          <a href="">Services</a>
        </li>
        <li className=" pt-4 font-bold capitalize text-white hover:text-amber-400 border-t-2 border-transparent shadow-md ">
          <a href="">Skills</a>
        </li>
        <li className=" pt-4 font-bold capitalize text-white hover:text-amber-400 ">
          <a href="">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
