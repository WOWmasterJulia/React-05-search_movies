// const Reviews = () => {
//   return (
//     <section>
//       <div>
//         <h4>First review - 4.6/5</h4>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem harum
//           architecto sapiente corporis, voluptatem quas voluptatibus fugiat
//           nulla commodi quidem, dolorem distinctio inventore blanditiis illo
//           tenetur aut enim ex laborum!
//         </p>
//       </div>
//       <div>
//         <h4>Second review - 4.8/5</h4>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
//           nihil ea, eaque fugit amet possimus officiis asperiores aperiam facere
//           et?
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Reviews;


import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadReviewsFilm } from 'Api/Api';
import { TextReviews } from './Reviews.styled';

export const Reviews = () => {
  const { id } = useParams();
  const [reviewInfo, setReviewInfo] = useState([]);

  useEffect(() => {
    loadReviewsFilm(id)
      .then(resp => {
        console.log('resp in MovReview component', resp);
        setReviewInfo(resp.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [id]);

  if (reviewInfo.length === 0) {
    return (
      <div>
        <p>We don`t have any reviews for this movie.</p>
      </div>
    );
  }
  return (
    <>
      <ul>
        {reviewInfo.map(({ id, author, content }) => (
          <TextReviews key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </TextReviews>
        ))}
      </ul>
    </>
  );
};

Reviews.protoType = {
  id: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  getReviews: PropTypes.func.isRequired,
}.isRequired;