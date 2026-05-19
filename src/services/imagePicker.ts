/**
 * Image-picker service.
 *
 * Production mode wraps `react-native-image-picker` so the screen layer
 * doesn't need to know which native module is in use. While the package
 * isn't installed, this service falls back to a deterministic placeholder
 * avatar so the Profile Pic screen keeps working in dev.
 *
 * To enable native picking:
 *   1. yarn add react-native-image-picker
 *   2. cd ios && pod install
 *   3. Add NSPhotoLibraryUsageDescription to ios/Info.plist
 *   4. Uncomment the marked block below.
 */
import { Alert, Platform } from 'react-native';

// ─── Native module bridge ───────────────────────────────────────────────
// Uncomment after `yarn add react-native-image-picker` + `pod install`.
//
// import { launchImageLibrary } from 'react-native-image-picker';
//
// const NATIVE_PICKER = (options: any, cb: (resp: any) => void) =>
//   launchImageLibrary(options, cb);
type NativePicker = (options: any, cb: (resp: any) => void) => void;
const NATIVE_PICKER = null as NativePicker | null;

export type PickedImage = {
  uri: string;
  fileName?: string;
  mimeType?: string;
  width?: number;
  height?: number;
};

const FALLBACK_AVATAR =
  'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&q=80';

export const imagePicker = {
  async pickFromGallery(): Promise<PickedImage | null> {
    if (!NATIVE_PICKER) {
      Alert.alert(
        'Mock image picker',
        Platform.OS === 'ios'
          ? 'Install react-native-image-picker and run `pod install` to enable the native gallery. Using a placeholder for now.'
          : 'Install react-native-image-picker to enable the native gallery. Using a placeholder for now.',
      );
      return { uri: FALLBACK_AVATAR };
    }

    return await new Promise<PickedImage | null>((resolve) => {
      NATIVE_PICKER(
        {
          mediaType: 'photo',
          selectionLimit: 1,
          quality: 0.9,
          includeBase64: false,
        },
        (response: any) => {
          if (response?.didCancel) {
            resolve(null);
            return;
          }
          const asset = response?.assets?.[0];
          if (!asset?.uri) {
            resolve(null);
            return;
          }
          resolve({
            uri: asset.uri,
            fileName: asset.fileName,
            mimeType: asset.type,
            width: asset.width,
            height: asset.height,
          });
        },
      );
    });
  },
};
