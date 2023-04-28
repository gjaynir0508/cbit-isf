import { Avatar, Text, Button, Paper, useMantineTheme } from "@mantine/core";

interface UserInfoActionProps {
	avatar: React.ReactNode;
	name: string;
	teacherOrStudent: string;
	job: string;
}

export function UserInfoAction({
	avatar,
	name,
	teacherOrStudent,
	job,
}: UserInfoActionProps) {
	const theme = useMantineTheme();
	return (
		<Paper
			radius="md"
			withBorder
			p="lg"
			sx={(theme) => ({
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[8]
						: theme.white,
				minWidth: 300,
				maxWidth: 300,
				flex: 1,
			})}
		>
			<Avatar
				size={120}
				radius={120}
				mx="auto"
				style={{
					border: `2px solid ${theme.colors.blue[6]}`,
				}}
			>
				{avatar}
			</Avatar>
			<Text align="center" size="lg" weight={500} mt="md">
				{name}
			</Text>
			<Text align="center" color="dimmed" size="sm">
				{teacherOrStudent} • {job}
			</Text>
			<Button variant="default" fullWidth mt="md">
				Contact
			</Button>
		</Paper>
	);
}
