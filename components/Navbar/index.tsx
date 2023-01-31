import Image from "next/image";
import { useRouter } from "next/router";
import { createStyles, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ActionToggle } from "@components/ThemeSwitch";
import { useEffect, useState } from "react";
import { useScrollLock } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
	nav: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 100,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
		},
		padding: "16px 64px",
		backdropFilter: "blur(6px)",
		"@media (max-width: 768px)": {
			padding: "16px 32px",
		},
	},
	navWithBglight: {
		backgroundColor: theme.fn.rgba(theme.colors.gray[0], 0.7),
		transition: "background-color 0.3s ease-in-out",
	},
	navWithBgdark: {
		backgroundColor: theme.fn.rgba(theme.colors.dark[7], 0.8),
		transition: "background-color 0.3s ease-in-out",
	},
	container: {
		display: "flex",
		alignItems: "center",
	},
	brand: {
		gap: "16px",
		"@media (max-width: 768px)": {
			alignSelf: "center",
			justifySelf: "center",
		},
	},
	logoMobile: {
		display: "none",
		"@media (max-width: 768px)": {
			display: "block",
		},
	},
	links: {
		gap: "24px",
		"& a:hover span": {
			color: theme.colors.blue[6],
		},
		"@media (max-width: 768px)": {
			display: "flex",
			flexDirection: "column",
			position: "fixed",
			top: 0,
			left: "-100%",
			transition: "left 0.3s ease-in-out",
			width: "80vw",
			height: "100vh",
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[7]
					: theme.colors.gray[1],
			"&.active": {
				left: 0,
			},
			zIndex: 1000,
			padding: "64px 32px",
			alignItems: "center",
			justifyContent: "center",
		},
	},
	brandLink: {
		fontWeight: 700,
		fontSize: 20,
		fontFamily: "Inter, Roboto, sans-serif",
	},
	transparentBg: {
		color: "#E3D6D6",
		"& a": {
			color: "#E3D6D6",
		},
	},
	active: {
		color:
			theme.colorScheme === "dark"
				? theme.colors.orange[4]
				: theme.colors.blue[6],
	},
	actionBtns: {
		display: "flex",
		gap: "1.5rem",
		alignItems: "center",
		"& svg": {
			"&:hover": {
				fill: theme.colors.blue[6],
			},
			transition: "fill 0.3s ease-in-out",
		},
	},
	toggle: {
		display: "none",
		"@media (max-width: 768px)": {
			display: "block",
			fontSize: "1.5rem",
			cursor: "pointer",
			position: "relative",
			zIndex: 1001,
			"&:hover": {
				color: theme.colors.blue[6],
			},
		},
	},
}));

export default function Navbar() {
	const router = useRouter();
	const theme = useMantineTheme();
	const isHome = router.pathname === "/";
	const [isNavBg, setNavBg] = useState(false);
	const [navOpen, setNavOpen] = useState(false);
	const [lockScroll, setLockScroll] = useScrollLock();

	const changeNavBg = () => {
		window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
	};
	useEffect(() => {
		window.addEventListener("scroll", changeNavBg);
		return () => {
			window.removeEventListener("scroll", changeNavBg);
		};
	}, []);

	const { classes, cx } = useStyles();
	return (
		<nav
			className={
				isHome && !isNavBg
					? cx(classes.nav, classes.transparentBg)
					: cx(classes.nav, classes[`navWithBg${theme.colorScheme}`])
			}
		>
			<span
				className={classes.toggle}
				onClick={() =>
					setNavOpen((t) => {
						setLockScroll(!t);
						return !t;
					})
				}
			>
				{navOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
			</span>
			<div className={cx(classes.brand, classes.container)}>
				<Image
					src={
						isHome && !isNavBg
							? "/logo_pale.png"
							: theme.colorScheme === "light"
							? "/logo_black.png"
							: "/logo_white.png"
					}
					alt="IETE Logo"
					width="48"
					height="48"
				/>
				<Link className={classes.brandLink} href="/">
					<Text
						color={
							isHome && !isNavBg
								? "#BDBDBD"
								: theme.colorScheme === "light"
								? "#2B2B2B"
								: "white"
						}
					>
						CBIT&nbsp;ISF
					</Text>
				</Link>
			</div>

			<div
				className={cx(
					classes.container,
					classes.links,
					navOpen ? "active" : ""
				)}
			>
				<Link
					href="/"
					onClick={() => {
						setNavOpen(false);
						setLockScroll(false);
					}}
					className={classes.logoMobile}
				>
					<Image
						src={
							theme.colorScheme === "dark"
								? "/logo_grad3.png"
								: "/logo_grad1.png"
						}
						alt="IETE Logo"
						width="100"
						height="100"
						quality={100}
					/>
				</Link>
				<Link
					href="/"
					onClick={() => {
						setNavOpen(false);
						setLockScroll(false);
					}}
				>
					<Text
						component="span"
						size="md"
						color={
							isHome && !isNavBg
								? "#BDBDBD"
								: theme.colorScheme === "light"
								? "#2B2B2B"
								: "white"
						}
						className={
							router.pathname === "/" ? cx(classes.active) : ""
						}
					>
						Home
					</Text>
				</Link>
				<Link
					href="/student-members"
					onClick={() => {
						setNavOpen(false);
						setLockScroll(false);
					}}
				>
					<Text
						component="span"
						size="md"
						color={
							isHome && !isNavBg
								? "#BDBDBD"
								: theme.colorScheme === "light"
								? "#2B2B2B"
								: "white"
						}
						className={
							router.pathname === "/student-members"
								? cx(classes.active)
								: ""
						}
					>
						Student Members
					</Text>
				</Link>
				<Link
					href="/events"
					onClick={() => {
						setNavOpen(false);
						setLockScroll(false);
					}}
				>
					<Text
						component="span"
						size="md"
						color={
							isHome && !isNavBg
								? "#BDBDBD"
								: theme.colorScheme === "light"
								? "#2B2B2B"
								: "white"
						}
						className={
							router.pathname === "/events"
								? cx(classes.active)
								: ""
						}
					>
						Events
					</Text>
				</Link>
			</div>
			<div className={classes.actionBtns}>
				<Link
					href="https://www.instagram.com/iete_cbit/"
					title="CBIT ISF Instagram"
					target="_blank"
				>
					<Text
						component="span"
						size="md"
						color={
							isHome && !isNavBg
								? "#BDBDBD"
								: theme.colorScheme === "light"
								? "#2B2B2B"
								: "white"
						}
					>
						<FaInstagram />
					</Text>
				</Link>
				<ActionToggle isTransparent={isHome && !isNavBg} />
			</div>
		</nav>
	);
}
