import { Grid } from '@/components/icons';
import { SidebarMenuItem } from '@/components/sidebar-menu-item';
import { Tooltip } from '@/components/tooltip';

interface ItemsProps {
  title: string;
  src: string;
}

const items: ItemsProps[] = [
  {
    title: 'Chrome',
    src: '/apps/chrome.png',
  },
  {
    title: 'Calculator',
    src: '/apps/calc.png',
  },
  {
    title: 'About Sakil',
    src: '/apps/user-home.png',
  },
  {
    title: 'VS Code',
    src: '/apps/vscode.png',
  },
  {
    title: 'Terminal',
    src: '/apps/bash.png',
  },
  {
    title: 'Spotify',
    src: '/apps/spotify.png',
  },
  {
    title: 'Settings',
    src: '/apps/gnome-control-center.png',
  },
];

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="absolute left-0 top-0 z-40 flex h-full w-auto transform select-none flex-col items-center justify-start border-black border-opacity-60 bg-black bg-opacity-50 pt-7 duration-300">
      {items.map((item) => (
        <Tooltip text={item.title} key={item.title} position="right">
          <SidebarMenuItem title={item.title} imageSrc={item.src} />
        </Tooltip>
      ))}
      <div
        className={`m-1 flex h-10 w-10 items-center justify-center rounded hover:bg-white hover:bg-opacity-10`}
        style={{ marginTop: 'auto' }}
      >
        <Tooltip position="top" text="Show Applications">
          <div className="relative">
            <Grid />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export { Sidebar };
