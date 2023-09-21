import { AudioVolume } from '@/components/icons';
import { Slider } from '@/components/slider';

interface StatusCardProps {}

const StatusCard = ({}: StatusCardProps) => {
  return (
    <div className="absolute right-0 top-8 w-72 rounded-md border border-black border-opacity-20 bg-gray-900 p-1.5 shadow">
      <div className="flex items-center gap-2 rounded-sm p-2 hover:bg-slate-800">
        <AudioVolume />
        <Slider />
      </div>
    </div>
  );
};

export { StatusCard };
