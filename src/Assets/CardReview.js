import React from 'react'

function CardReview() {
  return (
    <div className="rounded-lg w-full h-full pl-6 pr-16 py-5 bg-Secondary3 justify-start items-center gap-1 inline-flex shadow-lg">
        <div className="w-16 self-stretch pb-1 flex-col justify-start items-start gap-9 inline-flex">
            <div className="text-black text-xl font-extrabold font-['Karla'] uppercase">rating</div>
            <img className="w-11 h-11 rounded-full" src="https://via.placeholder.com/44x44" />
            <div className="text-black text-base font-extrabold font-['Karla'] capitalize">Review</div>
        </div>
        <div className="text-black text-lg font-bold font-['Karla']">User</div>
    </div>
  );
};

export default CardReview