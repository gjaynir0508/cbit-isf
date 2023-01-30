import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { BiSun, BiMoon } from "react-icons/bi";

export function ActionToggle({ isTransparent }: { isTransparent: boolean }) {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Group position="center">
			<ActionIcon
				onClick={() => toggleColorScheme()}
				size="lg"
				sx={(theme) => ({
					backgroundColor: isTransparent
						? "#bdbdbd3d"
						: theme.colorScheme === "dark"
						? "#19202777"
						: "#F0F0F077",
					color: isTransparent
						? "#bdbdbd"
						: theme.colorScheme === "dark"
						? theme.colors.yellow[4]
						: theme.colors.blue[6],
					border: "2px solid #bdbdbd44",
					"&:hover": {
						backgroundColor: isTransparent
							? "#bdbdbd77"
							: theme.colorScheme === "dark"
							? "#192027"
							: "#F0F0F0",
					},
					transition: "background-color 0.3s ease-in-out",
				})}
			>
				{colorScheme === "dark" ? <BiSun /> : <BiMoon />}
			</ActionIcon>
		</Group>
	);
}
