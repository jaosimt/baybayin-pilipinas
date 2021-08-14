import HomeTiles from "../components/Content/HomeTiles/HomeTiles";
import keyboard from '../images/homeItems/baybayin_QWERTY_keys-1080x500.jpg';
import {ellipses} from "../utils";

const tileData = {
    title: 'How to use the Baybayin keyboard',
    url: '//www.jaosimt.com/blogs/baybayin_keyboard',
    image: keyboard,
    description: 'Typing using a baybayin keyboard is not as simple as how we know typing is.  There are certain typing behaviours that we need to pay attention to.  For instance, typing a vowel character needs to be typed in with the caps lock on.'
};

const wrapper = shallow(
    <HomeTiles data={[tileData]}/>
);

it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('renders the title', () => {
    expect(wrapper.find('.title').text()).toBe(tileData.title);
});

it('renders the image', () => {
    expect(wrapper.find('.image').props().style.background).toMatch(new RegExp(keyboard));
});

it('renders the description', () => {
    expect(wrapper.find('.description').text()).toBe(ellipses(tileData.description, 100));
});
