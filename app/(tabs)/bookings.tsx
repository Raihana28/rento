"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const currentBookings = [
  {
    id: 1,
    carName: "BMW X5",
    brand: "BMW",
    pickupDate: "Dec 25, 2024",
    dropoffDate: "Dec 28, 2024",
    status: "Active",
    price: "₱7,500",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 2,
    carName: "Toyota Camry",
    brand: "Toyota",
    pickupDate: "Jan 5, 2025",
    dropoffDate: "Jan 8, 2025",
    status: "Upcoming",
    price: "₱5,400",
    image: "/placeholder.svg?height=80&width=120",
  },
]

const bookingHistory = [
  {
    id: 3,
    carName: "Honda CR-V",
    brand: "Honda",
    pickupDate: "Dec 10, 2024",
    dropoffDate: "Dec 13, 2024",
    status: "Completed",
    price: "₱6,600",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 4,
    carName: "Nissan Altima",
    brand: "Nissan",
    pickupDate: "Nov 20, 2024",
    dropoffDate: "Nov 23, 2024",
    status: "Completed",
    price: "₱5,700",
    image: "/placeholder.svg?height=80&width=120",
  },
]

export default function BookingsScreen() {
  const [activeTab, setActiveTab] = useState("current")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "#00bb02"
      case "Upcoming":
        return "#ffa500"
      case "Completed":
        return "#666666"
      default:
        return "#666666"
    }
  }

  const BookingCard = ({ booking }: { booking: any }) => (
    <TouchableOpacity style={styles.bookingCard}>
      <Image source={{ uri: booking.image }} style={styles.carImage} />
      <View style={styles.bookingInfo}>
        <View style={styles.bookingHeader}>
          <Text style={styles.carName}>{booking.carName}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(booking.status) }]}>
            <Text style={styles.statusText}>{booking.status}</Text>
          </View>
        </View>
        <Text style={styles.brandName}>{booking.brand}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Pickup: {booking.pickupDate}</Text>
          <Text style={styles.dateLabel}>Dropoff: {booking.dropoffDate}</Text>
        </View>
        <View style={styles.bookingFooter}>
          <Text style={styles.price}>{booking.price}</Text>
          <View style={styles.actionButtons}>
            {booking.status === "Upcoming" && (
              <TouchableOpacity style={styles.modifyButton}>
                <Text style={styles.modifyButtonText}>Modify</Text>
              </TouchableOpacity>
            )}
            {booking.status !== "Completed" && (
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            )}
            {booking.status === "Completed" && (
              <TouchableOpacity style={styles.reviewButton}>
                <Text style={styles.reviewButtonText}>Review</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "current" && styles.activeTab]}
          onPress={() => setActiveTab("current")}
        >
          <Text style={[styles.tabText, activeTab === "current" && styles.activeTabText]}>Current Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "history" && styles.activeTab]}
          onPress={() => setActiveTab("history")}
        >
          <Text style={[styles.tabText, activeTab === "history" && styles.activeTabText]}>Booking History</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === "current" ? (
          <>
            {currentBookings.length > 0 ? (
              currentBookings.map((booking) => <BookingCard key={booking.id} booking={booking} />)
            ) : (
              <View style={styles.emptyState}>
                <Ionicons name="calendar-outline" size={64} color="#666666" />
                <Text style={styles.emptyStateTitle}>No Current Bookings</Text>
                <Text style={styles.emptyStateText}>You don't have any active or upcoming bookings</Text>
              </View>
            )}
          </>
        ) : (
          <>
            {bookingHistory.length > 0 ? (
              bookingHistory.map((booking) => <BookingCard key={booking.id} booking={booking} />)
            ) : (
              <View style={styles.emptyState}>
                <Ionicons name="time-outline" size={64} color="#666666" />
                <Text style={styles.emptyStateTitle}>No Booking History</Text>
                <Text style={styles.emptyStateText}>Your completed bookings will appear here</Text>
              </View>
            )}
          </>
        )}
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
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "#00bb02",
  },
  tabText: {
    color: "#cccccc",
    fontSize: 14,
    fontWeight: "500",
  },
  activeTabText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bookingCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
  },
  carImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  bookingInfo: {
    flex: 1,
  },
  bookingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  carName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  brandName: {
    fontSize: 14,
    color: "#cccccc",
    marginBottom: 8,
  },
  dateContainer: {
    marginBottom: 12,
  },
  dateLabel: {
    fontSize: 12,
    color: "#cccccc",
    marginBottom: 2,
  },
  bookingFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00bb02",
  },
  actionButtons: {
    flexDirection: "row",
  },
  modifyButton: {
    backgroundColor: "#333333",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  modifyButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  cancelButton: {
    backgroundColor: "#ff4444",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  cancelButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  reviewButton: {
    backgroundColor: "#00bb02",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  reviewButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: "#cccccc",
    textAlign: "center",
  },
})
