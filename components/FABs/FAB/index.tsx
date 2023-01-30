import { ActionIcon, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	btn: {
		borderRadius: "8px",
	},
}));

export default function FAB({ children }) {
	const { classes, cx, theme } = useStyles();
	return (
		<ActionIcon variant="light" size="lg" className={classes.btn}>
			{children}
		</ActionIcon>
	);
}
