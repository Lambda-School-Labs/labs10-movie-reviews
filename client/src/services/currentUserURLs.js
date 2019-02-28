export const currentUser =
  process.env.NODE_ENV === 'production'
    ? 'https://labs10-movie-reviews.herokuapp.com/auth/current_user'
    : 'http://localhost:5000/auth/current_user';

export const currentReviews =
  process.env.NODE_ENV === 'production'
    ? 'https://labs10-movie-reviews.herokuapp.com/api/reviews'
    : 'http://localhost:5000/api/reviews';

export const editDeleteReviews = 
  process.env.NODE_ENV === 'production'
  ? `https://labs10-movie-reviews.herokuapp.com/api/reviews/${this.id}` :
    `http://localhost:5000/api/reviews/${this.id}`;

export const payment = 
  process.env.NODE_ENV === 'production'
  ? `http://labs10-movie-reviews.herokuapp.com/api/payment`
  : `http://localhost:5000/api/api/payment`;

