import Breadcrumbs from "@components/BreadCrums";
import { CardWithCarousel } from "@components/CardWithCarousel";
import ceateBreadcrumbItems from "@lib/createBreadcrumbItems";
import { getAllPosts } from "@lib/getPosts";
import { createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useRouter } from "next/router";
import Image from "next/image";

const useStyles = createStyles((theme, _params, getRef) => ({
	container: {
		padding: "6rem 4rem",
	},
	events: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
		gridGap: "2rem",
	},
	carousel: {
		"&:hover": {
			[`& .${getRef("carouselControls")}`]: {
				opacity: 1,
			},
		},
		"& img": {
			objectFit: "cover",
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

export default function Events({ posts }) {
	const NO_OF_IMAGES = 14;
	const { classes, cx, theme } = useStyles();
	const router = useRouter();
	const breadcrumbs = ceateBreadcrumbItems({ asPath: router.asPath });
	return (
		<div className={classes.container}>
			<Breadcrumbs items={breadcrumbs} />
			<br />
			<Carousel
				loop
				withControls
				withIndicators
				withKeyboardEvents
				height={500}
				classNames={{
					root: classes.carousel,
					controls: classes.carouselControls,
					indicator: classes.carouselIndicator,
				}}
			>
				{Array(NO_OF_IMAGES)
					.fill(0)
					.map((_, i) => (
						<Carousel.Slide key={i}>
							<Image
								src={`/assets/images/carousel/${i + 1}.jpg`}
								alt={`Events Carousel Image ${i + 1}`}
								fill
							/>
						</Carousel.Slide>
					))}
			</Carousel>
			<h1>Events</h1>
			<section className={classes.events}>
				{posts.map((post, i) => (
					<CardWithCarousel key={i} {...post} />
				))}
			</section>
		</div>
	);
}

export function getStaticProps() {
	const posts = getAllPosts();
	return {
		props: { posts },
	};
}
