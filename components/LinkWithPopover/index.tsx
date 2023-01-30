import { useDisclosure } from "@mantine/hooks";
import { Popover, useMantineTheme } from "@mantine/core";

interface LinkWithPopoverProps {
	target: React.ReactNode;
	popoverContent: React.ReactNode;
	bg?: string;
	border?: string;
	position?: "top" | "bottom" | "left" | "right";
}

export default function LinkWithPopover({
	target,
	popoverContent,
	bg,
	border,
	position = "top",
}: LinkWithPopoverProps) {
	const [opened, { close, open }] = useDisclosure(false);
	const theme = useMantineTheme();
	bg =
		bg ||
		(theme.colorScheme === "dark"
			? theme.colors.dark[7]
			: theme.colors.gray[4]);
	border = border || `1px solid ${theme.colors.dark[3]}`;
	return (
		<Popover
			width={400}
			position={position}
			withArrow
			shadow="lg"
			opened={opened}
			styles={{
				dropdown: {
					background: bg,
					border: border,
					textAlign: "center",
				},
			}}
		>
			<Popover.Target>
				<span onMouseEnter={open} onMouseLeave={close}>
					{target}
				</span>
			</Popover.Target>
			<Popover.Dropdown sx={{ pointerEvents: "none" }}>
				{popoverContent}
			</Popover.Dropdown>
		</Popover>
	);
}
