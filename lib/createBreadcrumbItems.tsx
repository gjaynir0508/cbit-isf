export default function ceateBreadcrumbItems({ asPath }) {
	asPath = asPath.replace(/#.*/i, "");
	const pathItems = asPath.split("/");
	const breadcrumbs = pathItems.map((item = " ", index) => ({
		title:
			item.replace(/-/g, " ").slice(0, 1).toUpperCase() + item.slice(1),
		href: pathItems.slice(0, index + 1).join("/"),
	}));
	return [{ title: "Home", href: "/" }, ...breadcrumbs.slice(1)];
}
