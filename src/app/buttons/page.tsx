import { Metadata } from "next";
import Buttons from "../../pages/UiElements/Buttons";

export const metadata: Metadata = {
    title: "Buttons",
    description: "This is Buttons page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function ButtonsPage() {
    return <Buttons />;
}
