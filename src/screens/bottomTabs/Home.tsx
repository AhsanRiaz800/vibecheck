/**
 * Home screen — VibeCheck.
 *
 * Premium minimal home screen with:
 * - Safe area support
 * - Greeting header
 * - Search bar
 * - Stats cards
 * - Upcoming event card
 * - Clean spacing system
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../theme/colors';
import { spacing, text } from '../../theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/helper';

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.welcome}>Welcome Back 👋</Text>
            <Text style={styles.name}>Ahsan</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search events, leagues..."
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Events</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>08</Text>
            <Text style={styles.statLabel}>Leagues</Text>
          </View>
        </View>

        {/* Upcoming Match */}
        <View style={styles.eventCard}>
          <View style={styles.eventBadge}>
            <Text style={styles.eventBadgeText}>LIVE</Text>
          </View>

          <Text style={styles.eventTitle}>
            Weekend Football League
          </Text>

          <Text style={styles.eventSubtitle}>
            Sunday · 8:00 PM · Lahore Stadium
          </Text>

          <View style={styles.divider} />

          <View style={styles.bottomRow}>
            <View>
              <Text style={styles.team}>Team Alpha</Text>
              <Text style={styles.teamScore}>2</Text>
            </View>

            <Text style={styles.vs}>VS</Text>

            <View>
              <Text style={styles.team}>Team Bravo</Text>
              <Text style={styles.teamScore}>1</Text>
            </View>
          </View>
        </View>

        {/* Activity Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
        </View>

        <View style={styles.activityCard}>
          <Text style={styles.activityText}>
            You joined "Summer League 2026"
          </Text>

          <Text style={styles.activityTime}>2 hours ago</Text>
        </View>

        <View style={styles.activityCard}>
          <Text style={styles.activityText}>
            New event available nearby
          </Text>

          <Text style={styles.activityTime}>Yesterday</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingBottom: responsiveHeight(15),
  },

  headerRow: {
    marginTop: spacing.s4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcome: {
    ...text.label,
    color: colors.fgSecondary,
    fontSize: responsiveFontSize(14),
  },

  name: {
    ...text.h1,
    marginTop: 2,
    fontSize: responsiveFontSize(28),
    fontWeight: '700',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#E0FF31',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: responsiveFontSize(18),
    fontWeight: '700',
    color: '#000',
  },

  searchContainer: {
    marginTop: spacing.s6,
  },

  searchInput: {
    height: 54,
    backgroundColor: '#F4F4F5',
    borderRadius: 18,
    paddingHorizontal: 18,

    fontSize: responsiveFontSize(14),
    color: '#111827',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.s6,
  },

  statCard: {
    width: '48%',
    backgroundColor: '#F9FAFB',
    borderRadius: 24,
    paddingVertical: 24,
    alignItems: 'center',
  },

  statNumber: {
    ...text.h1,
    fontSize: responsiveFontSize(30),
    fontWeight: '700',
  },

  statLabel: {
    ...text.bodyMuted,
    marginTop: 4,
    fontSize: responsiveFontSize(13),
  },

  eventCard: {
    marginTop: spacing.s7,
    backgroundColor: '#111111',
    borderRadius: 30,
    padding: 22,
  },

  eventBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0FF31',
    borderRadius: 100,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },

  eventBadgeText: {
    fontSize: responsiveFontSize(11),
    fontWeight: '700',
    color: '#000',
  },

  eventTitle: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(24),
    fontWeight: '700',
    marginTop: 18,
  },

  eventSubtitle: {
    color: '#A1A1AA',
    marginTop: 8,
    fontSize: responsiveFontSize(13),
  },

  divider: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginVertical: 24,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  team: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(15),
    fontWeight: '500',
  },

  teamScore: {
    color: '#E0FF31',
    fontSize: responsiveFontSize(34),
    fontWeight: '700',
    marginTop: 6,
  },

  vs: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(16),
    fontWeight: '600',
  },

  sectionHeader: {
    marginTop: spacing.s7,
    marginBottom: spacing.s3,
  },

  sectionTitle: {
    ...text.h3,
    fontSize: responsiveFontSize(18),
    fontWeight: '700',
  },

  activityCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
  },

  activityText: {
    color: '#111827',
    fontSize: responsiveFontSize(14),
    fontWeight: '500',
  },

  activityTime: {
    color: '#9CA3AF',
    marginTop: 8,
    fontSize: responsiveFontSize(12),
  },
});