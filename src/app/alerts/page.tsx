import { Metadata } from "next";
import Alerts from "../../pages/UiElements/Alerts";

export const metadata: Metadata = {
    title: "Alerts",
    description: "This is Alerts page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function AlertsPage() {
    return <Alerts />;
}
