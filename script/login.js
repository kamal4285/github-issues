document.getElementById('login-btn')
    .addEventListener('click', function(){
        const userName = document.getElementById('username');
        const username = userName.value;
        
        const pinInput = document.getElementById('password');
        const pin = pinInput.value;

        if(username === 'admin' && pin === 'admin123'){
            window.location.assign('all.html');
        }
        else{
            alert('Login Failed');
            return;
        }
    })