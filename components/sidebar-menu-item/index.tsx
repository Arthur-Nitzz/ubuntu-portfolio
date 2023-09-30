'use client';

import Image from 'next/image';

import { openApp } from '@/redux/features/favorite-apps-slice';
import { useAppDispatch } from '@/redux/hooks';

interface SidebarMenuItemProps {
  id: string;
  title: string;
  imageSrc: string;
}

const SidebarMenuItem = ({ imageSrc, title, id }: SidebarMenuItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="relative m-1 w-auto rounded p-2 outline-none transition hover:bg-white hover:bg-opacity-10"
      onClick={() => dispatch(openApp(id))}
    >
      <Image src={imageSrc} alt={title} height={30} width={30} />
    </div>
  );
};

export { SidebarMenuItem };
