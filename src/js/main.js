document.getElementById('signupBtn').addEventListener('click', function () {
    alert('Sign Up functionality coming soon!');
  });
  
  document.getElementById('searchBtn').addEventListener('click', function () {
    const query = document.getElementById('eventSearch').value;
    console.log('Searching for:', query);
    // Call the API function to fetch vendor info here
  });
  
  document.getElementById('budgetForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    // Add budget item to the budget list here
  });
  
  document.getElementById('guestForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const guestName = document.getElementById('guestName').value;
    // Add guest to the guest list here
  });
  