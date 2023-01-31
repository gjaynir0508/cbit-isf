import {
	Card,
	Image,
	Text,
	Group,
	Badge,
	Button,
	ActionIcon,
	Notification,
	createStyles,
} from "@mantine/core";
import { FaShare, FaCheck } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
	},

	section: {
		borderBottom: `1px solid ${
			theme.colorScheme === "dark"
				? theme.colors.dark[4]
				: theme.colors.gray[3]
		}`,
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		paddingBottom: theme.spacing.md,
	},

	like: {
		color: theme.colors.red[6],
	},

	label: {
		textTransform: "uppercase",
		fontSize: theme.fontSizes.xs,
		fontWeight: 700,
	},
}));

interface BadgeCardProps {
	image: string;
	title: string;
	date: string;
	description: string;
	tags: {
		emoji: string;
		label: string;
	}[];
	className?: string;
	id: string | number;
}

export function BadgeCard({
	image,
	title,
	description,
	date,
	tags,
	className = "",
	id,
}: BadgeCardProps) {
	const { classes, theme, cx } = useStyles();
	const [err, setErr] = useState(false);
	const router = useRouter();

	const features = tags.map((tag) => (
		<Badge
			color={theme.colorScheme === "dark" ? "dark" : "gray"}
			key={tag.label}
			leftSection={tag.emoji}
		>
			{tag.label}
		</Badge>
	));

	return (
		<Card
			withBorder
			radius="md"
			p="md"
			className={cx(classes.card, className)}
		>
			<Card.Section>
				<Image src={image} alt={title} height={180} />
			</Card.Section>

			<Card.Section className={classes.section} mt="md">
				<Group position="apart">
					<Text size="lg" weight={500}>
						{title}
					</Text>
					<Badge size="sm">{date}</Badge>
				</Group>
				<Text size="sm" mt="xs">
					{description.substring(0, 50)}{" "}
					{description.length > 50 && "..."}
				</Text>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text mt="md" className={classes.label} color="dimmed">
					Related to
				</Text>
				<Group spacing={7} mt={5}>
					{features}
				</Group>
			</Card.Section>

			<Group mt="md">
				<Link href={`/events/${id}`} className="flex1">
					<Button radius="md">Show details</Button>
				</Link>
				<ActionIcon
					title="Share this event"
					variant="default"
					radius="md"
					size={36}
					onClick={async () => {
						try {
							await navigator.share({
								title,
								text: description,
								url: `${window.location.origin}/events/${id}`,
							});
						} catch {
							setErr(true);
						}
					}}
				>
					<FaShare />
				</ActionIcon>
				{err && (
					<Notification icon={<FaCheck />} title="We notify you that">
						Sorry! We couldn&apos;t share this event
					</Notification>
				)}
			</Group>
		</Card>
	);
}
