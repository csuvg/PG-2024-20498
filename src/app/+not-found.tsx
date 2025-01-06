import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, Platform, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const { width: screenWidth } = Dimensions.get('window')

const imageSource = require('../../assets/images/ground-decoration.png')

const getImageDimensions = (source) => {
  if (Platform.OS === 'web') {
    const { width, height } = Dimensions.get('window')
    return { width, height }
  } else {
    const { width, height } = Image.resolveAssetSource(source)
    return { width, height }
  }
}

const { width, height } = getImageDimensions(imageSource)

const lastSevenDaysData = [
  { height: 80, date: '13/10' },
  { height: 120, date: '14/10' },
  { height: 90, date: '15/10' },
  { height: 110, date: '16/10' },
  { height: 70, date: '17/10' },
  { height: 60, date: '18/10' },
  { height: 40, date: '19/10' },
]

export default function NotFoundScreen() {
  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Ionicons name="menu" size={32} color="white" />
            <Text style={styles.title}>EcoScan</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                style={styles.profileImage}
                testID="profileImage"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.gramsContainer}>
            <Text style={styles.gramsTitle}>Gramos de basura</Text>
            <Text style={styles.gramsValue}>388 g 📉</Text>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressIndicator}>
              <View style={[styles.progressRelative, { width: '42.3%' }]} />
            </View>
            <Text style={styles.indicatorText}>42.3%</Text>
            <Text style={styles.progressText}>Del consumo usual de tu día</Text>
          </View>

          <View style={styles.categoriesContainer}>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryPercentage}>74%</Text>
              <Text style={styles.categoryLabel}>Papel y cartón</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryPercentage}>32%</Text>
              <Text style={styles.categoryLabel}>Vidrio</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryPercentage}>57%</Text>
              <Text style={styles.categoryLabel}>Plástico</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryPercentage}>41%</Text>
              <Text style={styles.categoryLabel}>Metal</Text>
            </View>
          </View>

          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Últimos 7 días</Text>
            <View style={styles.chartBarContainer}>
              {lastSevenDaysData.map((date, index) => (
                <View key={index} style={styles.barContainer}>
                  <View style={[
                    styles.chartBar,
                    {
                      height: date.height,
                      backgroundColor:
                        (index !== lastSevenDaysData.length - 1)
                          ? (date.height < 100) ? '#4CAF50' : '#F44336' // Verde si la altura es < 100, rojo si es >= 100
                          : '#2196F3' // Azul para el último día
                    }
                  ]} />
                  <Text style={styles.dateText}>{date.date}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.goalContainer}>
            <View style={styles.goalTextContainer}>
              <Text style={styles.goalText}>🏁 Meta del día: Consume menos de 800 gramos de basura</Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.circleButton} onPress={() => console.log('hola')}>
              <Ionicons name="stats-chart" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => navigation.navigate('AddRegisterScreen')}
              testID="addButton"
            >
              <Ionicons name="add-circle" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => navigation.navigate('ChatbotMainScreen')}
              testID="chatButton"
            >
              <Ionicons name="chatbubbles" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    position: 'relative',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4D9B2A',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  gramsContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  gramsTitle: {
    fontSize: 18,
    color: '#757575',
  },
  gramsValue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  progressContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressIndicator: {
    width: '50%',
    height: 20,
    backgroundColor: '#CCC',
  },
  progressRelative: {
    height: '100%',
    backgroundColor: '#4D9B2A',
  },
  indicatorText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressText: {
    textAlign: 'center',
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryLabel: {
    fontSize: 16,
    color: '#757575',
  },
  chartContainer: {
    paddingHorizontal: 20,
  },
  chartTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  chartBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  barContainer: {
    alignItems: 'center',
  },
  chartBar: {
    width: 30,
  },
  dateText: {
    fontSize: 12,
  },
  goalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  goalTextContainer: {
    width: '60%',
    height: '100%',
  },
  goalText: {
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25
  },
  circleButton: {
    backgroundColor: '#4D9B2A',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  image: {
    position: 'absolute',
    bottom: (-height / 6) - 50,
    width: screenWidth,
    height: ((screenWidth * height) / width),
    zIndex: 0,
  },
});
