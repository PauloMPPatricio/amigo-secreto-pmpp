# 🎉 Amigo Secreto

Um aplicativo interativo para facilitar a organização de sorteios de amigo secreto de maneira intuitiva, prática e divertida! Com um design moderno e responsivo, esta ferramenta permite adicionar amigos, visualizar participantes e realizar o sorteio de maneira automatizada.

---

## 🌟 Destaques do Projeto

- **Cadastro Inteligente**: Adicione participantes com nome, sobrenome e e-mail, garantindo uma experiência organizada.
- **Validação de Dados**: Verificações automáticas para evitar entradas inválidas ou duplicadas.
- **Sorteio Justo e Automatizado**: Garante que ninguém tire a si mesmo e nem que o mesmo participante seja sorteado duas vezes, além de garantir que o sorteio seja bem distribuído.
- **Notificação por E-mail**: Integração com EmailJS para envio dos resultados diretamente aos participantes.
- **Opção de Visualização Manual**: Caso o envio de e-mails não seja utilizado, links personalizados são gerados, podemdo ser encaminhados via e-mail ou whatsApp para cada participante acessar a página do seu resultado.
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível.
- **CSS3**: Estilização moderna, incluindo variáveis CSS e design responsivo.
- **JavaScript (ES6)**: Manipulação do DOM, armazenamento local e implementação da lógica de sorteio.
- **EmailJS**: API utilizada para envio automático dos resultados aos participantes.

---

## 🚀 Funcionalidades

1. **Cadastro de Participantes**:
   - Os usuários podem adicionar nome, sobrenome e e-mail para cada participante.
   - O sistema valida entradas duplicadas e formatos incorretos.
   - Garante que tenha no mínimo 3 participantes para que aconteça o sorteio.
   - Permite exclusão do participante, antes da lista ser finalizada.

2. **Sorteio Automático**:
   - Atribui um amigo secreto para cada participante sem que um participante sorteie ele próprio ou que um participante seja sorteado mais de uma vez, evitando repetições ou erros.
   - Os resultados são armazenados no `localStorage` para acesso posterior.

3. **Notificação dos Participantes**:
   - Opção de envio dos resultados via EmailJS.
   - Alternativamente, links individuais são gerados para cada participante acessar seu amigo secreto.

4. **Interface Intuitiva**:
   - Feedback visual para ações de cadastro, sorteio e exibição de resultados.

---

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/PauloMPPatricio/amigo-secreto-pmpp.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd amigo-secreto-pmpp
   ```

3. Abra o arquivo `index.html` em um navegador.

4. Direto pelo link do GitHub Pages: [App Amigo Secreto](https://paulomppatricio.github.io/amigo-secreto-pmpp)

---

## 📖 Uso Envio Manual / Atomático EmailJS

1. Abra o aplicativo no navegador.
2. Digite os nomes, sobrenomes e e-mails dos participantes nos campos apropriados.
3. Clique no botão "Adicionar" para inserir cada participante na lista.
4. Verifique a lista. Caso haja alguma coisa errada exclua e insira novamente.
5. Quando todos forem cadastrados e tudo estiver correto, clique em "Concluir Lista".
6. Inicie o sorteio clicando em "Realizar Sorteio".

## Envio Manual

Esta e uma função extra, para exibir os links de resultado dos sorteios, onde o organizador poderá optar se a cota de 200 emails mensais etiver atingida. O organizador copiará cada link gerado e enviará para seu respectivo participante cadastrado na lista, por email ou whatsApp. Para utilizar esta função, basta retirar os comentários da linha
55 e comentar a linha 54 do arquivo index.html (para habilitar o botão que irar gerar os links e desabilitar o botaõ de envio por email). No arquivo app.js deverá retirar o comentário das linhas 285 e 308 para habilitar função showResultLinks.

1. Na página de 'Notificação aos Participantes' clique no botão "Exibir Links de Resultado".
2. Copie individualmente cada link, e envie via email ou WhatsApp para seus respectivos participantes.
3. Abra somente o seu link, e Descubra quem é o seu amigo secreto.
4. Após o envio e visualização clique eno botão "Reiniciar App".

## Envio Atomático EmailJS

A conta gratuita EmailJS só posibilita 200 envios de emails mensais caso esta cota seja atingida, as solicitações ao servidor deixarão de ser processadas e serão ignoradas.

1. Na página de 'Notificação aos Participantes' clique no botão "Enviar E-mails".
2. Os e-mails enviados serão confirmados com um "alert" para cada e-mail. Clique em "Ok".
3. Verifique sua caixa de e-mails, se tudo correu bem você e todos participantes receberão os respectivos links para a página do resultado do sorteio, onde consta o nome do respectivo amigo secreto.
4. Após o envio e visualização clique eno botão "Reiniciar App".

---

## 🧪 Testes

### Testes Manuais

- **Cadastro de Participantes**:
  - Teste nomes e e-mails inválidos para garantir que são rejeitados.
  - Insira participantes repetidos para validar o bloqueio de duplicação.

- **Sorteio**:
  - Certifique-se de que cada participante recebe um amigo secreto válido.
  - Verifique se ninguém tira a si mesmo.

- **Notificação**:
  - Teste o envio de e-mails para diferentes endereços.
  - Confirme se os links gerados correspondem aos participantes corretos.

---

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para a sua melhoria:

   ```bash
   git checkout -b minha-melhoria
   ```

3. Commit suas alterações:

   ```bash
   git commit -m "Melhoria na funcionalidade X"
   ```

4. Envie para o repositório remoto:

   ```bash
   git push origin minha-melhoria
   ```

5. Abra um Pull Request para análise.

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 👥 Autor e Referências

- **Paulo Mauricio Pereira Patricio** - Desenvolvedor do projeto.
- Desafio Challenge do Programa ONE - Oracle Next Educations (Grupo 8).
- Inspirado na tradição do amigo secreto para criar uma experiência digital interativa.

---

## 📩 Contato

Caso tenha dúvidas ou sugestões, entre em contato:

- **Email**: [paulompatricio@gmail.com](paulompatricio@gmail.com)
- **LinkedIn**: [Perfil - Paulo Patricio](https://www.linkedin.com/in/paulomppatricio/)
