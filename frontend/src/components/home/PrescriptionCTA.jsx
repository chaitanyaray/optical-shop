const PrescriptionCTA = () => {
    return (
        <section className="py-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="
        bg-gradient-to-r
        from-yellow-500
        to-yellow-400
        rounded-3xl
        p-8
        md:p-16
        text-center
        ">

                    <h2 className="
          text-3xl
          md:text-5xl
          font-bold
          ">
                        Upload Your Prescription
                    </h2>

                    <p className="
          mt-4
          text-lg
          ">
                        Order custom lenses directly
                        using your doctor's prescription.
                    </p>

                    <button className="
          mt-8
          bg-black
          text-white
          px-8
          py-4
          rounded-full
          ">
                        Upload Prescription
                    </button>

                </div>

            </div>

        </section>
    );
};

export default PrescriptionCTA;