import { FaChevronUp, FaSearch } from "react-icons/fa";
import FAB from "./FAB";
import { createStyles } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
	btns: {
		position: "fixed",
		bottom: "1rem",
		right: "0.5rem",
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
}));

export default function FABs() {
	const { classes, cx, theme } = useStyles();
	return (
		<div className={classes.btns}>
			<FAB>
				<FaSearch />
			</FAB>
			<FAB>
				<Link href="#">
					<FaChevronUp />
				</Link>
			</FAB>
		</div>
	);
}
