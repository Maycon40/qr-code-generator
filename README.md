# Gerador de QR code

Este projeto é um **gerador de QR code** desenvolvido em **Next JS** com **Tailwind CSS**.  
Ele permite gerar um QR code customizado com a cor, imagem, cor de fundo e tamanho que você escolher. Também tem a opção de baixar um arquivo com o QR code gerado

---

## Tecnologias usadas

- **Next JS** – Servidor web.
- **API Rest** – API pública para consultar informações.
- **qrcode.react** – Responsável por gerar o QR code.
- **Tailwind CSS** - Usado para estilizar a página.

---

## Versão online do projeto:
Caso você queira ver o projeto em execução de forma mais rápida e facíl acesse o link: https://qrcode.maycon.dev.br/

## Requerimentos

- **Node.js** – A partir da versão 22.
- **npm** – A partir da versão 10.

---

## Passo a passo para rodar localmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Maycon40/qr-code-generator.git
cd qr-code-generator
```

### 2️⃣ Instalar as dependências

```bash
npm i
```

### 3️⃣ Subir o servidor web

```bash
npm run dev
```

---

## Endpoints da API

### 1️⃣ Status do serviço

`GET /api/v1/status`

**Resposta**

```json
{
  "updated_at": "2025-10-13T18:41:27.131Z",
  "web_service": {
    "status": "online",
    "detail": "HTTPS 200",
    "version": "v22.18.0"
  }
}
```
