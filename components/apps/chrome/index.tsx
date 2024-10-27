'use client';

import { useState } from 'react';

import { Home, Refresh } from '@/components/icons';

const Chrome = () => {
  const [siteUrl, setSiteUrl] = useState<string>('https://www.google.com/');

  const onRefresh = () => {
    setSiteUrl(siteUrl);
  };

  const onHome = () => {
    setSiteUrl('https://www.google.com');
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-8 w-full items-center gap-2 bg-zinc-700">
        <div className="flex gap-2">
          <Refresh
            className="h-5 rounded-full p-0 hover:bg-zinc-800"
            onClick={onRefresh}
          />
          <Home
            className="h-5 rounded-full p-0 hover:bg-zinc-800"
            onClick={onHome}
          />
        </div>
        <input
          className="h-6 w-10/12 rounded-3xl bg-zinc-900 px-2 text-sm text-gray-300 outline-none focus:text-white"
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
        />
      </div>
      <div className="flex-grow">
        <iframe
          title="Google"
          src={siteUrl}
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export { Chrome };
