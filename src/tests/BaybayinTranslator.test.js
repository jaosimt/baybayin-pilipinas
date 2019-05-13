
import BaybayinTranslator from "../components/Content/BaybayinTranslator";

const wrapper = mount(
    <BaybayinTranslator/>
);

it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('renders a textarea, a div preview and a div info', () => {
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('.preview').length).toBe(1);
    expect(wrapper.find('.info').length).toBe(1);
});

it('has a working baybayin unicode keyboard with a working translation', () => {
    wrapper.find('textarea').simulate('keyUp', {
        target: { value: 'baybayin' }
    });
    
    expect(wrapper.find('textarea').text()).toBe('ᜊᜌ᜔ᜊᜌᜒᜈ᜔');
    expect(wrapper.find('.preview').text()).toBe('baybay[i/e]n');
});