export default function DashedArrow({ stroke = "white" }: { stroke?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="138"
			height="53"
			viewBox="0 0 138 53"
			fill="none"
			style={{ marginTop: "10%" }}
		>
			<path
				d="M1 8.14716C24 0.147163 38 -0.281183 52.5 2.69959C79 8.1472 94.3149 22.6472 97 31.1996C101.5 45.5329 85 57.1471 65 49.6471C45 42.1471 85 1.14715 135.5 23.6471"
				stroke={stroke}
				strokeDasharray="5 5"
			/>
			<path
				d="M128.214 14.5401L135.732 23.7071L122.836 28.1934"
				stroke={stroke}
			/>
		</svg>
	);
}
