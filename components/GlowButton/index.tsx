import styles from "./styles.module.scss";

export default function GlowButton({
	text = "Hi there 👋",
}: {
	text?: string;
}) {
	return (
		<a href="#enroll" className={styles["button-glow"]}>
			{text}
			<svg xmlns="http://www.w3.org/2000/svg">
				<rect
					pathLength="100"
					className={styles["glow"]}
					strokeLinecap="round"
				></rect>
				<rect
					pathLength="100"
					className={styles["border"]}
					strokeLinecap="round"
				></rect>
			</svg>
		</a>
	);
}
