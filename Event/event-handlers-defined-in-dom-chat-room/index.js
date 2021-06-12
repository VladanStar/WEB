var chatWindow = document.querySelector('.chat-window');
var msgInput = document.querySelector('.inputField');
var sendButton = document.querySelector('.sendBtn');
msgInput.focus();

function msg() {
    var messageContent = msgInput.value;
    var p = document.createElement('p');
    var text = document.createTextNode(messageContent);

    p.appendChild(text);
    chatWindow.appendChild(p);
    msgInput.value = "";
    msgInput.focus();
}

sendButton.addEventListener('click', function() {
    msg()
});

msgInput.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        msg()
    }
})