import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "@styles/globals.css";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";
import AllMetaTags, { AllMetaTagsProps } from "@components/AllMetaTags";
import MainLayout from "@layouts/MainLayout";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";
import { useEffect } from "react";

interface CustomAppProps extends AppProps {
	Component: AppProps["Component"] & {
		PageLayout?: React.ComponentType<{ children: React.ReactNode }>;
		noLayout?: boolean;
		metaTagApplied?: boolean;
	};
}

export default function App(props: CustomAppProps) {
	const { Component, pageProps } = props;
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "light",
		getInitialValueInEffect: true,
	});
	useEffect(() => {
		const matchUserTheme = window?.matchMedia(
			"(prefers-color-scheme: dark)"
		);
		setColorScheme(matchUserTheme.matches ? "dark" : "light");
		matchUserTheme.addEventListener("change", (e) => {
			setColorScheme(e.matches ? "dark" : "light");
		});
	}, [setColorScheme]);

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);
	return (
		<>
			<Head>
				<title>CBIT - IETE Student Forum (CBIT-ISF)</title>
				{!Component.metaTagApplied && <AllMetaTags />}
			</Head>

			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme,
					}}
				>
					{Component.noLayout ? (
						<Component {...pageProps} />
					) : Component.PageLayout ? (
						<Component.PageLayout>
							<Component {...pageProps} />
						</Component.PageLayout>
					) : (
						<MainLayout>
							<Component {...pageProps} />
						</MainLayout>
					)}
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}
