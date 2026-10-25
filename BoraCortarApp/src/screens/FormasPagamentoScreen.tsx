import React from "react";
import { Text, View } from "react-native";
import { ItemInformacao } from "@/components/Conta/ItemInformacao";
import { TelaConta } from "@/components/Conta/TelaConta";
import { FORMAS_PAGAMENTO } from "@/constants/Conta/conteudo";
import { contaScreenStyles as styles } from "@/styles/Conta/contaScreens.styles";
 
export default function FormasPagamentoScreen() {
  return (
    <TelaConta titulo="Formas de pagamento">
      <Text style={styles.nota}>
        No BoraCortar o pagamento é feito diretamente na barbearia, depois do atendimento. Estas são as
        formas mais comuns:
      </Text>
 
      <View style={[styles.lista, styles.notaSecao]}>
        {FORMAS_PAGAMENTO.map((forma, indice) => (
          <ItemInformacao
            key={forma.titulo}
            icone={forma.icone}
            titulo={forma.titulo}
            descricao={forma.descricao}
            ultimo={indice === FORMAS_PAGAMENTO.length - 1}
          />
        ))}
      </View>
 
      <Text style={[styles.nota, styles.notaSecao]}>
        Cada barbearia define o que aceita. Em caso de dúvida, confirme com ela antes de ir.
      </Text>
    </TelaConta>
  );
}