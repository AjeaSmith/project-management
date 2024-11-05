"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import truncate from "lodash/truncate";

import {
	ClipboardListIcon,
	FolderOpenIcon,
	GroupIcon,
	HomeIcon,
	LogOutIcon,
	SettingsIcon,
	UserCircle2Icon,
} from "lucide-react";

import { signOut } from "@/app/lib/server/actions";
import Link from "next/link";

/**
 * The site header, containing a navigation menu and a logout button.
 *
 * This component is client-side only and requires the user to be logged in.
 *
 * @param {{ children: string }} props - The user's name as a string.
 * @returns {JSX.Element} The site header.
 */
const Header = ({ children }) => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const links = [
		{ name: "Home", path: "/", icon: HomeIcon },
		{ name: "Projects", path: "/projects", icon: FolderOpenIcon },
		{ name: "Tasks", path: "/tasks", icon: ClipboardListIcon },
		{ name: "Teams", path: "/teams", icon: GroupIcon },
		{ name: "Profile", path: "/profile", icon: UserCircle2Icon },
		{ name: "Settings", path: "/settings", icon: SettingsIcon },
	];

	// Close sidebar on route change
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<header className="flex">
			<button
				className={`p-4 focus:outline-none z-40`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<svg
					className="w-6 h-6 text-gray-800"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>
			<div
				className={`
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          fixed z-30 w-64 h-full transition-transform transform bg-white shadow-lg border-r
        `}
			>
				<nav className="flex flex-col h-full p-4 space-y-6 mt-10">
					<div className="text-xl font-semibold text-gray-800">
						Hello,{" "}
						{truncate(children, {
							length: 20,
							omission: "...",
						})}
						!
					</div>
					<ul className="flex flex-col space-y-4">
						{links.map((link, i) => (
							<NavLinks key={i} link={link} />
						))}
						<li>
							<form action={signOut}>
								<button
									type="submit"
									className="w-full bg-none flex items-center p-3 text-gray-700 transition duration-300 rounded-md hover:bg-gray-200"
								>
									<LogOutIcon className="w-6 h-6 mr-3" /> Logout
								</button>
							</form>{" "}
						</li>
					</ul>
				</nav>
			</div>
			<div
				className={`
          ${isOpen ? "bg-black bg-opacity-50" : "bg-transparent"}
          fixed inset-0 z-20 transition-opacity
        `}
				onClick={() => setIsOpen(false)}
			></div>
		</header>
	);
};

const NavLinks = ({ link }) => {
	const IconComponent = link.icon;
	return (
		<li>
			<Link
				href={link.path}
				className="flex items-center p-3 text-gray-700 transition duration-300 rounded-md hover:bg-gray-200"
			>
				<IconComponent className="w-6 h-6 mr-3" />
				{link.name}
			</Link>
		</li>
	);
};

export default Header;
