import { experience } from '@/data/experience';

const Experience = () => {
  return (
    <div
      className="p-5"
      style={{
        height: 'calc(100vh - 5rem)',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: '#d4d4d4 #1a202c',
      }}
    >
      <div className="mb-10 text-center text-2xl font-bold text-orange-600 md:text-3xl">
        Experience
      </div>
      <div>
        {experience.map((item) => (
          <div key={item.id} className="group relative py-6 pl-8 sm:pl-56">
            <div className="mb-1 font-caveat text-2xl font-medium text-orange-600 sm:mb-0">
              {item.position}
            </div>
            <div className="mb-1 flex w-full flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-orange-600 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-orange-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[12rem] sm:after:left-0 sm:after:ml-[12rem] md:items-center">
              <time className="left-0 mb-3 inline-flex h-6 w-40 translate-y-0.5 items-center justify-center rounded-full bg-orange-600 text-xs font-semibold uppercase sm:absolute sm:mb-0">
                {item.timeline}
              </time>
              <div className="text-xl font-bold">{item.company}</div>
              <div className="text-slate-500 md:ml-3">{item.location}</div>
            </div>
            <div className="text-slate-500">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Experience };
