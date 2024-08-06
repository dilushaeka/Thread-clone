import { Platform } from 'react-native';

let URI = '';

if (Platform.OS === 'ios') {
  URI = 'https://texteditor-rnk5.onrender.com/api/v1';
} else {
  URI = 'https://texteditor-rnk5.onrender.com/api/v1';
  // URI = 'https://localhost:8000/api/v1';
}

export { URI };
