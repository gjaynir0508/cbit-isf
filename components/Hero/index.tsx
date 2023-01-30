import GlowButton from "@components/GlowButton";
import { Title, Text, Container, Button, createStyles } from "@mantine/core";
import { ForwardedRef } from "react";

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: "relative",
		paddingTop: 180,
		paddingBottom: 130,
		backgroundColor: "#000B",
		backgroundImage: "url(/assets/images/hero.jpeg)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundBlendMode: "multiply",
		"@media (max-width: 728px)": {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "flex-end",
		},
		minHeight: "80vh",
		fontFamily: "Inter, Roboto, sans-serif",
	},

	inner: {
		position: "relative",
		zIndex: 1,
	},

	title: {
		fontWeight: 800,
		fontSize: 48,
		letterSpacing: -1,
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		color: theme.white,
		marginBottom: theme.spacing.xs,
		textAlign: "center",
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,

		"@media (max-width: 520px)": {
			fontSize: 28,
			textAlign: "center",
		},
	},

	description: {
		color: theme.colors.gray[4],
		textAlign: "center",
		fontSize: theme.fontSizes.lg,

		"@media (max-width: 520px)": {
			fontSize: theme.fontSizes.md,
			textAlign: "center",
		},
	},

	descriptionBold: {
		fontWeight: 600,
		fontSize: 20,
		color: theme.colors.gray[3],
	},

	controls: {
		marginTop: theme.spacing.xl * 1.5,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,

		"@media (max-width: 520px)": {
			flexDirection: "column",
		},
	},

	control: {
		height: 42,
		fontSize: theme.fontSizes.md,

		"&:not(:first-of-type)": {
			marginLeft: theme.spacing.md,
		},

		"@media (max-width: 520px)": {
			"&:not(:first-of-type)": {
				marginTop: theme.spacing.md,
				marginLeft: 0,
			},
		},
		"&:hover": {
			backgroundColor: "#228be6 !important",
		},
	},

	secondaryControl: {
		color: theme.white,
		backgroundColor: "rgba(255, 255, 255, .4)",

		"&:hover": {
			backgroundColor: "rgba(255, 255, 255, .45) !important",
		},
	},
}));

export function HeroImageBackground() {
	const { classes, cx } = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.inner}>
				<Title className={classes.title}>
					CBIT IETE - Student Forum
				</Title>

				<Container size={640}>
					<Text size="md" className={classes.description}>
						The Student Forum Wing of{" "}
						<Text
							component="span"
							className={cx(
								classes.description,
								classes.descriptionBold
							)}
						>
							The Institute of Electronics and Telecommunication
							Engineers
						</Text>
					</Text>
				</Container>

				<div className={classes.controls}>
					<GlowButton text="Enroll as a Member" />
					<Button
						className={cx(
							classes.control,
							classes.secondaryControl
						)}
						size="lg"
						aria-label="Scroll to about section"
						component="a"
						href="#about"
						style={{ display: "inline-block" }}
					>
						About
					</Button>
				</div>
			</div>
		</div>
	);
}
