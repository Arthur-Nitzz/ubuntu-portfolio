import React from 'react';
import { Clock } from '..';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <div className="flex select-none items-center justify-between bg-gray-950 p-1.5 text-sm text-white">
      <div className="px-2 hover:rounded-full hover:bg-gray-800">
        Activities
      </div>
      <div className="px-2 hover:rounded-full hover:bg-gray-800">
        <Clock />
      </div>
      <div></div>
    </div>
  );
};

export { Navbar };
