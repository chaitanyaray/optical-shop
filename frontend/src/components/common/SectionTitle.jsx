const SectionTitle = ({
    badge,
    title,
    description,
}) => {
    return (
        <div className="text-center max-w-3xl mx-auto mb-14">
            {badge && (
                <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                    {badge}
                </span>
            )}

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-gray-600 text-lg">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;