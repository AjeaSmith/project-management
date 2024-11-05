import React from "react";
import { getLoggedInUser } from "../lib/server/appwrite";
import { redirect } from "next/navigation";
import Header from "@/components/Header";

const mainlayout = async ({ children }) => {
	const user = await getLoggedInUser();
	if (!user) redirect("/sign-up");
	return (
		<>
			<Header>{user.name}</Header>
			<main className="px-5">{children}</main>
		</>
	);
};

export default mainlayout;
