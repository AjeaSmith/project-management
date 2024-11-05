"use server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { OAuthProvider } from "node-appwrite";
import { createAdminClient } from "./appwrite";

export async function signInWithGithub() {
	const { account } = await createAdminClient();

	const head = await headers();
	const origin = head.get("origin");

	const redirectUrl = await account.createOAuth2Token(
		OAuthProvider.Github,
		`${origin}/oauth`,
		`${origin}/sign-up`
	);

	return redirect(redirectUrl);
}
