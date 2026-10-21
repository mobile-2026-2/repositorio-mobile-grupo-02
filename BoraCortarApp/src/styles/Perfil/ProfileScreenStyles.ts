import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 32,
  },

  // Título da tela
  screenTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111111",
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  // Cabeçalho com foto, nome e e-mail
  header: {
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 32,
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: 12,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#111111",
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "#111111",
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    color: "#6E6E6E",
    fontSize: 14,
    marginTop: 4,
  },

  // Lista de opções
  optionsList: {
    paddingHorizontal: 20,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  optionIcon: {
    marginRight: 16,
  },
  optionLabel: {
    flex: 1,
    color: "#111111",
    fontSize: 15,
  },

  // Botão de sair
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  logoutLabel: {
    color: "#E74C3C",
    fontSize: 15,
    marginLeft: 16,
  },
});