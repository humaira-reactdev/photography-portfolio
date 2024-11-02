import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[960px] flex">
      {/* Background Sections */}
      <div className="flex w-full h-full">
        <div className="bg-gray-500 w-[735px] h-[960px]">
        <div className="text-white ml-[50px]">
           <h2 className="font-bold text-2xl uppercase tracking-wide mb-2 mt-[800px]">Elliana Mary</h2>
           <p className="text-lg">Professional Photographer</p>
         </div>
        </div>
        <div className="bg-red-600 w-[440px] h-[960px]"></div>
        <div className="bg-black w-[745px] h-[960px]"></div>
      </div>

      {/* Text on Banner */}
      <div className="absolute top-[30%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[60px] font-semibold text-white w-[460px]">
          Love to <span className="underline decoration-white">capture</span><br/>
          the best <span className="underline decoration-white">moments</span>
        </h1>
        <p className="text-gray-200 mt-4 text-[18px] w-[450px] mx-auto">
          Distinctively re-engineer process-centric growth strategies without granular process improvements.
        </p>
        <div className='grey bg-slate-500  w-[470] h-[300px] absolute top-[120%] left-[10%]'>
        </div>
          <img src="/images/circulartext.png" alt="Logo" className="absolute w-[160px] h-[160px] top-[135%] right-[70%]" />
        {/* Social Media Links */}
         <div className="absolute left-[98%] top-[120%] transform -translate-y-1/2 space-y-8 text-gray-400 rotate-90">
           <a href="#linkedin" className="hover:text-white mb-8">LinkedIn</a>
           <a href="#instagram" className="hover:text-white mb-8">Instagram</a>
           <a href="#twitter" className="hover:text-white mb-8">Twitter</a>
           <a href="#facebook" className="hover:text-white mb-8">Facebook</a>
         </div>

      </div>
    </div>
  );
};

export default Banner;


// import React from 'react';

// const Banner = () => {
//   return (
//     <div className="w-full h-screen flex relative overflow-hidden">
//       {/* Left section (Gray) */}
//       <div className="bg-gray-300 w-[735px] h-full flex flex-col justify-end pl-16 pb-16">
//         <div className="text-gray-800">
//           <h2 className="font-bold text-2xl uppercase tracking-wide mb-2">Elliana Mary</h2>
//           <p className="text-lg">Professional Photographer</p>
//         </div>
//       </div>

//       {/* Middle section (Red) */}
//       <div className="bg-red-600 w-[440px] h-full flex flex-col justify-center pl-12 relative">
//         <h1 className="text-white text-[4.5rem] leading-[1.2] font-bold">
//           Love to <span className="underline decoration-white">capture the</span> <br /> best <span className="underline decoration-white">moments</span>
//         </h1>
//         <p className="text-gray-200 mt-4 text-lg max-w-xs">
//           Distinctively re-engineer process-centric growth strategies without granular process improvements.
//         </p>
//       </div>

//       {/* Right section (Black) */}
//       <div className="bg-black w-[745px] h-full flex justify-center items-center relative">
        
//         {/* Watch Promotional Video Box */}
//         <div className="absolute top-[50%] left-[-150px] transform -translate-y-1/2 -rotate-90">
//           <div className="w-[150px] h-[150px] bg-gray-300 flex items-center justify-center rounded-full">
//             <p className="text-red-600 font-semibold text-center transform rotate-90">
//               Watch my <br /> promotional video
//             </p>
//           </div>
//         </div>
        
//         {/* Social Media Links */}
//         <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-8 text-gray-400 rotate-90">
//           <a href="#linkedin" className="hover:text-white">LinkedIn</a>
//           <a href="#instagram" className="hover:text-white">Instagram</a>
//           <a href="#twitter" className="hover:text-white">Twitter</a>
//           <a href="#facebook" className="hover:text-white">Facebook</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



