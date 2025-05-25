"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"

export default function OTPScreen() {
  const [otp, setOtp] = useState(["", "", "", ""])

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
  }

  const handleVerify = () => {
    const otpString = otp.join("")
    if (otpString.length !== 4) {
      Alert.alert("Error", "Please enter complete OTP")
      return
    }
    // Accept any 4-digit OTP
    router.push("/auth/login")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>Enter the 4-digit code sent to your email</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.resendText}>Resend Code</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#cccccc",
    marginBottom: 40,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  otpInput: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    width: 60,
    height: 60,
    fontSize: 24,
    color: "#ffffff",
    borderWidth: 1,
    borderColor: "#333333",
  },
  verifyButton: {
    backgroundColor: "#00bb02",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  verifyButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  resendText: {
    color: "#00bb02",
    textAlign: "center",
    fontSize: 16,
  },
})
