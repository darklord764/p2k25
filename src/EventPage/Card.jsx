import React from 'react';

const Card = ({ title, img }) => {
  return (
    <div className="perspective-1000 origin-center">
      <div 
        className="
          animate-card-enter 
          bg-gradient-to-br 
          from-gray-900 
          via-black 
          to-purple-900 
          border-2 
          border-purple-800/30 
          rounded-2xl 
          shadow-lg 
          p-6 
          flex 
          flex-col 
          items-center 
          justify-center 
          transition-card 
          duration-500 
          ease-in-out 
          group 
          hover:animate-card-hover 
          hover:shadow-card-hover 
          hover:scale-105 
          hover:rotate-1 
          w-[320px] 
          overflow-hidden 
          relative"
      >
        <div className="absolute inset-0 animate-gradient-x opacity-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 background-size-200"></div>
        
        <button className="contents cursor-pointer relative z-10">
          <h3 
            className="
              text-2xl 
              font-bold 
              text-white 
              text-center 
              mb-6 
              transition-colors 
              duration-300 
              group-hover:text-purple-300 
              relative 
              z-10"
          >
            {title}
          </h3>
          
          <div className="w-full h-[220px] rounded-xl overflow-hidden mb-4 relative z-10">
            <img 
              src={img} 
              alt={title} 
              className="
                w-full 
                h-full 
                object-cover 
                rounded-xl 
                transition-transform 
                duration-500 
                animate-image-float 
                group-hover:scale-110 
                group-hover:brightness-110 
                shadow-md 
                relative 
                z-10"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;