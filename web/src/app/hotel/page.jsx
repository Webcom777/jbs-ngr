import React from "react";
import {
  Wifi,
  Tv,
  Wind,
  Coffee,
  Utensils,
  Car,
  ArrowRight,
} from "lucide-react";

export default function HotelPage() {
  const rooms = [
    {
      id: "standard",
      name: "Standard Room",
      price: "₦15,000",
      pricePerNight: 15000,
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat Screen TV",
        "En-suite Bathroom",
        "Complimentary Breakfast",
        "Free Parking",
      ],
      description:
        "Comfortable and cozy room perfect for solo travelers or couples.",
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      price: "₦25,000",
      pricePerNight: 25000,
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Smart TV",
        "Mini Refrigerator",
        "Work Desk",
        "Complimentary Breakfast",
        "Free Parking",
        "Room Service",
      ],
      description:
        "Spacious room with premium amenities for business travelers and extended stays.",
    },
    {
      id: "executive",
      name: "Executive Suite",
      price: "₦40,000",
      pricePerNight: 40000,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Smart TV",
        "Mini Refrigerator",
        "Separate Living Area",
        "Premium Bedding",
        "Complimentary Breakfast",
        "Free Parking",
        "24/7 Room Service",
        "Complimentary Drinks",
      ],
      description:
        "Luxurious suite with separate living area, perfect for executives and special occasions.",
    },
  ];

  const getAmenityIcon = (amenity) => {
    if (amenity.toLowerCase().includes("wifi")) return <Wifi size={18} />;
    if (amenity.toLowerCase().includes("tv")) return <Tv size={18} />;
    if (
      amenity.toLowerCase().includes("air") ||
      amenity.toLowerCase().includes("conditioning")
    )
      return <Wind size={18} />;
    if (amenity.toLowerCase().includes("breakfast"))
      return <Utensils size={18} />;
    if (amenity.toLowerCase().includes("parking")) return <Car size={18} />;
    return <Coffee size={18} />;
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">JBS Residence</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Comfort and convenience at the heart of Jos. Choose from our
            selection of premium rooms.
          </p>
        </div>
      </div>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Rooms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the perfect room for your stay. All rooms come with
              excellent hospitality and modern facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                    {room.price}/night
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Amenities:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {room.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <span className="text-blue-600 mr-2">
                            {getAmenityIcon(amenity)}
                          </span>
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`/hotel/booking?room=${room.id}&name=${encodeURIComponent(room.name)}&price=${room.pricePerNight}`}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
                  >
                    Book Now <ArrowRight className="inline ml-2" size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help with Your Booking?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is here to assist you. Contact us for special requests or
            group bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+2348001234567"
              className="text-blue-600 font-bold text-lg hover:text-blue-800"
            >
              📞 +234 800 123 4567
            </a>
            <span className="hidden sm:block text-gray-400">|</span>
            <a
              href="mailto:reservations@jbs-ngr.org"
              className="text-blue-600 font-bold text-lg hover:text-blue-800"
            >
              ✉️ reservations@jbs-ngr.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
