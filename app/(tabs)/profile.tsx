import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"

const menuItems = [
  {
    id: 1,
    title: "Personal Information",
    icon: "person-outline",
    action: () => console.log("Personal Info"),
  },
  {
    id: 2,
    title: "Driver's License",
    icon: "card-outline",
    action: () => console.log("Driver License"),
  },
  {
    id: 3,
    title: "Payment Methods",
    icon: "wallet-outline",
    action: () => console.log("Payment Methods"),
  },
  {
    id: 4,
    title: "Rental History",
    icon: "time-outline",
    action: () => router.push("/(tabs)/bookings"),
  },
  {
    id: 5,
    title: "Change Password",
    icon: "lock-closed-outline",
    action: () => console.log("Change Password"),
  },
  {
    id: 6,
    title: "Notifications Settings",
    icon: "notifications-outline",
    action: () => console.log("Notification Settings"),
  },
  {
    id: 7,
    title: "Help & Support",
    icon: "help-circle-outline",
    action: () => console.log("Help & Support"),
  },
  {
    id: 8,
    title: "About",
    icon: "information-circle-outline",
    action: () => console.log("About"),
  },
]

export default function ProfileScreen() {
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => router.replace("/auth/login"),
      },
    ])
  }

  const handleDeleteAccount = () => {
    Alert.alert("Delete Account", "Are you sure you want to delete your account? This action cannot be undone.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => console.log("Account deleted"),
      },
    ])
  }

  const MenuItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.menuItem} onPress={item.action}>
      <View style={styles.menuItemLeft}>
        <Ionicons name={item.icon as any} size={24} color="#ffffff" />
        <Text style={styles.menuItemText}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#666666" />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image source={{ uri: "/placeholder.svg?height=80&width=80" }} style={styles.profileImage} />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@email.com</Text>
          <Text style={styles.profilePhone}>+63 912 345 6789</Text>

          <TouchableOpacity style={styles.editProfileButton}>
            <Ionicons name="pencil" size={16} color="#ffffff" />
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Total Rentals</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>₱45,600</Text>
            <Text style={styles.statLabel}>Total Spent</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </View>

        {/* Danger Zone */}
        <View style={styles.dangerSection}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={24} color="#ffffff" />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
            <Ionicons name="trash-outline" size={24} color="#ff4444" />
            <Text style={styles.deleteButtonText}>Delete Account</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  profileSection: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: "#cccccc",
    marginBottom: 2,
  },
  profilePhone: {
    fontSize: 14,
    color: "#cccccc",
    marginBottom: 16,
  },
  editProfileButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00bb02",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editProfileButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
  statsSection: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00bb02",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#cccccc",
  },
  statDivider: {
    width: 1,
    backgroundColor: "#333333",
    marginHorizontal: 16,
  },
  menuSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    color: "#ffffff",
    marginLeft: 16,
  },
  dangerSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ff4444",
    borderRadius: 12,
    padding: 16,
  },
  deleteButtonText: {
    color: "#ff4444",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
})
