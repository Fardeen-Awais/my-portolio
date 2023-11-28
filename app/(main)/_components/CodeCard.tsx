import React from 'react'

const CodeCard = () => {
  return (
      <div className="w-[426px] h-[252px] px-6 pt-24 pb-12 bg-white bg-opacity-0 rounded-[10px] border border-white border-opacity-10 backdrop-blur-md flex-col justify-center items-start gap-8 inline-flex">
        <div className="w-[442px] h-9 relative bg-white bg-opacity-10 border-t border-white border-opacity-30">
          <div className="w-[442px] h-9 left-[442px] top-0 absolute origin-top-left rotate-180 bg-black bg-opacity-20 rounded-bl-md border border-white border-opacity-25"></div>
          <div className="h-40 left-[25px] top-[55px] absolute">
            <div className="w-[337px] h-[55px] left-0 top-0 absolute text-white text-opacity-95 text-2xl font-medium font-['Inter'] leading-normal">Do work that inspire others</div>
            <div className="w-[337px] left-0 top-[55px] absolute text-blue-50 text-opacity-70 text-xs font-normal font-['Inter']">You can't inspire people by doing an “okay” job. To inspire, you need to do phenomenal work. Quality is not a plus; it's a must-have. We know nothing will ever be perfect, but that doesn't stop us from pushing the limits. We don't want to just meet the bar of our peers. We want to raise the bar. The sum of all the small details is what makes something special.</div>
          </div>
          <div className="left-[12px] top-[12px] absolute justify-start items-start gap-2 inline-flex">
            <div className="w-3 h-3 bg-red-600 rounded-full border border-white"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full border border-white"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full border border-white"></div>
          </div>
        </div>
      </div>


  )
}

export default CodeCard