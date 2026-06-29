import { auth } from "./firebase-config.js";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { traduzirErro } from "./mensagens.js";

// Seletores de Interface
const screens = {
  login: document.getElementById('screen-login'),
  register: document.getElementById('screen-register'),
  dashboard: document.getElementById('screen-dashboard')
};

// Função para trocar de tela (SPA)
function navigateTo(screenName) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[screenName].classList.add('active');
}

// Ouvir estado do Usuário (Firebase)
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById('user-email').textContent = user.email;
    navigateTo('dashboard');
  } else {
    navigateTo('login');
  }
});

// Lógica de Login
document.getElementById('form-login').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const senha = document.getElementById('login-senha').value;
  const msgDiv = document.getElementById('msg-login');

  try {
    await signInWithEmailAndPassword(auth, email, senha);
  } catch (err) {
    msgDiv.textContent = traduzirErro(err.code);
    msgDiv.style.display = 'block';
  }
});

// Lógica de Cadastro
document.getElementById('form-register').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('reg-email').value;
  const senha = document.getElementById('reg-senha').value;
  const msgDiv = document.getElementById('msg-register');

  try {
    await createUserWithEmailAndPassword(auth, email, senha);
  } catch (err) {
    msgDiv.textContent = traduzirErro(err.code);
    msgDiv.style.display = 'block';
  }
});

// Logout
document.getElementById('btn-logout').addEventListener('click', () => signOut(auth));

// Navegação entre formulários
document.getElementById('go-to-register').onclick = () => navigateTo('register');
document.getElementById('go-to-login').onclick = () => navigateTo('login');