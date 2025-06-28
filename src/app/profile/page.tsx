import { Metadata } from "next";
import UserProfiles from "../../pages/UserProfiles";

export const metadata: Metadata = {
    title: "Profile | TailAdmin - Next.js Admin Dashboard Template",
    description: "This is Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function ProfilePage() {
    return <UserProfiles />;
}
