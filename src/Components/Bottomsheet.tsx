import React, { Children, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Cards from './Views/TaskView/Cards';

export default function InteractiveBottomSheet({ children }: { children: React.ReactNode }) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Define snap points (e.g., 50% screen height to 85% screen height)
  const snapPoints = useMemo(() => ['60%', '85%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={styles.sheetBackground}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <BottomSheetScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Your Tasks</Text>

{children}
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  handleIndicator: {
    backgroundColor: '#444444',
    width: 42,
    height: 5,
  },
  scrollContent: {
    // paddingHorizontal: 20,
    // paddingBottom: 40,
    // gap: 12,

    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  dummyCard: {
    height: 120,
    backgroundColor: '#2A2A2A',
    borderRadius: 16,
  },
});
