import { Metadata } from "next";
import FormElements from "../../pages/Forms/FormElements";

export const metadata: Metadata = {
    title: "Form Elements | TailAdmin - Next.js Admin Dashboard Template",
    description: "This is Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function FormElementsPage() {
    return <FormElements />;
}
