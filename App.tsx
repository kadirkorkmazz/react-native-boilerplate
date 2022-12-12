import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView className="w-full h-full">
      <View className="bg-black w-full h-full items-center justify-center">
        <Text className="p-5 border bg-blue-200">React Native Boilerplate</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
