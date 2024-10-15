import Home, { HomeScreenProps } from "../../../../src/screens/Home";
import { act, render, waitFor } from "@testing-library/react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MyStackProps } from "../../../../src/stacks/MyStack";
import fireEvent from "@testing-library/react-native/build/fireEvent";
import Stack from "../../../../src/stacks";

const mockNavigation: NativeStackNavigationProp<
  MyStackProps,
  "Home",
  undefined
> = {
  dispatch: jest.fn(),
  navigate: jest.fn(),
  goBack: jest.fn(),
  reset: jest.fn(),
  isFocused: jest.fn(),
  canGoBack: jest.fn(),
  setOptions: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  replace: jest.fn(),
  push: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn(),
  getParent: jest.fn(),
  setParams: jest.fn(),
};

const route: any = {};

describe("<Home />", () => {
  it("should render the Home screen", () => {
    const props: HomeScreenProps = {
      navigation: mockNavigation,
      route,
    };

    const { getByTestId } = render(<Home {...props} />);
    const homeScreen = getByTestId(/home-screen-container/i);
    expect(homeScreen).toBeDefined();
  });

  it('there should be a button with the text "Navegar para listagem de usuários"', () => {
    const props: HomeScreenProps = {
      navigation: mockNavigation,
      route,
    };

    const { getByText } = render(<Home {...props} />);

    const button = getByText(/Navegar para listagem de usuários/i);

    expect(button).toBeTruthy();
  });

  it("should navigate to the UsersList screen on button press", async () => {
    const { getByText, findByText } = render(<Stack />);

    const button = await getByText(/Navegar para listagdem de usuários/i);

    await act(async () => {
      await fireEvent.press(button);
    });

    await waitFor(() => {
      expect(findByText(/UsersList/i)).toBeTruthy();
    });
  });
});
