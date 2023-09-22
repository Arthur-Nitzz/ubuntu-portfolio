'use client';

import { Ubuntu } from '@/components/ubuntu';
import { useAppSelector } from '@/redux/hooks';

const Home = () => {
  const status = useAppSelector((state) => state.status);

  return (
    <main
      style={{
        filter: `brightness(${status.brightnessLevel / 100})`,
      }}
    >
      <div>
        <Ubuntu />
      </div>
    </main>
  );
};

export default Home;
