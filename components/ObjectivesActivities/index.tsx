import { createStyles, Text } from "@mantine/core";
import {
	FaCheckCircle,
	FaIndustry,
	FaLightbulb,
	FaMicrochip,
	FaSeedling,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const useStyles = createStyles((theme) => ({
	container: {
		display: "flex",
		padding: "16px 4rem",
		justifyContent: "center",
		alignItems: "center",
		backgroundImage: "linear-gradient(45deg, #FFE6B6 0%, #FF8C8C 100%)",
		color: theme.colors.dark[8],
		gap: "2rem",
		"@media (max-width: 768px)": {
			flexDirection: "column",
			padding: "16px 2rem 16px 1rem",
		},
	},
	objectives: {
		maxWidth: "50%",
		"& h2": {
			textAlign: "center",
		},
		"@media (max-width: 768px)": {
			maxWidth: "100%",
		},
	},
	activities: {
		maxWidth: "50%",
		"& h2": {
			textAlign: "center",
		},
		"@media (max-width: 768px)": {
			maxWidth: "100%",
		},
	},
	itemList: {
		listStyle: "none",
		"& li": {
			display: "flex",
			alignItems: "center",
			gap: "1rem",
			margin: "0.5rem 0",
			"& svg": {
				fontSize: "0.8rem",
				fill: theme.colors.dark[6],
			},
		},
	},
	objectivesList: {},
	activitiesList: {
		"& li svg": {
			fontSize: "1.1rem !important",
		},
	},
}));

export default function OjbectivesActivities() {
	const { classes, cx, theme } = useStyles();
	const ObjectiveButton = FaCheckCircle;
	return (
		<section className={classes.container}>
			<div className={classes.objectives}>
				<h2>Objectives</h2>
				<ul className={cx(classes.itemList, classes.objectivesList)}>
					<li>
						<span>
							<ObjectiveButton />
						</span>
						<Text>Improving Standard of Engineering Education</Text>
					</li>
					<li>
						<span>
							<ObjectiveButton />
						</span>
						<Text>
							Counseling the students in the emerging new
							opportunities
						</Text>
					</li>
					<li>
						<span>
							<ObjectiveButton />
						</span>
						<Text>
							Encouraging and motivating the outside Class room
							studies / Work shops / projects / Seminars
						</Text>
					</li>
					<li>
						<span>
							<ObjectiveButton />
						</span>
						<Text>
							Increasing the student base and Corporate membership
							of IETE
						</Text>
					</li>
				</ul>
			</div>
			<div className={classes.activities}>
				<h2>Activities</h2>
				<ul className={cx(classes.itemList, classes.activitiesList)}>
					<li>
						<span>
							<FaMicrochip />
						</span>
						<Text>
							To plan, organize Technical Programs, Special
							Lectures, Workshops, Seminars Symposia, exhibitions
							for the benefit of students.
						</Text>
					</li>
					<li>
						<span>
							<FaLightbulb />
						</span>
						<Text>
							To provide common platform for students to exchange
							of ideas in technical topics of interest, e.g.,
							curriculum, employment, higher educational
							opportunities, emerging trends, etc.
						</Text>
					</li>
					<li>
						<span>
							<FaIndustry />
						</span>
						<Text>
							To facilitate technical visits, project works,
							employment, contact with industries and academic
							institutions.
						</Text>
					</li>
					<li>
						<span>
							<IoIosPeople />
						</span>
						<Text>
							Encourage team spirit and self reliance among
							student members.
						</Text>
					</li>
					<li>
						<span>
							<FaSeedling />
						</span>
						<Text>
							ISFs should be a catalyst for the overall growth in
							technical and professional skills in young students.
						</Text>
					</li>
				</ul>
			</div>
		</section>
	);
}
