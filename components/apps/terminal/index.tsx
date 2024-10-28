'use client';

import React, {
  ChangeEvent,
  Fragment,
  KeyboardEvent,
  ReactNode,
  useState,
} from 'react';

import { closeApp } from '@/redux/features/all-apps-slice';
import { useAppDispatch } from '@/redux/hooks';

const Terminal = () => {
  const dispatch = useAppDispatch();
  const [terminalRows, setTerminalRows] = useState<
    {
      text: string;
      focused: boolean;
      disabled: boolean;
      response?: ReactNode;
    }[]
  >([
    {
      text: '',
      focused: true,
      disabled: false,
      response: ``,
    },
  ]);

  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newTerminalRows = [...terminalRows];
    newTerminalRows[index].text = e.target.value;
    setTerminalRows(newTerminalRows);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Enter') {
      const newTerminalRows = [...terminalRows];
      newTerminalRows[index].disabled = true;
      newTerminalRows[index].focused = false;
      const text = terminalRows[index].text;
      if (text === 'exit') {
        dispatch(closeApp('Terminal'));
        setTerminalRows([{ text: '', focused: true, disabled: false }]);
      } else if (text === 'clear') {
        setTerminalRows([{ text: '', focused: true, disabled: false }]);
      } else {
        newTerminalRows[index].response = handleResponse(text);
        newTerminalRows.push({
          text: '',
          focused: true,
          disabled: false,
        });
        setTerminalRows(newTerminalRows);
      }
    }
  };

  const handleResponse = (text: string) => {
    if (text === '') {
      return '';
    } else if (text === 'ls') {
      return (
        <div className="whitespace-pre-wrap">
          <span className="text-yellow-500">Desktop</span> &nbsp;
          <span className="text-yellow-500">Documents</span> &nbsp;
          <span className="text-yellow-500">Downloads</span> &nbsp;
          <span className="text-yellow-500">Music</span> &nbsp;
          <span className="text-yellow-500">Pictures</span> &nbsp;
          <span className="text-yellow-500">Videos</span>
        </div>
      );
    } else if (text === 'ls -l') {
      return (
        <div className="whitespace-pre-wrap">
          <span>total 0</span>
          <br />
          <span className="text-green-500">drwxr-xr-x</span> 2 sakilk130
          sakilk130 4096 Jul 1 10:00{' '}
          <span className="text-yellow-500">Desktop</span>
          <br />
          <span className="text-green-500">drwxr-xr-x</span> 2 sakilk130
          sakilk130 4096 Jul 1 10:00{' '}
          <span className="text-yellow-500">Documents</span>
          <br />
          <span className="text-green-500">drwxr-xr-x</span> 2 sakilk130
          sakilk130 4096 Jul 1 10:00{' '}
          <span className="text-yellow-500">Downloads</span>
          <br />
          <span className="text-green-500">drwxr-xr-x</span> 2 sakilk130
          sakilk130 4096 Jul 1 10:00{' '}
          <span className="text-yellow-500">Music</span>
          <br />
          <span className="text-green-500">drwxr-xr-x</span> 2 sakilk130
          sakilk130 4096 Jul 1 10:00{' '}
          <span className="text-yellow-500">Pictures</span>
          <br />
          <span className="text-green-500">drwxr-xr-x</span> 2 sakilk130
          sakilk130 4096 Jul 1 10:00{' '}
          <span className="text-yellow-500">Videos</span>
        </div>
      );
    } else if (text === 'pwd') {
      return '/home/sakilk130';
    } else if (text === 'whoami') {
      return 'sakilk130';
    } else if (text === 'help') {
      return (
        <div className="whitespace-pre-wrap">
          <span className="text-green-500">Available commands:</span>
          <br />
          <span className="text-yellow-500">help</span> - List available
          commands
          <br />
          <span className="text-yellow-500">ls</span> - List directory contents
          <br />
          <span className="text-yellow-500">ls -l</span> - List directory
          contents in long format
          <br />
          <span className="text-yellow-500">clear</span> - Clear the terminal
          <br />
          <span className="text-yellow-500">exit</span> - Close the terminal
          <br />
          <span className="text-yellow-500">pwd</span> - Print name of current
          working directory
          <br />
          <span className="text-yellow-500">whoami</span> - Print effective
          userid
        </div>
      );
    } else {
      return `Command '${text}' not found, or not yet implemented.`;
    }
  };

  return (
    <div className="h-full w-full bg-gray-950 text-sm font-bold text-white">
      {terminalRows.map((row, index) => (
        <Fragment key={index}>
          <div className="mb-1 flex items-center">
            <span className="font-bold text-green-500">sakilk130@ubuntu</span>
            <span className="font-bold text-white">:</span>
            <span className="font-bold text-blue-500">~</span>
            <span className="mr-1 font-bold text-white">$</span>
            <input
              type="text"
              className=" w-full bg-gray-950 text-white outline-none"
              value={row.text}
              onChange={(e) => onChange(e, index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              autoFocus={row.focused}
              disabled={row.disabled}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          {row.response && <div className="mb-2 mt-2">{row.response}</div>}
        </Fragment>
      ))}
    </div>
  );
};

export { Terminal };
