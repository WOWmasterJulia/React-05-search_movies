// import { Link } from "react-router-dom";

// const Movies = () => {
//     // return <div>Movies PAGE</div>
//     return (
//         <div>
//             {['dog-1', 'dog-2', 'dog-3', 'dog-4'].map(dog => {
//                 return (
//                     <Link key={dog} to={'${dog}'}>{dog}</Link>
//                 );
//             })}
//         </div>);
// };

// export default Movies;



// import { NavLink } from "react-router-dom";
// import { SearchForm } from "components/SearchForm/SearchForm";
import {Container} from "components/App.styled";


const Movies = () => {
  return (
     <Container>    
          {/* <SearchForm /> */}
          <div>Movies PAGE</div>
    </Container>
  );
};

export default Movies;