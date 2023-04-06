import { act, render } from "@testing-library/react-native";
import UsersList from "../../../../src/screens/UsersList";
import { NavigationContainer } from "@react-navigation/native";
import { api } from "../../../../src/services/api";
import { Stack } from "../../../../src/stacks/MyStack";

const mockData = {
  data: [
    {
      id: 1,
      name: "Ronald Alves",
      email: "rdalves@email.com",
    },
  ],
};

afterEach(() => {
  jest.clearAllMocks();
});

const UsersListScreen = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={UsersList} />
    </Stack.Navigator>
  </NavigationContainer>
);

describe("<UsersList />", () => {
  it("should render UsersList text in Header", async () => {
    const { getByText } = render(<UsersListScreen />);

    expect(getByText(/UsersList/i)).toBeTruthy();
  });

  it("should render Loading Component", async () => {
    const spyFn = jest.spyOn(api, "get");

    const { findByTestId } = render(<UsersListScreen />);

    await act(async () => {
      await expect(spyFn).toBeCalledTimes(1);
    });

    expect(findByTestId(/loading-users-list/i)).toBeTruthy();
  });

  it("should render informational error text when API returns error", async () => {
    const spyFn = jest
      .spyOn(api, "get")
      .mockImplementation(() => Promise.reject());

    const { findByText } = render(<UsersListScreen />);

    await act(async () => {
      await expect(spyFn).toBeCalledTimes(1);
    });

    expect(findByText(/Erro ao obter usuários./i)).toBeTruthy();
  });

  it("should render card component with users values", async () => {
    const spyFn = jest
      .spyOn(api, "get")
      .mockImplementation(() => Promise.resolve(mockData));

    const { findByText, findByTestId } = render(<UsersListScreen />);

    await act(async () => {
      await expect(spyFn).toBeCalledTimes(1);
    });

    expect(findByTestId(/usersList-card/i)).toBeTruthy();
    expect(findByText(/Ronald Alves/i)).toBeTruthy();
    expect(findByText(/rdalves@email.com/i)).toBeTruthy();
  });

  it("should api call with /users path", async () => {
    const spyFn = jest.spyOn(api, "get");

    render(<UsersListScreen />);

    await act(async () => {
      await expect(spyFn).toBeCalledWith("/users");
    });
  });
});
