import React from 'react';

import { BackgroundImage } from '@/components/background-image';
import { useAppSelector } from '@/redux/hooks';

interface DesktopProps {}

const Desktop = ({}: DesktopProps) => {
  const { backgroundImage } = useAppSelector((state) => state.backgroundImage);
  return (
    <div>
      <BackgroundImage backgroundImage={backgroundImage} />
    </div>
  );
};

export { Desktop };
