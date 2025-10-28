import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostsProvider } from './context/PostsContext';
import PostsListScreen from './screens/PostsListScreen';
import PostDetailScreen from './screens/PostDetailScreen';
import CreateEditPostScreen from './screens/CreateEditPostScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PostsProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PostsList"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="PostsList"
            component={PostsListScreen}
          />
          <Stack.Screen
            name="PostDetail"
            component={PostDetailScreen}
          />
          <Stack.Screen
            name="CreateEditPost"
            component={CreateEditPostScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PostsProvider>
  );
}