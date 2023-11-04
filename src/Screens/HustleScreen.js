import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import Header from '../Components/Header';
import RoundImageWithBackground from '../Components/RoundImageWithBackground';
import ActionMenu from 'react-native-circular-action-menu';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calendar from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {images} from '../assets';
const data = [
  {
    id: '1',
    logo: 'tag',
    text1: 'Tags',
    text2: 'Fun, Minimal, Attractive',
  },
  {
    id: '2',
    logo: 'location',
    text1: 'Location',
    text2: 'Any',
  },
  {
    id: '3',
    logo: 'category',
    text1: 'Category',
    text2: 'Logo design, Food and Beverage',
  },
  {
    id: '4',
    logo: 'calendar-month',
    text1: 'Posted on',
    text2: '08 Aug 2021',
  },
  {
    id: '5',
    logo: 'calendar-clock',
    text1: 'Due on',
    text2: '08 Sep 2021',
  },
  {
    id: '6',
    logo: 'shopping-bag-1',
    text1: 'Budget',
    text2: '₹ 15,000',
  },
];
const ListItem = ({item, index}) => {
  return (
    <View>
      <View
        style={[
          styles.itemContainer,
          {borderBottomWidth: index !== data.length - 1 ? 0.5 : 0},
        ]}>
        {item.logo === 'calendar-month' || item.logo === 'category' ? (
          <MaterialIcons
            name={item.logo}
            size={30}
            color={'#F1EFEF'}
            style={styles.logo}
          />
        ) : item.logo === 'calendar-clock' ? (
          <Calendar
            name={item.logo}
            size={30}
            style={styles.logo}
            color={'#F1EFEF'}
          />
        ) : item.logo === 'shopping-bag-1' ? (
          <Fontisto
            name={item.logo}
            size={30}
            style={styles.logo}
            color={'#F1EFEF'}
          />
        ) : (
          <EvilIcons
            name={item.logo}
            size={30}
            style={styles.logo}
            color={'#F1EFEF'}
          />
        )}

        <View style={styles.textContainer}>
          <Text style={styles.text1}>{item.text1}</Text>
          <Text style={styles.text2}>{item.text2}</Text>
        </View>
      </View>
    </View>
  );
};
const HustleScreen = ({}) => {
  const [selectAction, setSelectAction] = useState(0);
  const handleActionClick = action => {
    setSelectAction(action);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header
        title="Banglore"
        lefticon="location"
        righticon1="plus"
        righticon2="notifications-outline"
      />
      {/* Your content goes here */}
      <View style={styles.logoView}>
        <Text style={styles.logoText}>Logo Design Brief</Text>
        <View style={{flexDirection: 'row'}}>
          <EvilIcons name="play" size={30} color={'gold'} />
          <MaterialIcons name="multitrack-audio" size={30} color={'gold'} />
          <MaterialIcons name="multitrack-audio" size={30} color={'gold'} />
          <MaterialIcons name="multitrack-audio" size={30} color={'gold'} />
        </View>
      </View>
      <Text style={styles.mainText}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci{'\n'}
        {'\n'}Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed diam nonummy nibh euis-
      </Text>
      <View style={{marginTop: 20}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => <ListItem item={item} index={index} />}
        />
      </View>

      {/* <ActionButtonMultiple/> */}
      <View style={styles.actionMenuContainer}>
        <View style={styles.actionButtonImageContainer}>
          <ActionMenu
            autoInactive={false}
            active={false}
            buttonColor="#1c1d1f"
            btnOutRange="#FF9209"
            radius={100}
            degrees={0}
            position="right"
            icon={
              <Image
                source={images.users}
                style={{height: '60%', width: '60%', tintColor: '#fff'}}
                resizeMode="cover"
              />
            }
            onPress={handleActionClick}>
            <ActionMenu.Item
              text="Action 1"
              size={40}
              onPress={() => handleActionClick(1)}
              textContainerStyle={styles.actionTextContainer}>
              <Image
                source={images.user1}
                style={[
                  styles.actionImage,
                  {
                    borderWidth: selectAction === 1 ? 3 : 0,
                  },
                ]}
                resizeMode="cover"
              />
            </ActionMenu.Item>
            <ActionMenu.Item
              text="Action 2"
              size={40}
              onPress={() => handleActionClick(2)}
              textContainerStyle={styles.actionTextContainer}>
              <Image
                source={images.user2}
                style={[
                  styles.actionImage,
                  {borderWidth: selectAction === 2 ? 3 : 0},
                ]}
                resizeMode="cover"
              />
            </ActionMenu.Item>
            <ActionMenu.Item
              text="Action 3"
              size={40}
              onPress={() => handleActionClick(3)}
              textContainerStyle={styles.actionTextContainer}>
              <Image
                source={images.user3}
                style={[
                  styles.actionImage,
                  {borderWidth: selectAction === 3 ? 3 : 0},
                ]}
                resizeMode="cover"
              />
            </ActionMenu.Item>

            <ActionMenu.Item
              text="Action 4"
              size={40}
              onPress={() => handleActionClick(4)}
              textContainerStyle={styles.actionTextContainer}>
              <Image
                source={images.user4}
                style={[
                  styles.actionImage,
                  {borderWidth: selectAction === 4 ? 3 : 0},
                ]}
                resizeMode="cover"
              />
            </ActionMenu.Item>
          </ActionMenu>
          <View style={{marginTop: 45, justifyContent: 'center'}}>
            <Text style={styles.referText}>Refer</Text>
          </View>
        </View>
        <View style={styles.actionButtonImageContainer}>
          <RoundImageWithBackground
            imageSource={images.plus}
            size={60}
            backgroundColor="#1c1d1f"
          />
          <Text style={styles.actionButtonText}>Hustl</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 18,
    backgroundColor: '#FFF',
    color: 'black',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  logoView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    tintColor: 'white',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  mainText: {
    fontSize: 14,
    paddingHorizontal: 10,
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderColor: '#fff',
    marginHorizontal: 15,
    paddingBottom: 5,
  },
  logo: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D3D3D3',
  },
  text2: {
    fontSize: 16,
    color: 'white',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  insideIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 16,
    marginTop: 5,
  },
  referText: {
    marginBottom: -30,
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16,
  },
  actionMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 50,
  },
  actionButtonImageContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },

  actionButtonText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  actionTextContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 20,
  },
  actionImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
    borderColor: '#FF9209',
  },
});

export default HustleScreen;
