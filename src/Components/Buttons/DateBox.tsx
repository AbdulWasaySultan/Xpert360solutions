import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import { FontType } from '../Constants/FontType';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Calculates width for ~4 visible items on screen with padding
const BOX_WIDTH = (SCREEN_WIDTH - 64) / 4;

function DateBox() {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(2); // Default to today (index 2)

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Normalize today's date to midnight for accurate date-only comparisons
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Generate 2 past days, today, and 4 future days (7 days total)
  const calendarDays = Array.from({ length: 7 }).map((_, index) => {
    const d = new Date();
    d.setDate(d.getDate() + (index - 2)); // Offset by -2 so past days render on the left
    d.setHours(0, 0, 0, 0);

    let status: 'past' | 'current' | 'future' = 'future';
    if (d.getTime() < today.getTime()) {
      status = 'past';
    } else if (d.getTime() === today.getTime()) {
      status = 'current';
    }

    return {
      fullDate: d,
      dayName: dayNames[d.getDay()],
      dateNumber: d.getDate(),
      status,
    };
  });

  const getBackgroundColor = (status: 'past' | 'current' | 'future') => {
    switch (status) {
      case 'past':
        return '#1C1C1C80';
      case 'current':
        return '#E02723';
      case 'future':
        return '#2C2C2C';
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {calendarDays.map((item, index) => {
          const isSelected = selectedDateIndex === index;
          const bgColor = getBackgroundColor(item.status);

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.datebox,
                { backgroundColor: bgColor },
                isSelected &&
                  item.status !== 'current' &&
                  styles.selectedBorder,
              ]}
              activeOpacity={0.8}
              onPress={() => setSelectedDateIndex(index)}
            >
              <Text style={styles.dateText}>{item.dateNumber}</Text>
              <Text style={styles.dayText}>{item.dayName}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default DateBox;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  datebox: {
    width: BOX_WIDTH,
    aspectRatio: 78 / 79,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBorder: {
    borderWidth: 1.5,
    borderColor: '#E02723',
  },
  dayText: {
    fontSize: FontType.medium2,
    fontWeight: '400',
    color: '#FFFFFF',
    marginTop: 2,
  },
  dateText: {
    fontSize: FontType.large3,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
