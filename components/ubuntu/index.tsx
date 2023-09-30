import React from 'react';

import { Navbar } from '@/components/nav-bar';
import { Desktop } from '@/components/desktop';

interface UbuntuProps {}

const Ubuntu = ({}: UbuntuProps) => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <Desktop />
    </div>
  );
};

export { Ubuntu };
