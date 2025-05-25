import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const onboardingData = [
  {
    id: 1,
    title: 'Find Your Perfect Car',
    subtitle: 'Browse through hundreds of cars available for rent',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Easy Booking Process',
    subtitle: 'Book your car in just a few simple steps',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Drive with Confidence',
    subtitle: 'Enjoy your journey with our premium car rental service',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop',
  },
];

export default function WelcomeScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);

  const handlePageChange = (e) => {
    setCurrentPage(e.nativeEvent.position);
  };

  const nextPage = () => {
    if (currentPage < onboardingData.length - 1) {
      pagerRef.current?.setPage(currentPage + 1);
    } else {
      navigation.navigate('Login');
    }
  };

  const skipToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={skipToLogin}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={handlePageChange}
      >
        {onboardingData.map((item) => (
          <View key={item.id} style={styles.page}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        ))}
      </PagerView>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentPage === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={nextPage}>
          <Text style={styles.nextButtonText}>
            {currentPage === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          </Text>
          <Ionicons name="arrow-forward" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  skipText: {
    fontSize: 16,
    color: '#4169e1',
    fontWeight: '600',
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4169e1',
  },
  inactiveDot: {
    backgroundColor: '#cccccc',
  },
  nextButton: {
    backgroundColor: '#4169e1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    gap: 10,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
