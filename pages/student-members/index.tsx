import AllMetaTags from "@components/AllMetaTags";
import { createStyles } from "@mantine/core";
import Head from "next/head";

const useStyles = createStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		gap: "32px",
		alignItems: "center",
		justifyContent: "center",
		padding: "32px",
		paddingTop: "96px",
		"@media (max-width: 768px)": {
			padding: "64px 16px",
		},
	},
	iframe: {
		maxWidth: "80vw",
	},
}));
export default function StudentMembers() {
	const { classes, cx, theme } = useStyles();
	return (
		<>
			<Head>
				<title>Student Members</title>
				<AllMetaTags
					pageTitle="Student Members | ISF CBIT"
					pageDescription="View the Excel Sheet containing the list of student members of the CBIT IETE Student Forum"
					ogImageUrl="https://isf-cbit.vercel.app/assets/images/carousel/3.jpg"
					ogDescription="View the Excel Sheet containing the list of student members of the CBIT IETE Student Forum"
					ogImageAlt="Student Members | ISF CBIT"
					ogUrl={`https://isf-cbit.vercel.app/student-members`}
					twitterCardTitle="Student Members | ISF CBIT"
				/>
			</Head>
			<section className={classes.container}>
				<h1>Student Members</h1>
				<iframe
					className={classes.iframe}
					src="https://drive.google.com/file/d/18qezqY6Ln8osn-s8xlMqLEc_BfRUqUgD/preview"
					width="640"
					height="480"
					allow="autoplay"
				></iframe>
			</section>
		</>
	);
}
