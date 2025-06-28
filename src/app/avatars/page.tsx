import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function AvatarsPage() {
    return (
        <>
            <PageMeta
                title="Avatars | TailAdmin - Next.js Admin Dashboard Template"
                description="This is Avatars page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Avatars" />
            <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
                <div className="mx-auto w-full max-w-[630px] text-center">
                    <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                        Avatars Component
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                        Avatar components will be available soon.
                    </p>
                </div>
            </div>
        </>
    );
}
