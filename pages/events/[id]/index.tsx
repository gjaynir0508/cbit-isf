import Breadcrumbs from "@components/BreadCrums";
import ceateBreadcrumbItems from "@lib/createBreadcrumbItems";
import { getAllPosts, getPostById } from "@lib/getPosts";
import {
	Button,
	Badge,
	createStyles,
	Notification,
	Text,
	ActionIcon,
} from "@mantine/core";
import { useRouter } from "next/router";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import Head from "next/head";
import AllMetaTags from "@components/AllMetaTags";
import Link from "next/link";
import { FaCheck, FaShare } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = createStyles((theme, _params, getRef) => ({
	container: {
		padding: "6rem",
	},
	flex: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		gap: "2rem",
		"@media (max-width: 800px)": {
			flexDirection: "column-reverse",
		},
	},
	carousel: {
		"&:hover": {
			[`& .${getRef("carouselControls")}`]: {
				opacity: 1,
			},
		},
		width: "60vw",
		"& img": {
			objectFit: "cover",
		},
		"@media (max-width: 800px)": {
			width: "100%",
			"& img": {
				objectFit: "contain",
			},
		},
	},

	carouselControls: {
		ref: getRef("carouselControls"),
		transition: "opacity 150ms ease",
		opacity: 0,
	},

	carouselIndicator: {
		width: 4,
		height: 4,
		transition: "width 250ms ease",

		"&[data-active]": {
			width: 16,
		},
	},
	shareButton: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		borderRadius: "0.25rem",
		width: "40%",
		background: theme.colors.blue[7],
		alignSelf: "center",
		transition: "background-color 150ms ease",
		cursor: "pointer",
		"&:hover": {
			backgroundColor: theme.colors.blue[8],
		},
		"& button": {
			color:
				theme.colorScheme === "dark" ? theme.colors.dark[0] : "white",
		},
		"@media (max-width: 800px)": {
			width: "100%",
		},
	},
	aside: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
		width: "100%",
		height: "100%",
		background:
			theme.colorScheme === "dark"
				? theme.colors.dark[9]
				: theme.colors.yellow[1],
		padding: "1rem",
	},
}));

export default function Event({ post }) {
	const { classes, cx, theme } = useStyles();
	const { asPath, basePath } = useRouter();
	const breadcrumbs = ceateBreadcrumbItems({ asPath });
	const [err, setErr] = useState(false);
	if (!post) return <div>Loading...</div>;
	const features = post.tags.map((tag) => (
		<Badge
			color={theme.colorScheme === "dark" ? "dark" : "gray"}
			key={tag.label}
			leftSection={tag.emoji}
		>
			{tag.label}
		</Badge>
	));
	return (
		<>
			<Head>
				<title key="title">{`${post.title} - CBIT ISF Event`}</title>
				<AllMetaTags
					pageTitle={post.title}
					pageDescription={post.description}
					ogImageUrl={post.images[0]}
					ogDescription={post.description}
					ogImageAlt={post.title}
					ogUrl={`https://isf-cbit.vercel.app/events/${post.id}`}
					twitterCardTitle={post.title}
					ogType="article"
					articlePublishedTime={post.date}
					articleModifiedTime={post.date}
					articleAuthor="ISF"
					articleSection="Events ISF"
					articleTags={post.tags.map((tag) => tag.label)}
				/>
			</Head>
			<div className={classes.container}>
				<Breadcrumbs items={breadcrumbs} />
				<h1>{post.title}</h1>
				<Text>Date: {post.date}</Text>
				{features}
				<Text>{post.description}</Text>
				<p> {basePath}</p>
				<section className={classes.flex}>
					<Carousel
						loop
						withControls
						withIndicators
						withKeyboardEvents
						height={400}
						classNames={{
							root: classes.carousel,
							controls: classes.carouselControls,
							indicator: classes.carouselIndicator,
						}}
					>
						{post.images.map((src, i) => (
							<Carousel.Slide key={i}>
								<Image
									src={src}
									alt={`${post.title} image ${i + 1}`}
									width={1000}
									height={400}
								/>
							</Carousel.Slide>
						))}
					</Carousel>
					<aside className={classes.aside}>
						<Text>
							<b>Venue</b>: {post.venue || "CBIT Hyderabd"}
						</Text>
						<Text>
							<b>Chief Guest</b>: {post.chiefGuest || "--"}
						</Text>
						{post.guestOfHonor && (
							<Text>
								<b>Guest of Honour</b>: {post.guestOfHonour}
							</Text>
						)}
						{post.regLink && (
							<Text>
								<b>Registration Link</b>:{" "}
								<Link
									href={post.regLink}
									title={`${post.title} Registration Form`}
								>
									Register Now
								</Link>
							</Text>
						)}
						{post.time && (
							<Text>
								<b>Time</b>: {post.time}
							</Text>
						)}
						<div
							className={cx(classes.shareButton)}
							onClick={async () => {
								try {
									await navigator.share({
										title: post.title,
										text: post.description,
										url: `${window.location.origin}/events/${post.id}`,
									});
								} catch {
									setErr(true);
								}
							}}
						>
							<Text color={"white"} size="md">
								Share
							</Text>
							<ActionIcon
								title="Share this event"
								radius="md"
								size={36}
							>
								<FaShare />
							</ActionIcon>
						</div>
						{err && (
							<Notification
								icon={<FaCheck />}
								title="We notify you that"
							>
								Sorry! We couldn&apos;t share this event
							</Notification>
						)}
					</aside>
				</section>
				<p>{post.writeup}</p>
			</div>
		</>
	);
}

Event.metaTagsApplied = true;

export function getStaticProps({ params }) {
	const post = getPostById(params.id);
	return {
		props: {
			post,
		},
	};
}

export function getStaticPaths() {
	const posts = getAllPosts();
	const paths = posts.map((post) => ({
		params: { id: post.id },
	}));
	return {
		paths,
		fallback: true,
	};
}
