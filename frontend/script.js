// LOGIN PAGE
if (document.querySelector('.loginButton')) {
    document.querySelector('.loginButton').addEventListener('click', () => {
      const username = document.querySelector('.username').value.trim();
      const password = document.querySelector('.password').value.trim();
  
      if (username && password) {
        localStorage.setItem('username', username);
        window.location.href = "dashboard.html";
      } else {
        alert("Please enter both username and password.");
      }
    });
  }
  
  // DASHBOARD PAGE
  if (document.getElementById('welcome-message')) {
    document.body.classList.add('dashboard');
  
    const username = localStorage.getItem('username');
    if (!username) {
      window.location.href = "index.html";
    } else {
      document.getElementById('welcome-message').textContent =
        `Welcome to your dashboard, ${username}!`;
  
      const bankAccounts = [
        "Checking Account",
        "Savings Account",
      ];
  
      const creditCards = [
        "Credit Card #1",
        "Credit Card #2",
      ];
  
      function randomBalance(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
      }
  
      const bankList = document.getElementById('bank-accounts-list');
      bankList.innerHTML = '';
      bankAccounts.forEach(account => {
        const balance = randomBalance(1000, 5000);
        const li = document.createElement('li');
        li.innerHTML = `<span class="account-name">${account}</span>
                        <span class="account-balance">$${balance}</span>`;
        bankList.appendChild(li);
      });
  
      const creditList = document.getElementById('credit-cards-list');
      creditList.innerHTML = '';
      creditCards.forEach(card => {
        const balance = randomBalance(100, 2000);
        const li = document.createElement('li');
        li.innerHTML = `<span class="account-name">${card}</span>
                        <span class="account-balance">Balance: $${balance}</span>`;
        creditList.appendChild(li);
      });
  
      document.getElementById('mobile-deposit-btn').addEventListener('click', () => {
        alert('Mobile Deposit Check clicked! Feature coming soon.');
      });
  
      document.getElementById('send-money-btn').addEventListener('click', () => {
        alert('Send Money clicked! Feature coming soon.');
      });
  
      document.getElementById('logout-button').addEventListener('click', () => {
        localStorage.removeItem('username');
        window.location.href = "index.html";
      });
    }
  }
  