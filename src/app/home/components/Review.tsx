import React, { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
  color: string;
  timestamp: number; // UNIX timestamp in milliseconds
  isTemporary: boolean; // Mark user-added reviews for removal
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Usman",
    review: "The hotel had amazing amenities and a beautiful view!",
    rating: 5,
    color: "bg-blue-500",
    timestamp: Date.now(),
    isTemporary: false,
  },
  {
    id: 2,
    name: "Babar",
    review: "The room was clean, and the staff was very welcoming.",
    rating: 4,
    color: "bg-red-500",
    timestamp: Date.now(),
    isTemporary: false,
  },
  {
    id: 3,
    name: "Ahmmad Ali",
    review: "Exceptional service, great location, and delicious food!",
    rating: 5,
    color: "bg-green-500",
    timestamp: Date.now(),
    isTemporary: false,
  },
  {
    id: 4,
    name: "Naseem",
    review: "The best hotel experience I've had in years.",
    rating: 5,
    color: "bg-purple-500",
    timestamp: Date.now(),
    isTemporary: false,
  },
];

const colors = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500"];

const HotelReviewWidget: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(reviewsData);
  const [newReview, setNewReview] = useState<string>("");
  const [notification, setNotification] = useState<boolean>(false);

  const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  // Remove user-added reviews after 24 hours
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setReviews((currentReviews) =>
        currentReviews.filter((review) => !review.isTemporary || now - review.timestamp < ONE_DAY_MS)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    if (!newReview.trim()) return;

    const newId = reviews.length + 1;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newReviewData: Review = {
      id: newId,
      name: `Guest ${newId}`,
      review: newReview.trim(),
      rating: Math.floor(Math.random() * 2) + 4, // Random 4 or 5 star rating
      color: randomColor,
      timestamp: Date.now(),
      isTemporary: true, // Mark as user-added
    };

    setReviews([newReviewData, ...reviews]);
    setNewReview("");
    setNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Hotel Reviews</h2>

      {/* Notification */}
      {notification && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Your review has been received. Thank you!
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="flex gap-4 p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Profile Avatar */}
              <div className="flex-shrink-0">
                <div
                  className={`w-12 h-12 ${review.color} text-white rounded-full flex items-center justify-center text-xl font-bold`}
                >
                  {review.name[0]}
                </div>
              </div>
              {/* Review Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{review.name}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">&#9733;</span>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <span key={i} className="text-gray-300">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-600 mt-2">{review.review}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No reviews available. Be the first to write one!</p>
        )}
      </div>

      {/* Write a Review */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-700 mb-2">Write a Review</h3>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Share your experience at the hotel..."
        />
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default HotelReviewWidget;
