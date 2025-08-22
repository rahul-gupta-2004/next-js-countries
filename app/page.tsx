import Image from "next/image";

export default function Home() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Welcome to Travel Explorer</h1>
            <div className="flex justify-center">
                <Image src="/travel-banner.jpg" alt="Travel Banner" width={800} height={400} className="rounded-lg border-2 border-neutral-900 shadow-md m-4"></Image>
            </div>
            <p className="text-lg text-center">
                Discover amazing destinations around the world with Travel Explorer.
            </p>
            <div className="flex justify-center">
                <a href="/countries" className="bg-blue-500 text-white px-6 py-3 my-4 rounded-lg hover:bg-blue-600 inline-block">
                    Explore Now
                </a>
            </div>
        </div>
    );
}