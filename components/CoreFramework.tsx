import React from 'react';
import { FaEye, FaFlag, FaBullseye } from 'react-icons/fa';

const coreItems = [
  {
    icon: <FaEye className="text-2xl text-blue-600" />,
    title: 'Our Vision',
    description:
      'To deliver high-quality solutions with innovation and integrity, ensuring customer satisfaction and long-term success.',
  },
  {
    icon: <FaFlag className="text-2xl text-blue-600" />,
    title: 'Our Value',
    description:
      'To deliver high-quality solutions with innovation and integrity, ensuring customer satisfaction and long-term success.',
  },
  {
    icon: <FaBullseye className="text-2xl text-blue-600" />,
    title: 'Our Mission',
    description:
      'Our mission is to empower businesses through modern digital solutions, driving impact and scalable results.',
  },
];

const CoreFramework = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-600">Our Core Framework</h2>
      </div>

      {/* Timeline Line */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="absolute top-[44px] left-0 right-0 h-1 bg-pink-500 z-0" />

        {/* Icon + Triangle + Card */}
        <div className="flex flex-col md:flex-row justify-center gap-10 relative z-10">
          {coreItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full md:w-1/3">
              {/* Icon in Circle */}
              <div className="bg-white border-4 border-pink-500 rounded-full p-4 shadow-md mb-2">
                {item.icon}
              </div>

              {/* Triangle Pointer */}
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-pink-500 mb-4" />

              {/* Card with fixed height */}
              <div className="bg-white shadow-lg p-6 rounded-xl transition-transform hover:scale-105 duration-300 h-[250px] flex flex-col justify-between">
                <h3 className="text-3xl font-bold text-pink-600">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFramework;
