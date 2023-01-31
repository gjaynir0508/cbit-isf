import { createStyles } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
	updates: {
		"& h3": {
			background: theme.colorScheme === "light" ? "#D0E5FF" : "#272727",
			color: theme.colorScheme === "light" ? "#27272799" : "#D0E5FF",
			padding: "8px 16px",
			fontSize: "small",
			borderRadius: "4px 0px 0px 4px",
		},
		display: "flex",
		overflow: "hidden",
		alignItems: "center",
		margin: "1rem 4rem",
		"@media (max-width: 768px)": {
			margin: "1rem 2rem",
			flexDirection: "column",
			"& h3": {
				borderRadius: "4px 4px 0px 0px",
				padding: "8px 16px 4px",
				marginBottom: "0",
				width: "100%",
				textAlign: "center",
			},
		},
	},
	marquee: {
		display: "flex",
		width: "100%",
		gap: "5rem",
		padding: "0 1rem",
		overflowX: "scroll",
		border: `4px solid ${
			theme.colorScheme === "light" ? "#D0E5FF" : "#272727"
		}`,
		height: "2.25rem",
		borderRadius: "0px 4px 4px 0px",
		"@media (max-width: 768px)": {
			borderRadius: "0px 0px 4px 4px",
			fontSize: "smaller",
		},
		"&::-webkit-scrollbar": {
			display: "none",
			height: 0,
		},
		"& a": {
			whiteSpace: "nowrap",
			textDecorationStyle: "dotted",
			textUnderlineOffset: "2px",
			color: theme.colorScheme === "light" ? "#272727" : "#D0E5FF",
			transition: "color 0.3s ease-in-out",
			"&:hover": {
				color: theme.colorScheme === "light" ? "#1280de" : "#e3be38",
			},
		},
		"& span": {
			display: "flex",
			gap: "5rem",
			paddingLeft: "2rem",
			animation: "marquee var(--time, 50s) linear infinite",
			animationDelay: "5s",
		},
		"@keyframes marquee": {
			"0%": {
				transform: "translate(0, 0)",
			},
			"100%": {
				transform: "translate(-100%, 0)",
			},
		},
		"& span.marquee1": {
			animationDelay: "calc((var(--time, 50s) / 2) + 5s)",
			paddingLeft: "100%",
		},
		"&:hover span": {
			animationPlayState: "paused",
		},
	},
}));

export default function UpdatesSection() {
	const { classes, cx } = useStyles();
	const NO_OF_UPDATES = 2;
	return (
		<div className={classes.updates}>
			<h3>Updates</h3>
			<div className={classes.marquee}>
				{[0, 0].map((_, i) => (
					<span key={i} className={classes[`marquee${i}`]}>
						<Link href="/events/1">
							New! A Webinar on 5G Wireless Network-A detailed
							Survey by Prof. C. Murali on 9th Feb 2023
						</Link>
						<Link href="/events/2">
							Attention!!! Dear Students CBIT - ISF is inviting
							Proposals and Creative Ideas on Technical events to
							conduct for the benefit of Students
						</Link>
					</span>
				))}
			</div>
		</div>
	);
}
