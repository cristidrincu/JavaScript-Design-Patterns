function handleLogin() {
    console.log('A user is trying to log in!');
}

publisher.on('login.complete', handleLogin);
