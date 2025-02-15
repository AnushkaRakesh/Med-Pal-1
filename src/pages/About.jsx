import Navbar from "../Navbar";
import sampleImg from "../assets/sample-avatar.png";
import "../App.css";
import './about.css'
const About = () => {
	return (
		<>
			<div id="about-content">
				<Navbar />
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div className="title">About Us</div>
				</div>
				<br></br>
				<br></br>
				<div
					id="about-text"
					style={{
						margin: "0 30%",
						fontSize: "1.8rem",
					}}
				>
					We are a passionate group of student developers who started
					working on this project as part of our university
					curricullum. But over the course of this project, we have
					grown to love this project and we are now working on it as a
					hobby. Our mission is to scale this project up further and
					make it available to everyone.
				</div>
				<br></br>
				<br></br>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						className="title"
						style={{
							color: "red",
						}}
					>
						Meet the team
					</div>
				</div>
				<div id="team-profiles">
					<div className="team-profile">
						<>
							<img
								src={sampleImg}
								alt="Stephno-img"
								style={{
									width: "100%",
									height: "100% ",
								}}
							/>
						</>
						<span className="member-name">Aastle Stephno</span>
						<span className="member-role">Scrum Master</span>
					</div>
					<div className="team-profile">
						<>
							<img
								src={sampleImg}
								alt="Atharva-img"
								style={{
									width: "100%",
									height: "100% ",
								}}
							/>
						</>
						<span className="member-name">Atharva Amberkar</span>
						<span className="member-role">Frontend Developer</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default About;
