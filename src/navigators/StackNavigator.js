import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen';
import DisplayPicture from '../Screens/DisplayPicture';
const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ProfilePictureSelection"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfilePictureSelection" component={ProfileScreen} />
      <Stack.Screen name="DisplayPicture" component={DisplayPicture} />
    </Stack.Navigator>
  );
}
