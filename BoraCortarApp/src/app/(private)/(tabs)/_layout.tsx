import { Ionicons } from "@expo/vector-icons"; // importa o conjunto de ícones
import { Tabs } from "expo-router";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../../contexts/AuthContext";


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
        name="  Explorar" // rota da tela inicial
        options={{
          title: "Explorar", // texto exibido na aba
          tabBarIcon: (
            { color, size }, // define o ícone da aba
          ) => (
            <Ionicons name="search-outline" size={size} color={color} /> // ícone de busca
          ),
        }}
      />

      <Tabs.Screen
        name="Agendamentos" // rota da tela de Agendementos
        options={{
          title: "Agendamentos", // texto exibido na aba
          tabBarIcon: (
            { color, size }, // define o ícone da aba
          ) => (
            <Ionicons name="calendar-outline" size={size} color={color} /> // ícone de calendário
          ),
        }}
      />

      <Tabs.Screen
        name="Perfil" // rota da tela de perfil
        options={{
          title: "Perfil", // texto exibido na aba
          tabBarIcon: (
            { color, size }, // define o ícone da aba
          ) => (
            <Ionicons name="person-outline" size={size} color={color} /> // ícone de perfil
          ),
        }}
      />
    </Tabs>
  );
}


