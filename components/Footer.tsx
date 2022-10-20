import Link from "next/link";

const Footer = () => {
	return (
		<>
			<footer className="flex flex-row flex-wrap justify-between p-8">
				<span className="uppercase">
					<Link href="https://github.com/tapnisu">Github</Link> / {""}
					<Link href="https://t.me/tapnisu">Telegram</Link> / {""}
					<Link href="https://twitter.com/tapnisu">Twitter</Link> / {""}
					<Link href="https://discord.com/users/586128640136445964">
						Discord
					</Link>{" "}
					/ {""}
					<Link href="mailto:alexiy.rybin@gmail.com">Email</Link> /{" "}
					<Link href="https://github.com/tapnisu/website">Repo</Link>
				</span>
				<span>Copyright © 2022 Alexiy Rybin</span>
			</footer>
		</>
	);
};

export default Footer;
