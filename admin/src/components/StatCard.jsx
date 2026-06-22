const StatCard = ({
    title,
    value,
    icon,
    color = "bg-white",
}) => {
    return (
        <div
            className={`
      ${color}
      rounded-3xl
      p-6
      shadow-sm
      border
      border-gray-100
      hover:shadow-lg
      transition-all
      duration-300
      `}
        >
            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-500 text-sm font-medium">
                        {title}
                    </p>

                    <h3 className="text-3xl font-bold mt-3">
                        {value}
                    </h3>

                </div>

                <div
                    className="
          w-14
          h-14
          rounded-2xl
          bg-black
          text-white
          flex
          items-center
          justify-center
          text-xl
          "
                >
                    {icon}
                </div>

            </div>
        </div>
    );
};

export default StatCard;