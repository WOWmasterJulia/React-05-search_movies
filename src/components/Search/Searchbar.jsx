import PropTypes from 'prop-types';
import { Main, Form, Button, Input} from './Searchbar.styled'
// import { Main, Form, Button} from './Searchbar.styled'

export const Searchbar = ({value, onChange, SearchOnSubmit}) => (
    <>
        <Main>
            <Form onSubmit={SearchOnSubmit}>
                {/* <Button type="submit" /> */}
                <Button type='submit'>Search</Button>
                <Input
                type="text"
                autoComplete="off"
                value={value}
                onChange={onChange}
                />
            </Form>
        </Main>
            
        
    </>
)

Searchbar.propTypes = {
    SearchOnSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};