import React, { useState } from "react";
import arrowDown from "../../images/icon-arrow-down.svg";
import arrowUp from "../../images/icon-arrow-up.svg";
import todoList from "../../images/icon-todo.svg";
import calendar from "../../images/icon-calendar.svg";
import reminders from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";
import menu from "../../images/icon-menu.svg";
import closeMenu from "../../images/icon-close-menu.svg";

const Navbar = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed flex top-0 right-0 left-0 py-2 px-10 justify-between items-center ">
      <div>
        <h1 className="text-2xl font-bold">snap</h1>
      </div>
      <div className="hidden phone:block" onClick={() => setOpen(!open)}>
        <img src={menu} alt="" />
      </div>
      <div className={` nav w-11/12 phone:hidden ${open ? "open" : ""}`}>
        <div className="nav-items w-full flex px-2">
          <div className="nav-item w-2/3 flex gap-10 text-medium-gray items-center phone:w-full phone:pl-3 phone:gap-5">
            {open && (
              <div
                className="w-full flex justify-end p-3"
                onClick={() => setOpen(!open)}
              >
                <img src={closeMenu} alt="" />
              </div>
            )}
            <div className="relative">
              <button
                className="flex items-center justify-start"
                onClick={() => setOpenFeatures(!openFeatures)}
              >
                Features{" "}
                {openFeatures ? (
                  <img src={arrowUp} alt="" className="ml-2" />
                ) : (
                  <img src={arrowDown} alt="" className="ml-2" />
                )}
              </button>
              {openFeatures && (
                <ul className="drop-item absolute top-8 right-1 shadow-2xl p-5 bg-white rounded-lg w-36 phone:relative phone:top-0 phone:shadow-none phone:right-0 phone:p-3">
                  <li className="flex items-center gap-3 clicked:text-almost-black">
                    <img src={todoList} alt="" />
                    <p>Todo List</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src={calendar} alt="" />
                    Calendar
                  </li>
                  <li className="flex items-center gap-3 ">
                    <img src={reminders} alt="" />
                    <p>Reminders</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src={planning} alt="" />
                    <p>Planning</p>
                  </li>
                </ul>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center justify-start"
                onClick={() => setOpenCompany(!openCompany)}
              >
                Company
                {openCompany ? (
                  <img src={arrowUp} alt="" className="ml-2" />
                ) : (
                  <img src={arrowDown} alt="" className="ml-2" />
                )}
              </button>
              {openCompany && (
                <ul className="drop-item absolute top-8 shadow-xl p-6 bg-white rounded-lg w-32 phone:relative phone:top-0 phone:shadow-none phone:right-0 phone:p-3">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              )}
            </div>
            <div>
              <button className="hover:text-almost-black">Careers</button>
            </div>
            <div>
              <button className="hover:text-almost-black">About</button>
            </div>
          </div>
          <div className="w-full flex justify-end gap-16 text-medium-gray phone:flex-col phone:gap-5 phone:w-full phone:items-center phone:px-3">
            <button className="hover:text-almost-black">Login</button>
            <button className="border-2 py-2 px-5 rounded-xl phone:w-full hover:border-almost-black hover:text-almost-black">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
