import { FormEvent } from 'react';

import { Accordion } from '@/components/accordion';
import { AudioVolume, Brightness, Wifi } from '@/components/icons';
import { Slider } from '@/components/slider';
import {
  setBrightnessLevel,
  setSoundLevel,
} from '@/redux/features/status-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

interface StatusCardProps {}

const StatusCard = ({}: StatusCardProps) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.status);

  return (
    <div className="absolute right-0 top-8 w-72 rounded-md border border-black border-opacity-20 bg-gray-900 p-1.5 shadow">
      <div className="flex items-center gap-2 rounded-sm p-2 hover:bg-slate-800">
        <AudioVolume />
        <Slider
          onChange={(e: FormEvent<HTMLInputElement>) =>
            dispatch(
              setSoundLevel(Number((e.target as HTMLInputElement).value)),
            )
          }
          value={status.soundLevel}
        />
      </div>
      <div className="flex items-center gap-2 rounded-sm p-2 hover:bg-slate-800">
        <Brightness />
        <Slider
          onChange={(e: FormEvent<HTMLInputElement>) =>
            dispatch(
              setBrightnessLevel(Number((e.target as HTMLInputElement).value)),
            )
          }
          value={status.brightnessLevel}
        />
      </div>
      <hr className="my-2 h-px border-0 bg-gray-700" />
      <div className="flex flex-col">
        <Accordion title="Sakil's Wifi" icon={<Wifi />}>
          <div className="">
            <p className="p-1 px-5 hover:bg-slate-700">Select Network</p>
            <p className="p-1 px-5 hover:bg-slate-700">Power Off</p>
            <p className="p-1 px-5 hover:bg-slate-700">Wi-Fi Settings</p>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export { StatusCard };
