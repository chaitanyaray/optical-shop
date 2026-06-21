import MainLayout from "../../layouts/MainLayout";

const Login = () => {
    return (
        <MainLayout>

            <section className="py-20">

                <div className="max-w-md mx-auto">

                    <h1 className="text-4xl font-bold mb-8">
                        Login
                    </h1>

                    <form className="space-y-5">

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border p-4 rounded-xl"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border p-4 rounded-xl"
                        />

                        <button
                            className="
              w-full
              bg-black
              text-white
              py-4
              rounded-xl
              "
                        >
                            Login
                        </button>

                    </form>

                </div>

            </section>

        </MainLayout>
    );
};

export default Login;