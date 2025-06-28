import { Metadata } from "next";
import Calendar from "../../pages/Calendar";

export const metadata: Metadata = {
    title: "Calendar | TailAdmin - Next.js Admin Dashboard Template",
    description: "This is Calendar page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function CalendarPage() {
    return <Calendar />;
}
