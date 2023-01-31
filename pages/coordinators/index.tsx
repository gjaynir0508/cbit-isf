import { UserInfoAction } from "@components/UserCard";
import { getCoordinatorsByGroup } from "@lib/getCoordinators";
import { createStyles } from "@mantine/core";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		gap: "2rem",
		padding: "6rem",
		"@media (max-width: 800px)": {
			gap: "2rem",
		},
	},
	flex: {
		display: "flex",
		flexWrap: "wrap",
		gap: "2rem",
		"@media (max-width: 800px)": {
			gap: "2rem",
		},
	},
}));
export default function StudentCoordinators({ teachers, students }) {
	const { classes, cx, theme } = useStyles();
	return (
		<section className={classes.container}>
			<h1>Coordinators of CBIT ISF</h1>
			<h2>Faculty Coordinators</h2>
			<div className={classes.flex}>
				{teachers?.map((t, i) => (
					<UserInfoAction
						key={i}
						avatar={
							t.img ? (
								<Image src={t.img} alt={t.name} />
							) : (
								<FaUser />
							)
						}
						name={t.name}
						teacherOrStudent="Faculty Coordinator"
						job={t.job}
					/>
				))}
			</div>
			<hr style={{ width: "100%" }} />
			<h2>Student Coordinators</h2>
			<div className={classes.flex}>
				{students?.map((t, i) => (
					<UserInfoAction
						key={i}
						avatar={
							t.img ? (
								<Image src={t.img} alt={t.name} />
							) : (
								<FaUser />
							)
						}
						name={t.name}
						teacherOrStudent="Student Coordinator"
						job={t.job}
					/>
				))}
			</div>
		</section>
	);
}

export function getStaticProps() {
	const { teachers, students } = getCoordinatorsByGroup();
	return {
		props: { teachers, students },
	};
}
