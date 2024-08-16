import PriceCard from "./price-card/PriceCard";
import Head from "./head/Head";
import './Course.css';
import ContentSection from "./content/Content";
import FAQ from "./faq/FAQ";
import Roadmap from "./roadmap/Roadmap";

function Course() {
	return (
		<>
			<div className="background_img">
				<Head />
			</div>
			<div>
				<Roadmap />
				<ContentSection />
			</div>
			<div className="">
				{/* <PriceCard /> */}
			</div>
			<div>
				<FAQ />
			</div>
		</>
	);
}

export default Course;

