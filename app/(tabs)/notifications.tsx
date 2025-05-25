import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const notifications = [
  {
    id: 1,
    type: "booking",
    title: "Booking Confirmed",
    message: "Your BMW X5 booking has been confirmed for Dec 25, 2024",
    time: "2 hours ago",
    read: false,
    icon: "checkmark-circle",
    iconColor: "#00bb02",
  },
  {
    id: 2,
    type: "promotion",
    title: "Special Offer",
    message: "20% off on weekend rentals. Use code WEEKEND20",
    time: "1 day ago",
    read: false,
    icon: "gift",
    iconColor: "#ffa500",
  },
  {
    id: 3,
    type: "reminder",
    title: "Pickup Reminder",
    message: "Don't forget to pick up your Honda CR-V tomorrow at 10:00 AM",
    time: "2 days ago",
    read: true,
    icon: "time",
    iconColor: "#666666",
  },
  {
    id: 4,
    type: "booking",
    title: "Booking Cancelled",
    message: "Your Toyota Camry booking has been cancelled and refund processed",
    time: "3 days ago",
    read: true,
    icon: "close-circle",
    iconColor: "#ff4444",
  },
  {
    id: 5,
    type: "promotion",
    title: "New Cars Available",
    message: "Check out our latest luxury cars now available for rent",
    time: "1 week ago",
    read: true,
    icon: "car",
    iconColor: "#00bb02",
  },
  {
    id: 6,
    type: "system",
    title: "App Update",
    message: "New features and improvements are now available",
    time: "1 week ago",
    read: true,
    icon: "download",
    iconColor: "#666666",
  },
]

export default function NotificationsScreen() {
  const unreadCount = notifications.filter((n) => !n.read).length

  const NotificationItem = ({ notification }: { notification: any }) => (
    <TouchableOpacity style={[styles.notificationItem, !notification.read && styles.unreadItem]}>
      <View style={styles.iconContainer}>
        <Ionicons name={notification.icon as any} size={24} color={notification.iconColor} />
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{notification.title}</Text>
        <Text style={styles.notificationMessage}>{notification.message}</Text>
        <Text style={styles.notificationTime}>{notification.time}</Text>
      </View>
      {!notification.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        {unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>{unreadCount}</Text>
          </View>
        )}
      </View>

      {unreadCount > 0 && (
        <TouchableOpacity style={styles.markAllButton}>
          <Text style={styles.markAllButtonText}>Mark all as read</Text>
        </TouchableOpacity>
      )}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {notifications.length > 0 ? (
          notifications.map((notification) => <NotificationItem key={notification.id} notification={notification} />)
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="notifications-outline" size={64} color="#666666" />
            <Text style={styles.emptyStateTitle}>No Notifications</Text>
            <Text style={styles.emptyStateText}>You're all caught up! Notifications will appear here</Text>
          </View>
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: "#00bb02",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 24,
    alignItems: "center",
  },
  unreadBadgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  markAllButton: {
    marginHorizontal: 20,
    marginBottom: 16,
    alignSelf: "flex-end",
  },
  markAllButtonText: {
    color: "#00bb02",
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationItem: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "flex-start",
  },
  unreadItem: {
    borderLeftWidth: 3,
    borderLeftColor: "#00bb02",
  },
  iconContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#cccccc",
    lineHeight: 20,
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: "#666666",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00bb02",
    marginTop: 8,
    marginLeft: 8,
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
