import Dashboard from "@/components/Dashboard";

export default async function Home() {
	// const user = await getLoggedInUser();
	// if (!user) redirect("/sign-up");
	return (
		<>
			<h1 className="text-2xl font-bold">Protected Content Page</h1>
			<Dashboard />
		</>
	);
}
