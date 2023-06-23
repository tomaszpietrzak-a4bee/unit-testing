import { shallow } from 'enzyme';
import WithAuthorization from './WithAuthorization';

describe('Authorization HOC', () => {
  const restrictedContent = () => <div>Restricted Content</div>;
  const AuthorizedComponent = WithAuthorization(restrictedContent);

  test('renders the restricted content when user is authorized', () => {
    const wrapper = shallow(<AuthorizedComponent authorized={true} />);
    expect(wrapper.find(restrictedContent).exists()).toBe(true);
  });

  test('does not render the restricted content when user is not authorized', () => {
    const wrapper = shallow(<AuthorizedComponent authorized={false} />);
    expect(wrapper.find(restrictedContent).exists()).toBe(false);
  });
  test('is empty render', () => {
    const wrapper = shallow(<AuthorizedComponent authorized={false} />);
    expect(wrapper.isEmptyRender()).toBe(true)
  });
});

