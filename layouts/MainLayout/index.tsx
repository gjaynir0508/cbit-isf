import FABs from "@components/FABs";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			{children}
			<FABs />
			<Footer />
		</>
	);
}
