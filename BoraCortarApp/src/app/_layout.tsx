import { Ionicons } from "@expo/vector-icons"; // importa o conjunto de ícones
import { Tabs } from "expo-router";

export default function TabsLayout() {
  // cria o layout das abas
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // esconde o cabeçalho padrão
      }}
    >
      <Tabs.Screen
        name="index" // rota da tela inicial
        options={{
          title: "Início", // texto exibido na aba
          tabBarIcon: (
            { color, size }, // define o ícone da aba
          ) => (
            <Ionicons name="home-outline" size={size} color={color} /> // ícone de início
          ),
        }}
      />

      <Tabs.Screen
        name="calendario" // rota da tela de calendário
        options={{
          title: "Calendário", // texto exibido na aba
          tabBarIcon: (
            { color, size }, // define o ícone da aba
          ) => (
            <Ionicons name="calendar-outline" size={size} color={color} /> // ícone de calendário
          ),
        }}
      />

      <Tabs.Screen
        name="configuracoes" // rota da tela de configurações
        options={{
          title: "Configurações", // texto exibido na aba
          tabBarIcon: (
            { color, size }, // define o ícone da aba
          ) => (
            <Ionicons name="settings-outline" size={size} color={color} /> // ícone de configurações
          ),
        }}
      />
    </Tabs>
  );
}


