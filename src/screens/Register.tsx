import { VStack } from "native-base";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova Solicitação" />

      <Input placeholder="Número do partrimônio" mt={4} />
      <Input
        placeholder="Descrição do problema"
        mt={5}
        flex={1}
        multiline
        textAlignVertical="top"
      />

      <Button title="Cadastrar" mt={5} />
    </VStack>
  );
}
