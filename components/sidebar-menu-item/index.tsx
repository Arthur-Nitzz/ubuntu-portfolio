import Image from 'next/image';
import React from 'react';

interface SidebarMenuItemProps {
  title: string;
  imageSrc: string;
}

const SidebarMenuItem = ({ imageSrc, title }: SidebarMenuItemProps) => {
  return (
    <div className="relative m-1 w-auto rounded p-2 outline-none transition hover:bg-white hover:bg-opacity-10">
      <Image src={imageSrc} alt={title} height={30} width={30} />
    </div>
  );
};

export { SidebarMenuItem };
