import PropTypes from 'prop-types';
import { Main, Form, Button, Input} from './Searchbar.styled'

export const Searchbar = ({value, onChange, SearchOnSubmit}) => (
    <>
        <Main>
            <Form onSubmit={SearchOnSubmit}>
                <Input
                    type="text"
                    placeholder="Search movies"
                    // autoComplete="off"
                    value={value}
                    onChange={onChange}
                />
                <Button type='submit'>Search</Button>
            </Form>
        </Main>
            
        
    </>
)

Searchbar.propTypes = {
    SearchOnSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};