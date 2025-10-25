import socketImg from "../assets/images/not-found.jpg";

const NotFound = () => {
    return (
        <main className="bg-white w-screen h-screen flex justify-center items-center">
            <section>
                <img
                    src={socketImg}
                    alt="Socket disconnected illustration"
                    width={800}
                    height={400}
                />
                <div className="text-center text-xl text-blue-500">
                    <a href="/">Return Home</a>
                </div>
            </section>
        </main>
    );
};

export default NotFound;
