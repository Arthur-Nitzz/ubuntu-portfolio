import { Navbar } from '@/components/nav-bar';
import { Desktop } from '@/components/desktop';
import { Window } from '@/components/window';
import { useAppSelector } from '@/redux/hooks';

interface UbuntuProps {}

const Ubuntu = ({}: UbuntuProps) => {
  const allApps = useAppSelector((state) => state.allApps);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <Desktop />
      {allApps
        .filter((item) => item.isOpen && item.isMinimized === false)
        .map((item) => (
          <Window title={item.title} id={item.id} key={item.id}>
            {<item.app />}
          </Window>
        ))}
    </div>
  );
};

export { Ubuntu };
