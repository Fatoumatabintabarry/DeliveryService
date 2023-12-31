import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  rating: { type: Number, required: true },
  description: { type: String, required: true }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
