import { NavButton } from "../components/NavButton";

export function NavBar() {
  const navItems = ["Bio", "Experience", "Projects", "Contact"];

  const handleNavClick = (item: string) => {
    console.log(`Clicked: ${item}`);
  };

  const navButtons = navItems.map((item) => (
    <NavButton key={item} text={item} onClick={() => handleNavClick(item)} />
  ));

  return (
    <div className="pt-5 px-5 pb-2 border-b-2 border-gray-400">
      <div className="flex flex-col justify-end items-center md:flex-row md:items-center md:gap-8">
        <div className=" mr-auto">Norja Diesel</div>
        {navButtons}
      </div>
    </div>
  );
}
