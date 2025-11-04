import { useEffect, useRef } from "react";

function DropDownMenu({ onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose && onClose();
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [onClose]);

  return (
    // Absolute overlay anchored near the nav; opaque background so content isn't visible underneath
    <div
      ref={ref}
      className="dropdown_menu md:hidden absolute top-14 right-8 w-44 bg-zinc-900 text-white rounded-md shadow-lg z-50 slide-down"
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700">
        <button
          aria-label="Close menu"
          className="text-zinc-200 hover:text-white p-1 rounded"
          onClick={() => onClose && onClose()}
        >
          ✕
        </button>
      </div>
      <ul className="flex flex-col w-full text-left cursor-pointer">
        <li className="w-full px-4 py-3 font-medium hover:bg-zinc-800">
          <a href="#home" className="block w-full">
            Home
          </a>
        </li>
        <li className="w-full px-4 py-3 font-medium hover:bg-zinc-800">
          <a href="#About me" className="block w-full">
            About Me
          </a>
        </li>
        <li className="w-full px-4 py-3 font-medium hover:bg-zinc-800">
          <a href="#projects" className="block w-full">
            Projects
          </a>
        </li>
        <li className="w-full px-4 py-3 font-medium hover:bg-zinc-800">
          <a href="#skills" className="block w-full">
            Skills
          </a>
        </li>
        <li className="w-full px-4 py-3 font-medium hover:bg-zinc-800">
          <a href="#contact me" className="block w-full">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
