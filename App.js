import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, Modal, TextInput, FlatList, Switch, ToastAndroid, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { TimerPicker } from "react-native-timer-picker";
import { styles } from './assets/styles/styles.js';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [flatListVisible, setFlatListVisible] = useState(false);
  const [switchVisible, setSwitchVisible] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const [checkboxVisible, setCheckboxVisible] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [timerVisible, setTimerVisible] = useState(false);

  const toggleActivityIndicator = () => {
    setLoading(!loading);
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const toggleTextInput = () => {
    setTextInputVisible(!textInputVisible);
  };
  const toggleFlatList = () => {
    setFlatListVisible(!flatListVisible);
  };
  const data = [
    { key: 'Item 1' },
    { key: 'Item 2' },
    { key: 'Item 3' },
    { key: 'Item 4' },
    { key: 'Item 5' },
  ];
  const toggleSwitch = () => {
    setSwitchVisible(!switchVisible);
  };
  const toggleValue = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  const toggleMap = () => {
    setMapVisible(!mapVisible);
  };
  const toggleCheckbox = () => {
    setCheckboxVisible(!checkboxVisible);
  };
  const toggleProgress = () => {
    setProgressVisible(!progressVisible);
  };
  const toggleToast = () => {
    if (toastVisible) {
      ToastAndroid.showWithGravityAndOffset(
        'Toast is hidden',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Toast is visible',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }

    setToastVisible(!toastVisible);
  };
  const toggleTimer = () => {
    setTimerVisible(!timerVisible);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
    <KeyboardAvoidingView style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title={loading ? 'Hide Activity Indicator' : 'Show Activity Indicator'} onPress={toggleActivityIndicator} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={modalVisible ? 'Hide Modal' : 'Show Modal'} onPress={toggleModal} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={textInputVisible ? 'Hide Text Input' : 'Show Text Input'} onPress={toggleTextInput} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={flatListVisible ? 'Hide FlatList' : 'Show FlatList'} onPress={toggleFlatList} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={switchVisible ? 'Hide Switch' : 'Show Switch'} onPress={toggleSwitch} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={mapVisible ? 'Hide Map' : 'Show Map'} onPress={toggleMap} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={checkboxVisible ? 'Hide Checkbox' : 'Show Checkbox'} onPress={toggleCheckbox} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={progressVisible ? 'Hide Progress' : 'Show Progress'} onPress={toggleProgress} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={toastVisible ? 'Hide Toast' : 'Show Toast'} onPress={toggleToast} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={timerVisible ? 'Hide Timer Picker' : 'Show Timer Picker'} onPress={toggleTimer} />
      </View>

      {loading && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <Modal transparent visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is the modal content</Text>
            <Button title="Close Modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
      {textInputVisible && (
        <View style={styles.textInputContainer}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, padding: 10 }}
            placeholder="Enter text"
          />
        </View>
      )}
      {flatListVisible && (
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
      )}
      {switchVisible && (
        <View style={styles.switchContainer}>
          <Switch
            value={isSwitchOn}
            onValueChange={toggleValue}
          />
        </View>
      )}
      {mapVisible && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapContainer}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title="Marker Title"
              description="Marker Description"
            />
          </MapView>
        </View>
      )}
      {checkboxVisible && (
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="green"
            unfillColor="white"
          >
            I am a bouncy checkbox!
          </BouncyCheckbox>
        </View>
      )}
      {progressVisible && (
        <View style={styles.progressContainer}>
          <AnimatedProgressWheel
            size={120} 
            width={20} 
            progress={100}
            animateFromValue={0}
            duration={5000}
            color={'white'}
            fullColor={'skyblue'}
          />
        </View>
      )}
      {toastVisible && (
        <View style={styles.toastContainer}>
        </View>
      )}
      {timerVisible && (
        <View style={styles.timerPickerContainer}>
          <TimerPicker
            isOpen={timerVisible}
            onCancel={() => setTimerVisible(false)}
            onConfirm={(hours, minutes) => {
              console.log(`Selected time: ${hours}:${minutes}`);
              setTimerVisible(false);
            }}
          />
        </View>
      )}
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
