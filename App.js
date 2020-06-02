import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ToastAndroid,
  Text,
} from 'react-native';
import FloatingVideo from 'rn-floating-video-widget';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floatingWidget: false,
      grantPermission: false,
    };
    this.data = {
      video: {
        url:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      videos: [
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        },
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        },
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        },
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        },
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        },
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        },
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.jpg',
        },
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        },
        {
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        },
      ],
      seek: 10,
      index: 0,
    };
  }

  startVideo() {
    FloatingVideo.requestOverlayPermission()
      .then(() => {
        this.setState({
          floatingWidget: true,
          grantPermission: true,
        });
        FloatingVideo.open(this.data);
      })
      .catch(e => {
        ToastAndroid.show(
          'Please grant permission for draw over other apps' +
            JSON.stringify(e),
          800,
        );
      });
  }

  componentWillUnmount() {
    FloatingVideo.removeAllListeners();
  }

  render() {
    const floatingWidget = this.state.floatingWidget;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.play}
          onPress={() => {
            this.startVideo();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            Play Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#ffffff',
  },

  play: {
    width: '80%',
    alignSelf: 'center',
    padding: 15,
    backgroundColor: '#1273F0',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 25,
  },
});
