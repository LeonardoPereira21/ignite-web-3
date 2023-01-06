import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transacao</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descricao" required />
          <input type="number" placeholder="Preco" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
