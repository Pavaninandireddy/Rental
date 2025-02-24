import { useState } from "react";

const listings = [
  { id: 1, title: "Modern Apartment", location: "New York", price: "$1500/mo" },
  { id: 2, title: "Cozy Studio", location: "Los Angeles", price: "$1200/mo" },
];

function Rental() {
  const [search, setSearch] = useState("");
  const [selectedListing, setSelectedListing] = useState(null);

  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {selectedListing ? (
        <div className="p-6 border rounded">
          <h2 className="text-2xl font-bold">{selectedListing.title}</h2>
          <p>Location: {selectedListing.location}</p>
          <p>Price: {selectedListing.price}</p>
          <button onClick={() => setSelectedListing(null)} className="mt-4 p-2 bg-blue-600 text-white rounded">Back to Listings</button>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold">Find Your Perfect Rental</h1>
          <input
            type="text"
            placeholder="Search listings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded mt-4"
          />
          <div className="grid grid-cols-1 gap-4 mt-4">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="p-4 border rounded">
                <h3>{listing.title}</h3>
                <p>{listing.location}</p>
                <p>{listing.price}</p>
                <button onClick={() => setSelectedListing(listing)} className="mt-2 text-blue-600">View Details</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Rental;
