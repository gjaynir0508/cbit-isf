import events from "./events.json";

export function getAllPosts() {
	return events;
}

export function getPostsByTag(tag: string) {
	return events.filter((event) => event.tags.find((t) => t.label === tag));
}

export function getRecentPostsPreview({ count }: { count?: number } = {}) {
	return events
		.slice(-count)
		.map(({ id, title, date, description, images, tags }) => ({
			id,
			title,
			date,
			description,
			image: images[0],
			tags,
		}));
}

export function getPostById(id: string) {
	return events.find((event) => event.id === id);
}

export function getPostByTitleText(text: string) {
	return events.filter((event) => event.title.includes(text));
}

export function getPostByDescriptionText(text: string) {
	return events.filter(
		(event) =>
			event.description.includes(text) ||
			event.title.includes(text) ||
			event.writeup.includes(text)
	);
}
