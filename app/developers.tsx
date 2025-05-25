import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"

const developers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead Developer",
    avatar: "/placeholder.svg?height=80&width=80",
    skills: ["React Native", "Node.js", "MongoDB"],
    github: "alexjohnson",
    linkedin: "alex-johnson-dev",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UI/UX Designer",
    avatar: "/placeholder.svg?height=80&width=80",
    skills: ["Figma", "Adobe XD", "User Research"],
    github: "sarahchen",
    linkedin: "sarah-chen-design",
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Backend Developer",
    avatar: "/placeholder.svg?height=80&width=80",
    skills: ["Express.js", "PostgreSQL", "AWS"],
    github: "mikerodriguez",
    linkedin: "mike-rodriguez-backend",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Mobile Developer",
    avatar: "/placeholder.svg?height=80&width=80",
    skills: ["React Native", "iOS", "Android"],
    github: "emmawilson",
    linkedin: "emma-wilson-mobile",
  },
]

export default function DevelopersScreen() {
  const DeveloperCard = ({ developer }: { developer: any }) => (
    <View style={styles.developerCard}>
      <Image source={{ uri: developer.avatar }} style={styles.avatar} />
      <View style={styles.developerInfo}>
        <Text style={styles.developerName}>{developer.name}</Text>
        <Text style={styles.developerRole}>{developer.role}</Text>
        <View style={styles.skillsContainer}>
          {developer.skills.map((skill: string, index: number) => (
            <View key={index} style={styles.skillTag}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-github" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-linkedin" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.title}>Meet the Team</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.introSection}>
          <Text style={styles.introTitle}>RENTO Development Team</Text>
          <Text style={styles.introText}>
            Meet the talented individuals behind RENTO - your trusted car rental platform. Our team is passionate about
            creating seamless experiences for car rentals.
          </Text>
        </View>

        <View style={styles.teamSection}>
          {developers.map((developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Get in Touch</Text>
          <Text style={styles.contactText}>Have questions or feedback? We'd love to hear from you!</Text>
          <TouchableOpacity style={styles.contactButton}>
            <Ionicons name="mail" size={20} color="#ffffff" />
            <Text style={styles.contactButtonText}>Contact Us</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  content: {
    flex: 1,
  },
  introSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  introTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bb02",
    marginBottom: 12,
    textAlign: "center",
  },
  introText: {
    fontSize: 16,
    color: "#cccccc",
    textAlign: "center",
    lineHeight: 24,
  },
  teamSection: {
    paddingHorizontal: 20,
  },
  developerCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    flexDirection: "row",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  developerInfo: {
    flex: 1,
  },
  developerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  developerRole: {
    fontSize: 14,
    color: "#00bb02",
    marginBottom: 12,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  skillTag: {
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 4,
  },
  skillText: {
    fontSize: 12,
    color: "#ffffff",
  },
  socialLinks: {
    flexDirection: "row",
  },
  socialButton: {
    backgroundColor: "#333333",
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  contactSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    color: "#cccccc",
    textAlign: "center",
    marginBottom: 20,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00bb02",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  contactButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
})
