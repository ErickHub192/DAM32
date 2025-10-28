import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostsProvider } from './src/context/PostsContext';
import PostsListScreen from './src/screens/PostsListScreen';
import PostDetailScreen from './src/screens/PostDetailScreen';
import CreateEditPostScreen from './src/screens/CreateEditPostScreen';

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