import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useLanguage } from "@/context/LanguageProvider";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function NavList() {
  const { isEnglish } = useLanguage();

  const links = [
    { href: "#home", label: isEnglish ? "Home" : "Início" },
    { href: "#about", label: isEnglish ? "About" : "Sobre" },
    { href: "#experience", label: isEnglish ? "Experience" : "Experiência" },
    { href: "#skills", label: isEnglish ? "Skills" : "Habilidades" },
    { href: "#projects", label: isEnglish ? "Projects" : "Projetos" },
    { href: "#contact", label: isEnglish ? "Contact" : "Contato" },
  ];
  return (
    <Menu as="div" className="absolute left-4 top-10 inline-block text-left">
      <div>
        <Menu.Button>
          <AiOutlineMenu className="h-7 w-7" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 w-32 origin-top-right rounded-md bg-backgroundLight shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-backgroundDark dark:ring-zinc-300 ">
          <div className="py-1">
            {links.map((link) => (
              <Menu.Item key={link.label}>
                {({ active }) => (
                  <a
                    href={link.href}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 dark:bg-zinc-700/40 dark:text-zinc-200 "
                        : "text-gray-700 dark:text-zinc-300",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
export default NavList;
