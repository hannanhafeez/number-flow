export default function Web(props: React.HTMLAttributes<SVGElement>) {
	return (
		<svg {...props} viewBox="0 0 161 132" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient x1="0%" y1="50%" y2="50%" id="a">
					<stop stop-color="#2A3B8F" offset="0%" />
					<stop stop-color="#29ABE2" offset="100%" />
				</linearGradient>
				<linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="c">
					<stop stop-color="#B4D44E" offset="0%" />
					<stop stop-color="#E7F716" offset="100%" />
				</linearGradient>
			</defs>
			<g fill="none" fill-rule="evenodd">
				<path fill="#166DA5" d="M160.6 65.9l-17.4 29.3-24.4-29.7 24.4-28.9z" />
				<path fill="#8FDB69" d="M141.3 100.2l-26.5-31.7-15.9 26.6 24.7 36.1z" />
				<path fill="#166DA5" d="M141 31.4l-26.2 31.8-15.9-26.6L123.6.9z" />
				<path
					fill="url(#a)"
					opacity=".95"
					d="M61.1 31.4H141L123.4.7H78.7z M114.8 63.3H159l-15.9-26.8H98.8"
				/>
				<path
					fill="url(#c)"
					opacity=".95"
					d="M141.3 100.3H61l17.6 30.5h45z M114.8 68.4H159l-15.9 26.8H98.8"
				/>
				<path fill="#010101" d="M78.6 130.8L41 65.8 79.1.8H37.9L.4 65.8l37.5 65z" />
			</g>
		</svg>
	)
}
