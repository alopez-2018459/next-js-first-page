import React, { useState } from "react";
import Image from "next/image";
import { IMAGE_DATA } from "./SliderData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface SliderProps {
	slides: {
		image: string;
	}[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	return (
		<div id="gallery" className="max-w-[1240px] mx-auto">
			<h1 className="text-3xl font-bold text-left p-2">Gallery</h1>
			<div className="relative flex justify-center p-4">
				{IMAGE_DATA.map((slides, index) => {
					return (
						<div
							key={index}
							className={
								index === current
									? "opcaity-[1] ease-in duration-100"
									: "opacity-0"
							}
						>
							<AiOutlineArrowLeft
								onClick={prevSlide}
								className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
								size={50}
							/>
							{index === current && (
								<Image
									src={slides.image}
									alt="/"
									width="1440"
									height="600"
									className="max-h-[600px] "
									style={{ objectFit: "cover" }}
								/>
							)}

							<AiOutlineArrowRight
								onClick={nextSlide}
								className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
								size={50}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Slider;
