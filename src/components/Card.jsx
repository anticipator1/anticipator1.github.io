import React from "react";

function Card({ item }) {
	return (
		<div className="flex flex-col md:flex-row rounded-lg overflow-hidden border-gray-200 border-r-4 border-b-4 p-2 md:p-0  md:pr-2 mt-10">
			<div className="w-full md:w-2/5">
				<img className="h-full object-cover" src={item.image} />
			</div>
			<div className="w-full mt-4 md:mt-0 p-0 md:p-4 md:pr-10">
				<h1 className="font-raleway font-semibold text-2xl md:text-4xl text-gray-600">
					{item.city}
				</h1>
				<p className="text-gray-500 text-md leading-[23.48px]">
					{item.country}
				</p>
				<p className="text-gray-900 font-medium text-md md:text-xl mt-4 leading-[31.28px]">
					{item.description}
				</p>
			</div>
		</div>
	);
}

export default Card;
