import CloseBook from "@/app/components/closeBook/closeBook";
import { GetStaticProps } from "next";

const styleOfCloseBook = {
	lineBook: 20,
	height: 620,
	width: 400,
};

export default function Home() {
	return (
		<div className="container mx-auto">
			<div
				className="main-view flex flex-col justify-center items-center h-screen w-full px-20"
				style={{ minHeight: styleOfCloseBook.height }}
			>
				<div
					className="main-view flex space-x-20"
					style={{ minHeight: styleOfCloseBook.height }}
				>
					<CloseBook />
					{/* <div
						className="open-book bg-green-500 shadow-book"
						style={{ width: styleOfCloseBook.width * 2 }}
					></div> */}
				</div>
			</div>
		</div>
	);
}
