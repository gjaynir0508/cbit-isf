import GlowButton from "@components/GlowButton";
import LinkWithPopover from "@components/LinkWithPopover";
import { createStyles, Text } from "@mantine/core";
import Link from "next/link";
import {
	FaBookmark,
	FaExternalLinkAlt,
	FaIdCard,
	FaLink,
	FaRupeeSign,
} from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const useStyles = createStyles((theme) => ({
	container: {
		display: "flex",
		padding: "2rem 4rem 3rem 4rem",
		// padding: "0rem 4rem 3rem 4rem",
		flexDirection: "column",
		position: "relative",
		alignItems: "center",
		gap: "32px",
		"& h2": {
			fontSize: "2rem",
		},
		// "& h2": {
		// 	fontSize: "1.5rem",
		// 	position: "sticky",
		// 	top: 72,
		// 	width: "100vw",
		// 	backgroundColor: theme.colorScheme === "dark" ? "#0007" : "#fff7",
		// 	backdropFilter: "blur(10px)",
		// 	margin: 0,
		// 	padding: "1rem 0",
		// 	textAlign: "center",
		// 	zIndex: 99,
		// },
		background: "linear-gradient(90deg, #00B2FF99 0%, #00B2FF55 100%)",
		"@media (max-width: 768px)": {
			padding: "1.5rem 2rem 3rem 2rem",
			// padding: "0rem 2rem 3rem 2rem",
		},
	},
	list: {
		listStyle: "none",
		padding: 0,
		"& li": {
			display: "flex",
			alignItems: "center",
			gap: "1rem",
			fontSize: "1.2rem",
			backgroundColor: "#0032",
			marginBottom: "0.4rem",
			padding: "0.5rem 1rem",
			borderRadius: "0.25rem",
			color: theme.colorScheme === "dark" ? "#f0f0f0" : "#0b0b0b",
			"& span": {
				display: "flex",
				alignItems: "center",
			},
			justifyContent: "center",
		},
		"@media (max-width: 768px)": {
			"& li": {
				textAlign: "left",
			},
		},
	},
	more: {
		display: "flex",
		alignItems: "center",
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? "#fff7" : "#0007",
		tansition: "color 0.2s ease-in-out",
		"&:hover": {
			color: theme.colorScheme === "dark" ? "#fff" : "#000",
		},
	},
}));

export default function Membership() {
	const { classes, cx, theme } = useStyles();
	return (
		<section className={classes.container}>
			<h2>ISF Membership Benefits</h2>
			<ul className={classes.list}>
				<li>
					<span>
						<FaBookmark />
					</span>
					<Text>
						Priority for publishing their papers in Journal of
						Education.
					</Text>
				</li>
				<li>
					<span>
						<GiBookshelf />
					</span>
					<Text>
						Members can also subscribe for other publications such
						as IETE Journal of Research and IETE Technical Review
						(available online).
					</Text>
				</li>
				<li>
					<span>
						<FaRupeeSign />
					</span>
					<Text>
						ISF students are welcome to attend IETE technical
						programs in India at reduced Regn. fees.
					</Text>
				</li>
				<li>
					<span>
						<FaIdCard />
					</span>
					<Text>
						ISF member will be issued with an Identity Card.
					</Text>
				</li>
			</ul>
			<GlowButton text="Get Membership" />
			<LinkWithPopover
				target={
					<Link
						href="https://www.iete.org/isf.html"
						className={classes.more}
						target="_blank"
					>
						More Info&nbsp;
						<FaExternalLinkAlt />
					</Link>
				}
				popoverContent={
					<Text size="sm">
						<FaLink />
						&nbsp;&nbsp;IETE Student Forum Official Website
					</Text>
				}
				position="bottom"
			/>
		</section>
	);
}
