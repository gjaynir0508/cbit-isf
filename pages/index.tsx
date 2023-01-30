import About from "@components/AboutSection";
import { HeroImageBackground } from "@components/Hero";
import Membership from "@components/Membership";
import OjbectivesActivities from "@components/ObjectivesActivities";
import RecentEvents from "@components/RecentEventsSection";
import UpdatesSection from "@components/UpdatesSection";
import { getRecentPostsPreview } from "@lib/getPosts";

export default function Home({ posts }) {
	return (
		<>
			<HeroImageBackground />
			<UpdatesSection />
			<RecentEvents posts={posts} />
			<About />
			<OjbectivesActivities />
			<Membership />
		</>
	);
}

export function getStaticProps() {
	const posts = getRecentPostsPreview({ count: 5 });
	return {
		props: { posts },
	};
}
