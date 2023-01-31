import Breadcrumbs from "@components/BreadCrums";
import ceateBreadcrumbItems from "@lib/createBreadcrumbItems";
import { getAllPosts, getPostById } from "@lib/getPosts";
import { Badge, createStyles, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { useEffect } from "react";
import Head from "next/head";
import AllMetaTags from "@components/AllMetaTags";

const useStyles = createStyles((theme, _params, getRef) => ({
	container: {
		padding: "6rem 4rem",
	},
	carousel: {
		"&:hover": {
			[`& .${getRef("carouselControls")}`]: {
				opacity: 1,
			},
		},
		"& img": {
			objectFit: "contain",
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
}));

export default function Event({ post }) {
	const { classes, cx, theme } = useStyles();
	const { asPath } = useRouter();
	const breadcrumbs = ceateBreadcrumbItems({ asPath });
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
				<title>ISF Event - {post.title}</title>
				<AllMetaTags
					pageTitle={post.title}
					pageDescription={post.description}
					ogImageUrl={post.images[0]}
					ogDescription={post.description}
					ogImageAlt={post.title}
					ogUrl={window.location.href}
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
				<Carousel
					loop
					withControls
					withIndicators
					withKeyboardEvents
					height={300}
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
								fill
							/>
						</Carousel.Slide>
					))}
				</Carousel>
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
