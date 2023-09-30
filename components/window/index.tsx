import { ReactNode } from 'react';
import { Navbar } from './navbar';

interface WindowProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Window = ({ id, title, children }: WindowProps) => {
  return (
    <div className="absolute left-20 top-10 flex h-5/6 w-7/12 flex-col rounded-lg bg-zinc-800">
      <Navbar title={title} id={id} />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export { Window };
