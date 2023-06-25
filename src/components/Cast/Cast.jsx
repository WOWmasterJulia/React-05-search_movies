// const Cast = () => {
//   return (
//     <section>
//       <ul>
//         <li>
//           <img src="https://via.placeholder.com/200x100" alt="" />
//           <p>Lorem ipsum dolor.</p>
//         </li>
//         <li>
//           <img src="https://via.placeholder.com/200x100" alt="" />
//           <p>Lorem ipsum dolor.</p>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Cast;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadCastFilm } from 'Api/Api';
import { Wrapper, Profile, ProfilePhoto } from './Cast.styled'
import PropTypes from 'prop-types';

export const Cast = () => {
  const { id } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    loadCastFilm(id)
      .then(resp => {
        console.log('resp in MovCast component', resp);
        setCastInfo(resp.data.cast);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [id]);

  if (castInfo.length === 0) {
    return (
      <div>
        <p>We don`t have any cast for this movie.</p>
      </div>
    );
  }

  return (
    <>
      <Wrapper>
        {castInfo.map(({ id, name, character, profile_path }) => (
          <Profile key={id}>
            <ProfilePhoto
              src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
              alt="Actor photo"
              width="100px"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </Profile>
        ))}
      </Wrapper>
    </>
  );
};


Cast.protoType = {
  id: PropTypes.number.isRequired,
  castInfo: PropTypes.array.isRequired,
  loadCastFilm: PropTypes.func.isRequired,
}.isRequired;