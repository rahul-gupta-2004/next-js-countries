import Image from "next/image";

export default function About() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Welcome to Travel Explorer</h1>
            <div className="flex justify-center">
                <Image src="/travel-about.jpg" alt="Travel Banner" width={800} height={400} className="rounded-lg border-2 border-neutral-900 shadow-md m-4"></Image>
            </div>
            <div>
                <h2 className="text-xl font-bold text-center">Our Mission</h2>
                <p className="p-4 text-center">
                  Travel Explorer is dedicated to helping travelers discover new destinations and plan their perfect trips. We believe that travel opens minds and creates connections between people and cultures.  
                </p>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold text-center">Why Travel With Us?</h2>
                <div className="py-4">
                    <h4 className="text-lg font-semibold">Expert Guidance</h4>
                    <p className="text-md">Get accurate information about destinations</p>
                </div>
                <div className="py-2">
                    <h4 className="text-lg font-semibold">Cultural Insight</h4>
                    <p className="text-md">Learn about local customs and traditions</p>
                </div>
                <div className="py-2">
                    <h4 className="text-lg font-semibold">Travel Inspiration</h4>
                    <p className="text-sm">Discover places you never knew existed</p>
                </div>
            </div>
        </div>
    );
}