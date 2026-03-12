# Diário de Bordo (PWA)

Aplicativo Web Progressivo (PWA) para registro de atividades diárias.  
Funciona **offline**, permite **instalação na tela inicial** e mantém os dados salvos no **localStorage**.

---

## 🎯 Objetivo
O Diário de Bordo foi desenvolvido para:
- Registrar atividades com título, descrição e data.
- Listar e remover entradas.
- Funcionar offline via Service Worker.
- Ser instalável como PWA em dispositivos móveis e desktops.

---

## 🚀 Tecnologias
- **HTML5**: interface única (`index.html`).
- **CSS3**: responsividade e estilo.
- **JavaScript**: lógica de entradas e persistência.
- **localStorage**: armazenamento dos dados.
- **Service Worker**: cache e suporte offline.
- **Manifest.json**: configuração PWA (ícones, cores, nome).

---

## ⚙️ Como rodar localmente no Live Server do VScode  ou...

### Usando http-server 
```bash
npm install -g http-server
http-server -c-1
