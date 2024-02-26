import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const handleSelectImage = () => {
    let options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Image URI: ', response.uri);
        // Do something with the selected image URI, such as displaying it in an Image component
      }
    });
  };

  const handleTakePhoto = () => {
    let options = {
      mediaType: 'photo',
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        console.log('Photo URI: ', response.uri);
        // Do something with the captured photo URI, such as displaying it in an Image component
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Camera Test App</Text>
      </View>
      <View style={styles.cameraContainer}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>
        <View style={{marginTop: 20}}></View>
        <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginTop: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cameraContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  camera: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 200,
  },
  button: {
    padding: 20,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
