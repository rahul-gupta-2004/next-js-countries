import Link from "next/link"



export default async function Countries() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=cca3,name,region,flags,capital,currencies,languages,population")
    const countries = await res.json();

    countries.sort((a: any, b: any) => a.name.common.localeCompare(b.name.common));

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Explore Countries</h1>
            <ul className="space-y-2">
                {countries.map((country: any) => (
                    <li key={country.cca3 || country.name.common} className="border-b p-4">
                        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="w-10 h-6 inline-block mr-2" />
                        <Link href={`/countries/${country.cca3}`} className="text-blue-600 hover:underline">
                            {country.name.common}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}