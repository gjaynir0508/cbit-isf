import keywords from "./keywords.json";

export interface AllMetaTagsProps {
	pageTitle?: string;
	pageDescription?: string;
	pageKeywords?: string[];
	faviconLightHref?: string;
	faviconDarkHref?: string;
	maskIconHref?: string;
	themeColorLight?: string;
	themeColorDark?: string;
	// pwaManifestHref?: string;
	ogType?: "website" | "article" | "profile";
	ogUrl?: string;
	ogDescription?: string;
	ogImageUrl?: string;
	ogImageAlt?: string;
	ogImageWidth?: number;
	ogImageHeight?: number;
	ogImageType?: string;
	ogLocale?: string;
	twitterCardType?: "summary" | "summary_large_image" | "app" | "player";
	twitterCardTitle?: string;
	isArticle?: boolean;
	isProfilePage?: boolean;
	articlePublishedTime?: string;
	articleModifiedTime?: string;
	articleAuthor?: string;
	articleSection?: string;
	articleTags?: string[];
	profileFName?: string;
	profileLName?: string;
	profileUsername?: string;
	profileGender?: "male" | "female";
}

// Default Values
const DEFAULT_PAGE_TITLE = "CBIT - IETE Student Forum (CBIT-ISF)";
const DEFAULT_PAGE_DESCRIPTION =
	"The Student Forum wing of IETE. CBIT IETE Student Chapter is a platform for students to learn, share and grow.";
const DEFAULT_PAGE_FAVICON_LIGHT_HREF = "/logo_black.png";
const DEFAULT_PAGE_FAVICON_DARK_HREF = "/logo_white.png";
const DEFAULT_PAGE_MASK_ICON_HREF = "/icons/logo.svg";
const DEFAULT_THEME_COLOR_LIGHT = "#0097e6";
const DEFAULT_THEME_COLOR_DARK = "#192a56";
const DEFAULT_PAGE_KEYWORDS = keywords;

// const DEFAULT_PWA_MANIFEST_HREF = "/webapp.webmanifest";

const DEFAULT_OG_TYPE = "website";
const DEFAULT_OG_URL = "https://isf-cbit.vercel.app/";
const DEFAULT_OG_DESCRIPTION =
	"Student Forum Wing of IETE. CBIT IETE Student Chapter is a platform for students to learn, share and grow.";
const DEFAULT_OG_IMAGE_URL =
	"https://isf-cbit.vercel.app/assets/images/hero.jpg";
const DEFAULT_OG_IMAGE_ALT = "CBIT ISF Image";
const DEFAULT_OG_IMAGE_WIDTH = 300;
const DEFAULT_OG_IMAGE_HEIGHT = 250;
const DEFAULT_OG_IMAGE_TYPE = "image/jpeg";
const DEFAULT_OG_LOCALE = "en_US";

const DEFAULT_TWITTER_CARD_TYPE = "summary_large_image";
const DEFAULT_TWITTER_CARD_TITLE = DEFAULT_PAGE_TITLE;

export default function AllMetaTags({
	pageTitle = DEFAULT_PAGE_TITLE,
	pageDescription = DEFAULT_PAGE_DESCRIPTION,
	pageKeywords = DEFAULT_PAGE_KEYWORDS,
	faviconLightHref = DEFAULT_PAGE_FAVICON_LIGHT_HREF,
	faviconDarkHref = DEFAULT_PAGE_FAVICON_DARK_HREF,
	maskIconHref = DEFAULT_PAGE_MASK_ICON_HREF,
	themeColorLight = DEFAULT_THEME_COLOR_LIGHT,
	themeColorDark = DEFAULT_THEME_COLOR_DARK,
	// pwaManifestHref = DEFAULT_PWA_MANIFEST_HREF,
	ogType = DEFAULT_OG_TYPE,
	ogUrl = DEFAULT_OG_URL,
	ogDescription = DEFAULT_OG_DESCRIPTION,
	ogImageUrl = DEFAULT_OG_IMAGE_URL,
	ogImageAlt = DEFAULT_OG_IMAGE_ALT,
	ogImageWidth = DEFAULT_OG_IMAGE_WIDTH,
	ogImageHeight = DEFAULT_OG_IMAGE_HEIGHT,
	ogImageType = DEFAULT_OG_IMAGE_TYPE,
	ogLocale = DEFAULT_OG_LOCALE,
	twitterCardType = DEFAULT_TWITTER_CARD_TYPE,
	twitterCardTitle = DEFAULT_TWITTER_CARD_TITLE,
	articlePublishedTime = "",
	articleModifiedTime = "",
	articleAuthor = "",
	articleSection = "",
	articleTags = [""],
	profileFName = "",
	profileLName = "",
	profileUsername = "",
	profileGender = "male",
}: AllMetaTagsProps) {
	return (
		<>
			<meta charSet="utf-8" key="char-set" />
			<link
				rel="shortcut icon"
				href={faviconLightHref}
				type="image/x-icon"
				key="favicon"
				media="(prefers-color-scheme: light)"
			/>
			<link
				rel="shortcut icon"
				href={faviconDarkHref}
				type="image/x-icon"
				key="favicon"
				media="(prefers-color-scheme: dark)"
			/>
			<link
				rel="mask-icon"
				href={maskIconHref}
				type="image/x-icon"
				key="favicon"
			/>
			<meta
				name="description"
				content={pageDescription}
				key="page-description"
			/>
			<meta
				name="keywords"
				content={pageKeywords.join(" ")}
				key="keywords"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
				key="veiwport"
			/>
			<meta
				name="theme-color"
				media="(prefers-color-scheme: light)"
				content={themeColorLight}
				key="theme-color"
			/>
			<meta
				name="theme-color"
				media="(prefers-color-scheme: dark)"
				content={themeColorDark}
				key="theme-color"
			/>
			<link rel="canonical" href={ogUrl} key="canonical" />

			{/* <link rel="manifest" href={pwaManifestHref} key="pwa-manifest" /> */}

			<meta property="og:type" content={ogType} key="og-type" />
			<meta property="og:url" content={ogUrl} key="og-url" />

			{ogType === "article" && (
				<>
					<meta
						property="og:article:published_time"
						content={articlePublishedTime}
						key="article-published-time"
					/>
					<meta
						property="og:article:modified_time"
						content={articleModifiedTime}
						key="article-modified-time"
					/>
					<meta
						property="og:article:author"
						content={articleAuthor}
						key="article-author"
					/>
					<meta
						property="og:article:section"
						content={articleSection}
						key="article-section"
					/>
					<meta
						property="og:article:tag"
						content={articleTags?.join(" ")}
						key="article-tags"
					/>
				</>
			)}

			{ogType === "profile" && (
				<>
					<meta
						property="og:first_name"
						content={profileFName}
						key="profile-f-name"
					/>
					<meta
						property="og:last_name"
						content={profileLName}
						key="profile-l-name"
					/>
					<meta
						property="og:username"
						content={profileUsername}
						key="profile-username"
					/>
					<meta
						property="og:gender"
						content={profileGender}
						key="profile-gender"
					/>
				</>
			)}

			<meta property="og:title" content="" key="og-title" />
			<meta property="og:site_name" content="" key="og-site-name" />
			<meta
				property="og:description"
				content={ogDescription}
				key="og-description"
			/>
			<meta
				property="og:image"
				content={ogImageUrl}
				itemProp="image"
				key="og-image"
			/>
			<meta
				property="og:image:alt"
				content={ogImageAlt}
				key="og-image-alt"
			/>
			<meta
				property="og:image:width"
				content={`${ogImageWidth}`}
				key="og-image-width"
			/>
			<meta
				property="og:image:height"
				content={`${ogImageHeight}`}
				key="og-image-height"
			/>
			<meta
				property="og:image:type"
				content={ogImageType}
				key="og-image-type"
			/>
			<meta property="og:locale" content={ogLocale} key="og-locale" />

			<meta
				property="twitter:card"
				content={twitterCardType}
				key="twitter-card"
			/>
			<meta
				property="twitter:title"
				content={twitterCardTitle}
				key="twitter-title"
			/>
			<meta
				property="twitter:site"
				content="@scipilogy"
				key="twitter-site"
			/>

			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-title" content={pageTitle} />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black"
			></meta>
			<link
				rel="apple-touch-icon"
				href="/icons/apple-touch-icon-512x512.png"
				key="apple-touch-icon"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/icons/apple-touch-icon-ipad.png"
				key="apple-touch-icon-ipad"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/icons/apple-touch-icon-iphone-retina.png"
				key="apple-touch-icon-iphone-retina"
			/>
			<link
				rel="apple-touch-icon"
				sizes="167x167"
				href="/icons/apple-touch-icon-ipad-retina.png"
				key="apple-touch-icon-ipad-retina"
			/>
			<link
				href="/startup-images/apple-touch-startup-image-320x460.png"
				media="(device-width: 320px)"
				rel="apple-touch-startup-image"
				key="apple-touch-startup-image-iphone-portrait"
			/>
			<link
				href="/startup-images/apple-touch-startup-image-640x920.png"
				media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)"
				rel="apple-touch-startup-image"
				key="apple-touch-startup-image-iphone-retina-portrait"
			/>
			<link
				href="/startup-images/apple-touch-startup-image-768x1004.png"
				media="(device-width: 768px) and (orientation: portrait)"
				rel="apple-touch-startup-image"
				key="apple-touch-startup-image-ipad-portrait"
			/>
			<link
				href="/startup-images/apple-touch-startup-image-1024x748.png"
				media="(device-width: 768px) and (orientation: landscape)"
				rel="apple-touch-startup-image"
				key="apple-touch-startup-image-ipad-landscape"
			/>
			<link
				href="/startup-images/apple-touch-startup-image-1536x2008.png"
				media="(device-width: 1536px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
				rel="apple-touch-startup-image"
				key="apple-touch-startup-image-ipad-retina-portrait"
			/>
			<link
				href="/startup-images/apple-touch-startup-image-2048x1496.png"
				media="(device-width: 1536px)  and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
				rel="apple-touch-startup-image"
				key="apple-touch-startup-image-ipad-retina-landscape"
			/>
			<link
				href="/startup-images/apple-touch-startup-image-750x1334.png"
				media="(device-width: 375px) and (-webkit-device-pixel-ratio: 2)"
				rel="apple-touch-startup-image"
				key="apple-touch-startup-image-iphone-6/7/8-portrait"
			/>
			<link
				href="/startup-images/apple-touch-startup-image-1242x2208.png"
				media="(device-width: 414px) and (-webkit-device-pixel-ratio: 3)"
				rel="apple-touch-startup-image"
				key="apple-touch-startup-image-iphone-6Plus/7Plus/8Plus-portrait"
			/>
		</>
	);
}
