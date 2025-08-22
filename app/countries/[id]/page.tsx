import Link from "next/link";
import Image from "next/image";

interface CountryDetailProps {
    params: {
        id: string;
    };
}

export default async function CountryDetail({ params }: CountryDetailProps) {
  const { id } = await params
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}?fields=name,region,flags,capital,currencies,languages,population`)
  const country = await res.json();

  return (
    <div>
        <div className="m-4">
            <Link href="/countries" className="bg-blue-500 text-white p-3 rounded">
            Back to Countries
        </Link>
        </div>
        <div className="flex justify-center">
            <Image src={country.flags.svg} alt={country.name.common} width={400} height={200} className="rounded border-2 border-black p-3 m-4" />
            <div className="m-4">
                <h1 className="text-3xl font-bold underline">{country.name.common}</h1>
                <p className="text-lg py-3"><strong>Region:</strong> {country.region || 'Unknown'}</p>
                <p className="text-lg py-3"><strong>Capital:</strong> {country.capital?.[0] || 'Unknown'}</p>
                <p className="text-lg py-3"><strong>Population:</strong> {country.population?.toLocaleString() || 'Unknown'}</p>
                <p className="text-lg py-3"><strong>Currencies:</strong> {Object.values(country.currencies || {}).map((currency: any) => currency.name).join(', ') || 'Unknown'}</p>
                <p className="text-lg py-3"><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ') || 'Unknown'}</p>
            </div>
        </div>
    </div>
  )
}
