"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"

const { width } = Dimensions.get("window")

const coupons = [
  { id: 1, title: "20% OFF", subtitle: "First Rental", code: "FIRST20" },
  { id: 2, title: "15% OFF", subtitle: "Weekend Special", code: "WEEKEND15" },
]

const featuredCars = [
  {
    id: 1,
    name: "BMW X5",
    brand: "BMW",
    location: "Davao City",
    price: "₱2,500/day",
    image: "/placeholder.svg?height=120&width=180",
  },
  {
    id: 2,
    name: "Toyota Camry",
    brand: "Toyota",
    location: "Davao City",
    price: "₱1,800/day",
    image: "/placeholder.svg?height=120&width=180",
  },
  {
    id: 3,
    name: "Honda CR-V",
    brand: "Honda",
    location: "Davao City",
    price: "₱2,200/day",
    image: "/placeholder.svg?height=120&width=180",
  },
]

const recentlyRented = [
  {
    id: 1,
    name: "Nissan Altima",
    brand: "Nissan",
    location: "Davao City",
    price: "₱1,900/day",
    image: "/placeholder.svg?height=120&width=180",
  },
  {
    id: 2,
    name: "Hyundai Tucson",
    brand: "Hyundai",
    location: "Davao City",
    price: "₱2,100/day",
    image: "/placeholder.svg?height=120&width=180",
  },
  {
    id: 3,
    name: "Ford Explorer",
    brand: "Ford",
    location: "Davao City",
    price: "₱2,800/day",
    image: "/placeholder.svg?height=120&width=180",
  },
]

export default function HomeScreen() {
  const [currentCoupon, setCurrentCoupon] = useState(0)

  const CarCard = ({ car }: { car: any }) => (
    <TouchableOpacity style={styles.carCard} onPress={() => router.push(`/car-details/${car.id}`)}>
      <Image source={{ uri: car.image }} style={styles.carImage} />
      <View style={styles.carInfo}>
        <Text style={styles.carName}>{car.name}</Text>
        <Text style={styles.carPrice}>{car.price}</Text>
        <View style={styles.carDetails}>
          <Text style={styles.carBrand}>{car.brand}</Text>
          <Text style={styles.carLocation}>{car.location}</Text>
          <Ionicons name="arrow-forward" size={16} color="#00bb02" />
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, John!</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={16} color="#00bb02" />
              <Text style={styles.location}>Davao City, PH</Text>
              <Text style={styles.flag}>🇵🇭</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.devsButton} onPress={() => router.push("/developers")}>
            <Text style={styles.devsButtonText}>Devs</Text>
          </TouchableOpacity>
        </View>

        {/* Coupon Section */}
        <View style={styles.couponSection}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.x / (width - 40))
              setCurrentCoupon(index)
            }}
          >
            {coupons.map((coupon) => (
              <View key={coupon.id} style={styles.couponCard}>
                <Text style={styles.couponTitle}>{coupon.title}</Text>
                <Text style={styles.couponSubtitle}>{coupon.subtitle}</Text>
                <Text style={styles.couponCode}>Code: {coupon.code}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.progressBar}>
            {coupons.map((_, index) => (
              <View key={index} style={[styles.progressDot, currentCoupon === index && styles.activeProgressDot]} />
            ))}
          </View>
        </View>

        {/* Rental Form */}
        <View style={styles.rentalForm}>
          <View style={styles.rentalTabs}>
            <TouchableOpacity style={[styles.rentalTab, styles.activeTab]}>
              <Text style={styles.activeTabText}>RENTAL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rentalTab}>
              <Text style={styles.tabText}>AIRPORT PICKUP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dateTimeSection}>
            <Text style={styles.dateTimeLabel}>Pick-up Date & Time</Text>
            <Text style={styles.dateTimeValue}>Dec 25, 2024 - 10:00 AM</Text>
            <Text style={styles.dateTimeLabel}>Drop-off Date & Time</Text>
            <Text style={styles.dateTimeValue}>Dec 28, 2024 - 10:00 AM</Text>
          </View>
          <TouchableOpacity style={styles.findCarsButton} onPress={() => router.push("/(tabs)/search")}>
            <Text style={styles.findCarsButtonText}>Find Cars</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Cars */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Cars (Most Popular)</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </ScrollView>
        </View>

        {/* Recently Rented */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recently Rented</Text>
            <TouchableOpacity onPress={() => router.push("/(tabs)/bookings")}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recentlyRented.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  location: {
    color: "#cccccc",
    marginLeft: 4,
    marginRight: 4,
  },
  flag: {
    fontSize: 16,
  },
  devsButton: {
    backgroundColor: "#00bb02",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  devsButtonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  couponSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  couponCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 20,
    width: width - 40,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#00bb02",
  },
  couponTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bb02",
  },
  couponSubtitle: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 4,
  },
  couponCode: {
    fontSize: 14,
    color: "#cccccc",
    marginTop: 8,
  },
  progressBar: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#333333",
    marginHorizontal: 4,
  },
  activeProgressDot: {
    backgroundColor: "#00bb02",
  },
  rentalForm: {
    backgroundColor: "#1a1a1a",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  rentalTabs: {
    flexDirection: "row",
    marginBottom: 20,
  },
  rentalTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "#00bb02",
  },
  activeTabText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  tabText: {
    color: "#cccccc",
  },
  dateTimeSection: {
    marginBottom: 20,
  },
  dateTimeLabel: {
    color: "#cccccc",
    fontSize: 14,
    marginBottom: 4,
  },
  dateTimeValue: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 12,
  },
  findCarsButton: {
    backgroundColor: "#00bb02",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  findCarsButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  viewAllText: {
    color: "#00bb02",
    fontSize: 14,
  },
  carCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    width: 180,
  },
  carImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  carInfo: {
    flex: 1,
  },
  carName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  carPrice: {
    fontSize: 14,
    color: "#00bb02",
    fontWeight: "600",
    marginBottom: 8,
  },
  carDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carBrand: {
    fontSize: 12,
    color: "#cccccc",
  },
  carLocation: {
    fontSize: 12,
    color: "#cccccc",
    flex: 1,
    marginLeft: 8,
  },
})
