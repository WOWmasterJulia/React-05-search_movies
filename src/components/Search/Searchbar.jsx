import PropTypes from 'prop-types';
import { Form, Button, Input} from './Searchbar.styled'
// import { Main, Form, Button} from './Searchbar.styled'

export const Searchbar = ({SearchOnSubmit}) => (
    <>
        
            <Form onSubmit={SearchOnSubmit}>
                {/* <Button type="submit" /> */}
                <Button type='submit'>Search</Button>
                <Input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                />
            </Form>
        
    </>
)

Searchbar.propTypes = {
    SearchOnSubmit: PropTypes.func.isRequired,
}