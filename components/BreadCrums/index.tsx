import { Breadcrumbs as DefBreadcrumbs, Anchor } from "@mantine/core";
import { FaHome } from "react-icons/fa";

interface BreadcrumbsProps {
	items: { title: string; href: string }[];
	separator?: string;
}

export default function Breadcrumbs({
	items = [],
	separator = "/",
}: BreadcrumbsProps) {
	return (
		<DefBreadcrumbs separator={separator}>
			{items.map((item, index) => (
				<Anchor href={item.href} key={index}>
					{item.title === "Home" ? (
						<span
							style={{
								display: "flex",
								alignItems: "center",
								padding: "0 0.5rem",
							}}
						>
							<FaHome />
						</span>
					) : (
						item.title
					)}
				</Anchor>
			))}
		</DefBreadcrumbs>
	);
}
