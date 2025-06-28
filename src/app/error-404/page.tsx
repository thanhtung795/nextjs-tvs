import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Error404Page() {
    return (
        <>
            <PageMeta
                title="404 Error | TailAdmin - Next.js Admin Dashboard Template"
                description="This is 404 Error page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="404 Error" />
            <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
                <div className="mx-auto w-full max-w-[630px] text-center">
                    <h1 className="mb-4 font-bold text-gray-800 text-6xl dark:text-white/90">
                        404
                    </h1>
                    <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                        Page Not Found
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                        The page you are looking for doesn't exist.
                    </p>
                </div>
            </div>
        </>
    );
}
