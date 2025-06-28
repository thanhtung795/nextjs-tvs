import { Metadata } from "next";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404 - Page Not Found | TailAdmin - Next.js Admin Dashboard Template",
    description: "This is 404 error page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function NotFound() {
    return (
        <>
            <PageBreadcrumb pageTitle="404 Error" />
            <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
                <div className="mx-auto w-full max-w-[630px] text-center">
                    <h1 className="mb-4 font-bold text-gray-800 text-6xl dark:text-white/90">
                        404
                    </h1>
                    <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                        Page Not Found
                    </h3>
                    <p className="mb-8 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </>
    );
}
