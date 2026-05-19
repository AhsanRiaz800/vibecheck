import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveFontSize } from '../../utils/helper';
import { Button } from '../../components';

 
export const EventsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        {/* Left Profile */}
        <TouchableOpacity activeOpacity={0.8} style={styles.profileButton}>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/300',
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        {/* Center Title */}
        <Text style={styles.headerTitle}>Events</Text>

        {/* Right Plus */}
        <TouchableOpacity activeOpacity={0.8} style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Empty State */}
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No Events Found</Text>

        <Text style={styles.emptySubtitle}>
          You haven’t created or joined any events yet.
        </Text>

        <Button
          label="Create an Event"
          onPress={() => {}}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    height: 70,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,

    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 100,
    overflow: 'hidden',
  },

  profileImage: {
    width: '100%',
    height: '100%',
  },

  headerTitle: {
    fontSize: responsiveFontSize(18),
    fontWeight: '700',
    color: '#000000',
  },

  plusButton: {
    width: 44,
    height: 44,
    borderRadius: 100,

    backgroundColor: '#F3F4F6',

    justifyContent: 'center',
    alignItems: 'center',
  },

  plusText: {
    fontSize: responsiveFontSize(24),
    fontWeight: '500',
    color: '#000000',

    marginTop: -2,
  },

  emptyContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 30,
  },

  emptyTitle: {
    fontSize: responsiveFontSize(24),
    fontWeight: '700',
    color: '#000000',
  },

  emptySubtitle: {
    marginTop: 10,

    fontSize: responsiveFontSize(14),
    lineHeight: 22,

    color: '#7A7A7A',
    textAlign: 'center',
  },

  button: {
    marginTop: 30,
  },
});