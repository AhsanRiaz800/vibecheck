 
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Button,
  CameraIcon,
  PlusIcon,
  ProgressHeader,
  Screen,
} from '../components';
import { imagePicker } from '../services';
import { colors, spacing, text } from '../theme';
import type { AuthStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'ProfilePic'>;

const CIRCLE = 168;
const BADGE = 56;

export const ProfilePicScreen: React.FC<Props> = ({ navigation }) => {
  const [uri, setUri] = useState<string | null>(null);

  const onPick = async () => {
    const picked = await imagePicker.pickFromGallery();
    if (picked?.uri) setUri(picked.uri);
  };

  return (
    <Screen backgroundColor={colors.bg}>
      <ProgressHeader
        step={1}
        total={5}
        onBack={() => navigation.goBack()}
        onSkip={() => navigation.navigate('Age')}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Add a Profile Pic</Text>
        <Text style={styles.subtitle}>
          So other people can see you’re not bot by uploading a picture.
        </Text>

        <Pressable
          onPress={onPick}
          accessibilityRole="button"
          accessibilityLabel="Upload profile picture"
          style={styles.circleWrap}
        >
          <View style={styles.circle}>
            {uri ? (
              <Image source={{ uri }} style={styles.image} />
            ) : (
              <CameraIcon size={56} color={colors.fgPrimary} />
            )}
          </View>
          <View style={styles.badge}>
            <PlusIcon size={26} color={colors.fgOnLime} />
          </View>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Button label="Continue" onPress={() => navigation.navigate('Age')} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingTop: spacing.s7,
  },
  title: {
    ...text.h1,
    textAlign: 'center',
  },
  subtitle: {
    ...text.bodyMuted,
    textAlign: 'center',
    marginTop: spacing.s2,
    paddingHorizontal: spacing.s7,
    color: colors.fgSecondary,
    fontSize: 15,
  },
  circleWrap: {
    width: CIRCLE,
    height: CIRCLE,
    marginTop: spacing.s9,
  },
  circle: {
    width: CIRCLE,
    height: CIRCLE,
    borderRadius: CIRCLE / 2,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },
  badge: {
    position: 'absolute',
    right: -4,
    bottom: 6,
    width: BADGE,
    height: BADGE,
    borderRadius: BADGE / 2,
    backgroundColor: colors.lime,
    borderWidth: 4,
    borderColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: spacing.s5,
  },
});
