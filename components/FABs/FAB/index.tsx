import { ActionIcon, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	btn: {
		borderRadius: "8px",
		background:
			theme.colorScheme === "dark"
				? theme.fn.rgba(theme.colors.dark[4], 0.4)
				: theme.fn.rgba(theme.colors.gray[4], 0.4),
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
