"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const brands = [
  { id: 1, name: "Toyota", logo: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Honda", logo: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "BMW", logo: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Mercedes", logo: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Audi", logo: "/placeholder.svg?height=40&width=40" },
  { id: 6, name: "Nissan", logo: "/placeholder.svg?height=40&width=40" },
  { id: 7, name: "Hyundai", logo: "/placeholder.svg?height=40&width=40" },
  { id: 8, name: "Ford", logo: "/placeholder.svg?height=40&width=40" },
]

const allCars = [
  // Toyota cars
  {
    id: 1,
    name: "Toyota Camry",
    brand: "Toyota",
    location: "Davao City",
    price: "₱1,800/day",
    image: "/placeholder.svg?height=120&width=180",
    type: "Sedan",
    fuel: "Gasoline",
    seats: 5,
  },
  {
    id: 2,
    name: "Toyota RAV4",
    brand: "Toyota",
    location: "Davao City",
    price: "₱2,200/day",
    image: "/placeholder.svg?height=120&width=180",
    type: "SUV",
    fuel: "Gasoline",
    seats: 5,
  },
  {
    id: 3,
    name: "Toyota Prius",
    brand: "Toyota",
    location: "Davao City",
    price: "₱1,600/day",
    image: "/placeholder.svg?height=120&width=180",
    type: "Sedan",
    fuel: "Hybrid",
    seats: 5,
  },
  // Honda cars
  {
    id: 4,
    name: "Honda Civic",
    brand: "Honda",
    location: "Davao City",
    price: "₱1,700/day",
    image: "/placeholder.svg?height=120&width=180",
    type: "Sedan",
    fuel: "Gasoline",
    seats: 5,
  },
  {
    id: 5,
    name: "Honda CR-V",
    brand: "Honda",
    location: "Davao City",
    price: "₱2,200/day",
    image: "/placeholder.svg?height=120&width=180",
    type: "SUV",
    fuel: "Gasoline",
    seats: 5,
  },
  {
    id: 6,
    name: "Honda Pilot",
    brand: "Honda",
    location: "Davao City",
    price: "₱2,800/day",
    image: "/placeholder.svg?height=120&width=180",
    type: "SUV",
    fuel: "Gasoline",
    seats: 8,
  },
  // BMW cars
  {
    id: 7,
    name: "BMW 3 Series",
    brand: "BMW",
    location: "Davao City",
    price: "₱3,200/day",
    image: "/placeholder.svg?height=120&width=180",
    type: "Sedan",
    fuel: "Gasoline",
    seats: 5,
  },
  {
    id: 8,
    name: "BMW X5",
    brand: "BMW",
    location: "Davao City",
    price: "₱4,500/day",
    image: "/placeholder.svg?height=120&width=180",
    type: "SUV",
    fuel: "Gasoline",
    seats: 7,
  },
  {
    id: 9,
    name: "BMW X3",
    brand: "BMW",
    location: "Davao City",
    price: "₱3,800/day",
    image: "/placeholder.svg?height=120&width=180",
    type: "SUV",
    fuel: "Gasoline",
    seats: 5,
  },
]

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredCars = allCars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesBrand = selectedBrand === "All" || car.brand === selectedBrand
    return matchesSearch && matchesBrand
  })

  const getCarsByBrand = (brandName: string) => {
    return allCars.filter((car) => car.brand === brandName)
  }

  const CarCard = ({ car }: { car: any }) => (
    <TouchableOpacity style={styles.carCard}>
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
          <Text style={styles.title}>Find Cars</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#666666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search cars..."
              placeholderTextColor="#666666"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={styles.filterButton} onPress={() => setShowFilters(!showFilters)}>
            <Ionicons name="options" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Top Brands */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Brands</Text>
          <View style={styles.brandsGrid}>
            {brands.map((brand) => (
              <TouchableOpacity
                key={brand.id}
                style={[styles.brandCard, selectedBrand === brand.name && styles.selectedBrandCard]}
                onPress={() => setSelectedBrand(brand.name)}
              >
                <Image source={{ uri: brand.logo }} style={styles.brandLogo} />
                <Text style={styles.brandName}>{brand.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* All Cars or Filtered Results */}
        {selectedBrand === "All" ? (
          <>
            {brands.map((brand) => {
              const brandCars = getCarsByBrand(brand.name)
              return (
                <View key={brand.id} style={styles.section}>
                  <Text style={styles.sectionTitle}>{brand.name}</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {brandCars.map((car) => (
                      <CarCard key={car.id} car={car} />
                    ))}
                  </ScrollView>
                </View>
              )
            })}
          </>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {selectedBrand} Cars ({filteredCars.length})
            </Text>
            <View style={styles.carsGrid}>
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </View>
          </View>
        )}

        {/* Map View Button */}
        <TouchableOpacity style={styles.mapButton}>
          <Ionicons name="map" size={20} color="#ffffff" />
          <Text style={styles.mapButtonText}>View on Map</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#ffffff",
  },
  filterButton: {
    backgroundColor: "#00bb02",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  brandsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  brandCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    width: "22%",
    marginBottom: 12,
  },
  selectedBrandCard: {
    backgroundColor: "#00bb02",
  },
  brandLogo: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  brandName: {
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center",
  },
  carCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    width: 180,
    marginBottom: 12,
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
  carsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  mapButton: {
    backgroundColor: "#00bb02",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  mapButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
})
