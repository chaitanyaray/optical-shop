const FilterSidebar = () => {
    return (
        <div className="bg-white rounded-3xl shadow-md p-6">

            <h2 className="font-bold text-xl mb-6">
                Filters
            </h2>

            <div className="space-y-4">

                <div>
                    <h3 className="font-semibold">
                        Categories
                    </h3>

                    <div className="mt-2 space-y-2">

                        <label className="block">
                            <input type="checkbox" />
                            <span className="ml-2">
                                Eyeglasses
                            </span>
                        </label>

                        <label className="block">
                            <input type="checkbox" />
                            <span className="ml-2">
                                Sunglasses
                            </span>
                        </label>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default FilterSidebar;