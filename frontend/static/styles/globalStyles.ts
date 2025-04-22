'use strict';
import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 8,
  },

  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222", 
    marginBottom: 16,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
    color: "#333",
    textAlign: "left",
    marginVertical: 6,
  },
  linkText: {
    fontSize: 16,
    color: "#007BFF", 
    textDecorationLine: "underline",
  },

  mainButton: {
    backgroundColor: "#1E88E5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3,
  },
  mainButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#EEE",
    borderWidth: 1,
    borderColor: "#1E88E5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#1E88E5",
    fontSize: 16,
    fontWeight: "600",
  },
  disabledButton: {
    backgroundColor: "#CCC",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },

  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    alignSelf: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', 
  },
  modalView: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#111",
    marginBottom: 15,
    textAlign: 'center',
  },

  input: {
    height: 50,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: "#FFF",
    color: "#000",
  },
  inputFocused: {
    borderColor: "#1E88E5",
    borderWidth: 2,
  },
  errorText: {
    color: "#D32F2F",
    fontSize: 14,
    marginTop: 5,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#1E88E5",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 16,
    color: "#444",
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginVertical: 12,
  },

  navbarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#1E88E5",
  },

  modalContent: {
    backgroundColor: "#FFF",
    width: "85%",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  navBar: {
    position: "absolute",
    width: "100%",
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "#FFFFFF",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  navText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E88E5",
  },

  content: {
    flex: 1,
    paddingTop: 80,
  },

  reviewsContainer: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  reviewsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E88E5",
    marginBottom: 20,
    textAlign: "center",
  },
  reviewCard: {
    backgroundColor: "#FAFAFA",
    padding: 18,
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  reviewText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },

  footerContainer: {
    width: '100%',
    backgroundColor: "#F0F0F0",
    paddingVertical: 40,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  footerText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
    textAlign: 'center',
  },
  footerLinks: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  footerLink: {
    fontSize: 14,
    color: "#1E88E5",
    textDecorationLine: "underline",
  },
});
