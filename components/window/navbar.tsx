import { Close, Maximize } from '@/components/icons';
import { Minimize } from '../icons/minimize';
import { useAppDispatch } from '@/redux/hooks';
import { closeApp } from '@/redux/features/all-apps-slice';

interface NavbarProps {
  id: string;
  title: string;
}

const Navbar = ({ title, id }: NavbarProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div></div>
      <p className="font-bold text-white">{title}</p>
      <div className="flex items-center gap-1">
        <div className="mx-1.5 mt-1 flex h-5 w-5 cursor-default items-center justify-center rounded-full bg-zinc-700 bg-opacity-90 shadow-lg hover:bg-opacity-100 focus:outline-none">
          <Minimize />
        </div>
        <div className="mx-1.5 mt-1 flex h-5 w-5 cursor-default items-center justify-center rounded-full bg-zinc-700 bg-opacity-90 shadow-lg hover:bg-opacity-100 focus:outline-none">
          <Maximize />
        </div>
        <div
          className="mx-1.5 mt-1 flex h-5 w-5 cursor-default items-center justify-center rounded-full bg-zinc-700 bg-opacity-90 shadow-lg hover:bg-opacity-100 focus:outline-none"
          onClick={() => dispatch(closeApp(id))}
        >
          <Close />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
