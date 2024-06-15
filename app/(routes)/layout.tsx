export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="max-w-screen-2xl w-11/12 mx-auto py-6">{children}</div>
	);
}
