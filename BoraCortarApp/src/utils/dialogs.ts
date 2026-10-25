import { Alert, Platform } from "react-native";
 
// O Alert.alert do React Native NÃO funciona na web: nada aparece e os botões
// nunca são chamados. Estas funções usam o Alert no celular e as caixas do
// navegador (alert/confirm) na web.
 
/** Aviso simples. `aoFechar` roda depois que o usuário toca em OK. */
export function mostrarAviso(titulo: string, mensagem?: string, aoFechar?: () => void) {
  if (Platform.OS === "web") {
    (globalThis as any).alert(mensagem ? `${titulo}\n\n${mensagem}` : titulo);
    aoFechar?.();
    return;
  }
 
  Alert.alert(titulo, mensagem, [{ text: "OK", onPress: aoFechar }]);
}
 
type Confirmacao = {
  titulo: string;
  mensagem: string;
  textoConfirmar: string;
  destrutivo?: boolean; // botão vermelho no iOS
  aoConfirmar: () => void;
};
 
/** Pergunta "tem certeza?" e só chama `aoConfirmar` se o usuário aceitar. */
export function pedirConfirmacao({
  titulo,
  mensagem,
  textoConfirmar,
  destrutivo = false,
  aoConfirmar,
}: Confirmacao) {
  if (Platform.OS === "web") {
    if ((globalThis as any).confirm(`${titulo}\n\n${mensagem}`)) {
      aoConfirmar();
    }
    return;
  }
 
  Alert.alert(titulo, mensagem, [
    { text: "Voltar", style: "cancel" },
    {
      text: textoConfirmar,
      style: destrutivo ? "destructive" : "default",
      onPress: aoConfirmar,
    },
  ]);
}