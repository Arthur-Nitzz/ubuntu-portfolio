import { ReactNode } from 'react';
import { Navbar } from './navbar';

interface WindowProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Window = ({ id, title, children }: WindowProps) => {
  return (
    <div className="absolute left-20  top-10 h-5/6 w-7/12 rounded-lg bg-zinc-800">
      <Navbar title={title} id={id} />
      {children}
    </div>
  );
};

export { Window };
