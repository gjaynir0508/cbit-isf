import { Text } from "@mantine/core";
import Image from "next/image";
import { createStyles } from "@mantine/core";
import Link from "next/link";
import LinkWithPopover from "@components/LinkWithPopover";
import { FaLink } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
	container: {
		padding: "2rem 4rem 5rem",
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
	},
	verticalFlex: {
		display: "flex",
		flexDirection: "column",
		gap: "2rem",
		justifyContent: "center",
		alignItems: "center",
	},
	about: {
		"& h2": {
			fontSize: "2rem",
		},
		"& a": {
			textDecoration: "underline",
			textUnderlineOffset: "2px",
			fontWeight: "bolder",
			"&:hover": {
				color: theme.colors.blue[6],
			},
			color: "inherit",
			transition: "color 0.3s ease-in-out",
		},
	},
	flex: {
		display: "flex",
		gap: "1rem",
		alignItems: "center",
		justifyContent: "center",
		maxWidth: "min(70vw, 1080px)",
		"@media (max-width: 768px)": {
			flexDirection: "column",
		},
	},
}));

export default function About() {
	const { classes, cx, theme } = useStyles();
	return (
		<section
			id="about"
			className={cx(classes.container, classes.verticalFlex)}
		>
			<div className={cx(classes.about, classes.verticalFlex)}>
				<h2>About IETE</h2>
				<div className={classes.flex}>
					<Image
						src={
							theme.colorScheme === "dark"
								? "/logo_grad1.png"
								: "/logo_grad2.png"
						}
						alt="IETE Logo"
						width={150}
						height={150}
						quality={90}
					/>
					<Text>
						The Institution of Electronics and Telecommunication
						Engineers (IETE) is India&apos;s leading recognized
						professional society devoted to the advancement of
						Science and Technology of Electronics, Telecommunication
						& IT. Founded in 1953. The IETE is the National Apex
						Professional body of Electronics and Telecommunication,
						Computer Science and IT Professionals. It serves more
						than 1,25,000 members (including Corporate, Student and
						ISF members) through various 63 Centres, spread all over
						India and abroad. The Institution provides leadership in
						Scientific and Technical areas of direct importance to
						the national development and economy.{" "}
						<LinkWithPopover
							target={
								<Link
									target="_blank"
									href="https://www.google.com/url?q=https%3A%2F%2Fwww.iete.org%2FRecognition%2520SIRO.pdf&sa=D&sntz=1&usg=AOvVaw3tgGSFUi85CAlXdhmCH7XA"
								>
									Government of India has recognised IETE as a
									Scientific and Industrial Research
									Organization (SIRO) and also notified as an
									educational Institution of national
									eminence. The objectives of IETE focus on
									advancing electro-technology
								</Link>
							}
							popoverContent={
								<Text size="sm">
									<FaLink />
									&nbsp; Recognition Letter PDF at
									https://iete.org
								</Text>
							}
						/>
						. The IETE conducts and sponsors technical meetings,
						conferences, symposia, and exhibitions all over India,
						publishes technical journals and provides continuing
						education as well as career advancement opportunities to
						its members.
					</Text>
				</div>
			</div>
			<div className={cx(classes.about, classes.verticalFlex)}>
				<h2>About IETE - Students&apos; Forum (ISF)</h2>
				<div className={classes.flex}>
					<Image
						src={
							theme.colorScheme === "dark"
								? "/logo_grad3_cbit.png"
								: "/logo_grad2_cbit.png"
						}
						alt="IETE Logo"
						width={150}
						height={150}
						quality={90}
					/>
					<Text>
						The Institution of Electronics and Telecommunication
						Engineers (IETE) founded in 1953 is one of the leading
						Professional Society in India. With the great vision of
						founder and subsequent forefathers and stalwarts who
						were leading light of the Institution IETE, have been
						devoting and contributing for the advancement of Science
						and Technology in the fields of Electronics,
						Communication Engineering, Computer Science, Information
						Technology and other related subjects. The major focus
						of IETE is to provide engineering education i.e. Degree
						and Diploma level certifications to younger generation
						at affordable cost who can not afford it through regular
						& private engineering institutions at exorbitant cost.
						IETE has got two streams of Student base. First wing is
						the students of alma-mater , IETE , viz, the pass outs
						of DIPIETE , AMIETE and ALCCS students . For them we
						have an Alumni Association formed in 2013 and the Second
						one is the Engineering students studying in Engineering
						Colleges and Polytechnics across the Country. This wing
						is the ISF ( IETE Students Forum ). More than 550 live
						ISFs are functioning in India today with a student
						membership of more than 60,000.
					</Text>
				</div>
			</div>
		</section>
	);
}
