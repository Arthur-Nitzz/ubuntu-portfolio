import React from 'react';

import { Navbar } from '@/components/nav-bar';

interface UbuntuProps {}

const Ubuntu = ({}: UbuntuProps) => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
    </div>
  );
};

export { Ubuntu };
