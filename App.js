import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ClockApp = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); 
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Relojcito</Text>
      <View style={styles.clockContainer}>
        <Text style={styles.time}>{formatTime(time)}</Text>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    color: "#61dafb",
    marginBottom: 20,
  },
  clockContainer: {
    width: width * 0.8,
    height: height * 0.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  time: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
  },
});

export default ClockApp;
