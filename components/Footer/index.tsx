import Image from "next/image";
import { Button, createStyles, Text, useMantineTheme } from "@mantine/core";
import {
	FaArrowDown,
	FaExternalLinkAlt,
	FaFacebook,
	FaInstagram,
	FaMoneyBill,
	FaPen,
} from "react-icons/fa";
import Link from "next/link";
import DashedArrow from "./DashedArrow";

const useStyles = createStyles((theme) => ({
	footer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "stretch",
		padding: "16px 64px",
		gap: "64px",
		"@media (max-width: 768px)": {
			flexDirection: "column",
			padding: "3rem 1.5rem",
			gap: "32px",
		},
	},
	linkssection: {
		"& a": {
			textDecoration: "none",
		},
		"@media (max-width: 768px)": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},
	},
	images: {
		gap: "16px",
		display: "flex",
		alignItems: "center",
		maxHeight: "84px",
		overflow: "hidden",
		"@media (max-width: 768px)": {
			justifyContent: "space-between",
			"& img:nth-child-of-type(2)": {
				maxWidth: "150px",
				height: "auto",
			},
		},
	},
	membership: {
		display: "flex",
		flexGrow: 1,
		flexDirection: "column",
		gap: "32px",
		alignItems: "center",
		justifyContent: "center",
		"&:target": {
			animationName: "glow",
			animationDuration: "2s",
			animationDirection: "alternate",
		},
		"@keyframes glow": {
			"0%": {
				backgroundColor: "transparent",
			},
			"50%": {
				backgroundColor: "#00B2FF55",
			},
			"100%": {
				backgroundColor: "transparent",
			},
		},
		"@media (max-width: 768px)": {
			borderTop: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[3]
			}}`,
		},
	},
	buttons: {
		display: "flex",
		alignItems: "center",
		gap: "8px",
		"@media (max-width: 768px)": {
			flexDirection: "column",
			gap: "42px",
			"& > svg": {
				display: "none",
			},
		},
	},
	linkslist: {
		display: "flex",
		gap: "16px",
		listStyle: "none",
		"& h4": {
			marginBottom: "16px",
		},
		"@media (max-width: 768px)": {
			maxWidth: "70vw",
			justifyContent: "space-between",
			padding: "0 1rem",
		},
	},
	links: {
		listStyle: "none",
		paddingLeft: "16px",
		"& li": {
			marginBottom: "8px",
			"& a": {
				color: theme.colorScheme === "light" ? "#000" : "#bbb",
				"&:hover": {
					color: theme.colors.blue[6],
				},
			},
		},
	},
	social: {
		display: "flex",
		height: "1.5rem",
		alignItems: "center",
	},
	fb: {
		"&:hover": {
			color: "#3b5998 !important",
		},
	},
	ig: {
		"&:hover": {
			color: "#e1306c !important",
		},
	},
	down: {
		display: "none",
		position: "relative",
		"@media (max-width: 768px)": {
			display: "block",
			"&::before": {
				content: "''",
				display: "block",
				position: "absolute",
				height: "16px",
				width: "2.5px",
				backgroundColor:
					theme.colorScheme === "light" ? "#000" : "#bbb",
				bottom: "80%",
				left: "calc(50% + 0.5px)",
				transform: "translateX(-50%)",
			},
		},
	},
}));

export default function Footer() {
	const theme = useMantineTheme();
	const { classes, cx } = useStyles();
	return (
		<footer className={classes.footer}>
			<div className={classes.linkssection}>
				<div className="college">
					<div className={classes.images}>
						<Link href="https://www.iete.org" target="_blank">
							{theme.colorScheme === "light" ? (
								<Image
									src="/logo_blue.png"
									alt="IETE Logo"
									width="72"
									height="72"
								/>
							) : (
								<Image
									src="/logo_white.png"
									alt="IETE Logo"
									width="72"
									height="72"
								/>
							)}
						</Link>
						<Link href="https://www.cbit.ac.in" target="_blank">
							<Image
								src="/assets/images/cbit43sq.png"
								alt="CBIT Hyderabad Logo"
								width="300"
								height="300"
							/>
						</Link>
					</div>
					<h3>
						IETE Student Forum - ISF,
						<br />
						Chaitanya Bharathi Institute of Technology, Hyderabad
					</h3>
				</div>
				<ul className={classes.linkslist}>
					<li>
						<h4>Quick Links</h4>
						<ul className={classes.links}>
							<li>
								<Link href="/">CBIT-ISF Home</Link>
							</li>
							<li>
								<Link href="/student-members">
									Student Members
								</Link>
							</li>
							<li>
								<Link href="/events">
									Activities and Events
								</Link>
							</li>
							<li>
								<Link href="/coordinators">Coordinators</Link>
							</li>
							<li>
								<Link href="https://www.cbit.ac.in">
									CBIT Website&nbsp;&nbsp;
									<FaExternalLinkAlt fontSize="12px" />
								</Link>
							</li>
							<li>
								<Link href="https://www.iete.org">
									IETE Website&nbsp;&nbsp;
									<FaExternalLinkAlt fontSize="12px" />
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<h4>Social Media</h4>
						<ul className={classes.links}>
							<li>
								<Link
									className={cx(classes.social, classes.ig)}
									href="https://www.instagram.com/iete_cbit/"
								>
									<FaInstagram style={{ marginTop: "2px" }} />
									&nbsp;iete_cbit
								</Link>
							</li>
							<li>
								<Link
									className={cx(classes.social, classes.fb)}
									href="https://www.facebook.com/people/IETE-CBIT/100067330913908/"
								>
									<FaFacebook style={{ marginTop: "2px" }} />
									&nbsp;IETE CBIT
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div id="enroll" className={classes.membership}>
				<h2>Enroll as a member</h2>
				<div className={classes.buttons}>
					<div>
						<Text pb="md">Pay the Membership Fee</Text>
						<Button
							variant="gradient"
							gradient={{ from: "", to: "" }}
						>
							<FaMoneyBill />
							&nbsp; Fee Payment Online
						</Button>
					</div>
					<DashedArrow
						stroke={
							theme.colorScheme === "light" ? "black" : "white"
						}
					/>
					<span className={classes.down}>
						<FaArrowDown />
					</span>
					<div>
						<Text pb="md">
							Fill in the Application Form & <br /> Upload the
							Payment Receipt
						</Text>
						<Button
							variant="gradient"
							gradient={{ from: "#23477C", to: "#1E778A" }}
						>
							<FaPen />
							&nbsp; ISF CBIT Membership Form
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}
