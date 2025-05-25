"use client"

import { useState, useRef } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import Swiper from "react-native-swiper"

const { width, height } = Dimensions.get("window")

const welcomeData = [
  {
    id: 1,
    title: "Find Your Perfect Ride",
    subtitle: "Discover thousands of cars available for rent in your area",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    title: "Book Instantly",
    subtitle: "Quick and easy booking process with instant confirmation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    title: "Drive with Confidence",
    subtitle: "All cars are verified and insured for your safety",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function WelcomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const swiperRef = useRef<Swiper>(null)

  const handleNext = () => {
    if (currentIndex < welcomeData.length - 1) {
      swiperRef.current?.scrollBy(1)
    } else {
      router.push("/auth/login")
    }
  }

  const handleSkip = () => {
    router.push("/auth/login")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={true}
        paginationStyle={styles.pagination}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        onIndexChanged={setCurrentIndex}
        loop={false}
      >
        {welcomeData.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        ))}
      </Swiper>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>{currentIndex === welcomeData.length - 1 ? "Get Started" : "Next"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  skipText: {
    color: "#ffffff",
    fontSize: 16,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#cccccc",
    textAlign: "center",
    lineHeight: 24,
  },
  pagination: {
    bottom: 120,
  },
  dot: {
    backgroundColor: "#333333",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#00bb02",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  footer: {
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  nextButton: {
    backgroundColor: "#00bb02",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
})
