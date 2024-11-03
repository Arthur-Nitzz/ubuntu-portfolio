import Image from 'next/image';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;
  return (
    <>
      <div className="my-4 w-20  md:w-28">
        <Image
          src="/myImage.jpeg"
          alt="Sakil"
          className="w-full rounded-full"
          height={300}
          width={500}
        />
      </div>
      <div className="mb-6 mt-4 px-1 text-center text-lg md:mt-8 md:text-2xl">
        <div>
          Hi there, I&apos;m <span className="font-bold">Sakil! 👋</span>
        </div>
        <div className="ml-1 font-normal">
          A passionate{' '}
          <span className="font-bold text-orange-600">
            Software Engineer 💻✨
          </span>{' '}
        </div>
      </div>
      <ul className="emoji-list mt-4 w-5/6 text-sm leading-tight tracking-tight md:w-3/4 md:text-base">
        <li className="list-alumnus">
          I’m a <span className="font-medium">Software Engineer 🤓</span>{' '}
          specialized in the{' '}
          <span className="font-medium">Node.js/React.js ecosystem</span> with
          <span className="text-orange-600">
            {' '}
            {yearsOfExperience}+ years of professional experience
          </span>
          . I am committed to continuously enhancing my skills to effectively
          solve{' '}
          <span className="text-orange-600">
            real-world problems through technology 🌍
          </span>
          . Here are my key specializations:
          <ul className="mt-2 list-inside list-disc">
            <li>
              <span className="text-orange-600">
                JavaScript Stack Advocate:
              </span>{' '}
              Specializing in JavaScript with a willingness to learn additional
              languages.
            </li>
            <li>
              <span className="text-orange-600">Continuous Improvement:</span>{' '}
              Committed to learning and adapting to new technologies.
            </li>
            <li>
              <span className="text-orange-600">
                Passionate about Innovation:
              </span>{' '}
              Enjoy working with the latest tools to develop innovative
              solutions ⚙️.
            </li>
            <li>
              <span className="text-orange-600">Problem Solver at Heart:</span>{' '}
              Embrace challenges that push me to grow and improve 💪.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export { About };
