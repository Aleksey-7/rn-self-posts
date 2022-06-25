import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Best App For YOU</Text>
      <Text>
        Version<Text style={styles.version}> 1.0.0</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  version: {
    fontFamily: 'open-bold',
  },
});

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'О приложении',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});
