import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: 220,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  lista: {
    marginTop: 20,
    width: "100%",
  },
  itemGasto: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  textoGasto: {
    flex: 1,
    fontSize: 16,
    color: "#444",
  },
  totalContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0ffe0",
    borderRadius: 8,
  },
  totalTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d6a4f",
  },
});

export default styles;
