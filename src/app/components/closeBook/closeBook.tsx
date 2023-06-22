"use client";
import Image from "next/image";
import { Kaushan_Script } from "next/font/google";
import bgBe from "@/app/assets/background-be.svg";
import findBugIcon from "@/app/assets/find-bug.svg";
import bugIcon from "@/app/assets/bug.svg";
import ambulanceIcon from "@/app/assets/ambulance.svg";
import React, { useEffect, useRef, useState } from "react";
import "./closeBook.css";

const kaushanScript = Kaushan_Script({
	subsets: ["latin"],
	weight: "400",
});
const styleOfCloseBook = {
	lineBook: 20,
	height: 620,
	width: 400,
};

export default function CloseBook() {
	// const [rotate, setRotate] = useState<number>(-90);
	// const [scale, setScale] = useState<number>(1.5);
	const ref = useRef(null);

	const Background = () => (
		<div className="background-be absolute w-full h-full">
			<div className="absolute w-full h-full bg-gray-cape-cod"></div>
			<div
				className="absolute w-full h-full"
				style={{
					backgroundImage: `url(${bgBe.src})`,
				}}
			></div>

			<div
				className="absolute w-full h-full border-solid border-t-black-mine-shaft border-l-black-mine-shaft border-r-transparent border-b-transparent"
				style={{
					borderRightWidth: `${styleOfCloseBook.width / 2}px`,
					borderBottomWidth: `${styleOfCloseBook.height / 2}px`,
					borderTopWidth: `${styleOfCloseBook.height / 2}px`,
					borderLeftWidth: `${styleOfCloseBook.width / 2}px`,
				}}
			></div>

			<div className="items w-full h-full absolute">
				<div className="11 absolute rounded-full h-28 w-28 bg-gray-spun-pearl left-4 -top-9"></div>
				<div className="22 absolute rounded-full h-20 w-20 bg-gray-spun-pearl top-80 -left-16 flex items-center">
					{bugIcon && (
						<Image
							className="absolute -right-2"
							src={bugIcon}
							alt=""
							style={{ width: "30%" }}
						/>
					)}
				</div>
				<div
					className="33 absolute h-28 w-28 bg-gray-spun-pearl top-16 right-16 flex items-center justify-center"
					style={{ rotate: `-35rad` }}
				>
					{findBugIcon && (
						<Image
							src={findBugIcon}
							alt=""
							style={{ rotate: `35rad`, width: "60%" }}
						/>
					)}
				</div>
				<div className="44 absolute h-14 w-14 bg-gray-spun-pearl mt-6 top-96 left-6"></div>
				{ambulanceIcon && (
					<Image className="absolute bottom-12" src={ambulanceIcon} alt="" />
				)}
			</div>
		</div>
	);
	const Line = () => (
		<div className="line absolute h-full w-full">
			<div className="bottom-left h-full w-full absolute left-4 bottom-64 -mb-2">
				<div className="bottom-left-1 absolute border-yellow-cream-can border-b-8 border-l-8 h-full w-full"></div>
				<div className="bottom-left-2 absolute border-yellow-cream-can border-b-8 border-l-8 h-full w-full -right-4 -bottom-4"></div>
			</div>
			<div className="top-right h-full w-full absolute right-4 top-64 -mt-2">
				<div className="top-right-1 absolute border-yellow-cream-can border-t-8 border-r-8 h-full w-full"></div>
				<div className="top-right-2 absolute border-yellow-cream-can border-t-8 border-r-8 h-full w-full right-4 bottom-4"></div>
			</div>
		</div>
	);
	const Title = () => (
		<div className="absolute h-full flex flex-col justify-center items-center w-full">
			<div className="w-80 h-24 relative">
				<p
					className={`${kaushanScript.className} text-white absolute text-4xl top-0 left-7`}
				>
					Full-stack
				</p>
				<p
					className={`${kaushanScript.className} text-yellow-cream-can absolute text-4xl bottom-0 right-7`}
				>
					Developer
				</p>
			</div>
		</div>
	);
	const Author = () => (
		<div className="author absolute right-12 bottom-52 text-white">
			Đặng Hiếu Liêm
		</div>
	);

	useEffect(() => {
		document.addEventListener("click", () => {
			const currentClassList = (ref.current as any)?.classList;
			if (!currentClassList) return;
			currentClassList.remove("-rotate-90");
			currentClassList.remove("scale-150");
			currentClassList.add("animation");
		});

		return () => {
			document.removeEventListener("click", () => {});
		};
	}, []);

	return (
		<div
			// ref={ref}
			className="close-book relative flex overflow-hidden shadow-book" // -rotate-90 scale-150
		>
			<div className="left-light-of-book w-5 h-full bg-black-mine-shaft "></div>
			<div
				className="content-close-book relative"
				style={{
					width: styleOfCloseBook.width,
				}}
			>
				<Background />
				<Title />
				<Line />
				<Author />
			</div>

			<span className="page turn"></span>
			<span className="page turn"></span>
			<span className="page turn"></span>
			<span className="page turn"></span>
			<span className="page turn"></span>
			<span className="page turn"></span>
			<span className="cover"></span>
			<span className="page"></span>
			<span className="cover turn"></span>
		</div>
	);
}
