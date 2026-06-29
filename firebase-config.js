// =============================================================================
// firebase-config.js
// -----------------------------------------------------------------------------
// Este é o ÚNICO lugar onde você cola os dados do SEU projeto Firebase.
// As três telas (login, cadastro e painel) importam o "auth" daqui.
// =============================================================================

// 1) Importamos as funções do SDK do Firebase direto da CDN (versão 12.15.0).
//    - initializeApp -> conecta este código ao seu projeto Firebase
//    - getAuth        -> dá acesso ao serviço de Autenticação
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// 2) COLE AQUI a configuração do SEU projeto (veja o Passo 4 do guia).
//    Esses valores você copia do Console do Firebase ao registrar o app web.
//    Observação: a apiKey NÃO é segredo — pode ficar visível no código.
//    A segurança vem das regras e dos domínios autorizados do Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyBoXweDflyFipiMmboXzbsbbe-nfQUUhE0",
  authDomain: "trabalho01-bef65.firebaseapp.com",
  projectId: "trabalho01-bef65",
  storageBucket: "trabalho01-bef65.firebasestorage.app",
  messagingSenderId: "260231580472",
  appId: "1:260231580472:web:9e1604a0876a3e86a04fcd"
};

// 3) Inicializamos o Firebase e exportamos o "auth" para as telas usarem.
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
