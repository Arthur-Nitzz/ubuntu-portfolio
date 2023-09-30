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
        .filter((item) => item.isOpen)
        .map((item) => (
          <Window key={item.id} title={item.title} id={item.id}>
            {item.app}
          </Window>
        ))}
    </div>
  );
};

export { Ubuntu };
