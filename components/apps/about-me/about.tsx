import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <>
      <div className="my-4 w-20 rounded-full bg-white md:w-28">
        {/* <Image
        /> */}
      </div>
      <div className="mt-4 px-1 text-center text-lg md:mt-8 md:text-2xl">
        <div>
          Hi there, I&apos;m <span className="font-bold">Sakil! 👋</span>
        </div>
        <div className="ml-1 font-normal">
          A passionate{' '}
          <span className="font-bold text-pink-600">
            Software Engineer 💻✨
          </span>{' '}
        </div>
      </div>
      <div className=" relative mt-4 w-60 bg-white pt-px md:my-8 md:w-80">
        <div className="absolute left-0 top-0 -translate-y-1/2 transform rounded-full bg-white p-0.5 md:p-1"></div>
        <div className="absolute right-0 top-0 -translate-y-1/2 transform rounded-full bg-white p-0.5 md:p-1"></div>
      </div>
      <ul className="emoji-list mt-4 w-5/6 text-sm leading-tight tracking-tight md:w-3/4 md:text-base">
        <li className="list-alumnus">
          I’m a <span className="font-medium">Software Engineer 🤓</span> and a
          proud alumnus of
          <u className="cursor-pointer">
            <a href="https://www.aiub.edu/" target="_blank" rel="noreferrer">
              {' '}
              American International University-Bangladesh (AIUB) 🎓
            </a>
          </u>
          . I&apos;m passionate about learning and working across diverse
          technologies and domains 💡. Currently, I’m focused on web development
          🕸️ and actively enhancing my knowledge in Data Structures and
          Algorithms 🧠. I love exploring innovative solutions to real-world
          problems ✨ and continuously strive to grow and improve 🚀.
        </li>
        <li className="list-favorites mt-3">
          <span className="font-medium">My Absolute Favorites:</span>
          <ul className="mt-1 list-inside">
            <li>💻 Exploring new tech stacks and building cool projects</li>
            <li>📰 Reading tech blogs whenever possible</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export { About };
