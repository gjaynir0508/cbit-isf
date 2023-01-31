import { getRecentPostsPreview } from "@lib/getPosts";
import { createStyles } from "@mantine/core";
import Link from "next/link";
import { relative } from "path";
import { FaChevronRight } from "react-icons/fa";
import { BadgeCard } from "./Card";

const useStyles = createStyles((theme) => ({
	container: {
		padding: "1rem 4rem",
		overflow: "hidden",
		"@media (max-width: 768px)": {
			padding: "1rem 2rem",
		},
	},
	title: {
		fontSize: "1.7rem",
		"@media (max-width: 768px)": {
			fontSize: "1.5rem",
		},
	},
	link: {
		display: "flex",
		color: "#626262",
		position: "relative",
		alignItems: "center",
		textDecoration: "none",
		fontSize: "0.9rem",
		"&::after": {
			content: "''",
			display: "block",
			width: "0px",
			height: "2px",
			backgroundColor: theme.colors.blue[6],
			position: "absolute",
			bottom: "0",
			left: "0",
			transition: "width 0.3s ease-in-out",
		},
		"&:hover::after": {
			width: "80%",
		},
		"&:hover": {
			color: theme.colors.blue[6],
		},
		whiteSpace: "nowrap",
		"@media (max-width: 768px)": {
			fontSize: "0.8rem",
		},
	},
	titlelink: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	recent: {
		display: "flex",
		overflowX: "scroll",
		position: "relative",
		flexWrap: "nowrap",
		alignItems: "flex-start",
		"&::-webkit-scrollbar": {
			height: "0.1rem",
			backgroundColor: "transparent",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor:
				theme.colorScheme === "dark" ? "#6262620f" : "#F7F7F30F",
			transition: "background-color 0.3s ease-in-out",
		},
		"&:hover::-webkit-scrollbar-thumb": {
			backgroundColor:
				theme.colorScheme === "dark" ? "#626262" : "#F7F7F3",
		},
		gap: "3rem",
		padding: "0.5rem 1rem",
		"@media (max-width: 768px)": {
			gap: "2rem",
			padding: "0.5rem 0.5rem",
		},
	},
	badgeCard: {
		minWidth: "300px",
	},
}));

export default function RecentEvents({ posts }) {
	const { classes, cx } = useStyles();
	return (
		<section className={classes.container}>
			<div className={classes.titlelink}>
				<h2 className={classes.title}>Recent Events</h2>
				<Link href="/events" className={classes.link}>
					View All&nbsp;
					<FaChevronRight />
				</Link>
			</div>
			<div className={classes.recent}>
				{posts.map((post) => (
					<BadgeCard
						key={post.id}
						{...post}
						className={classes.badgeCard}
					/>
				))}
			</div>
		</section>
	);
}
