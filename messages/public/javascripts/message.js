(function () {
    document.addEventListener('DOMContentLoaded', function () {
        displayMassage();
        setInterval(displayMassage, 10*1000);
        document.getElementById("add-message").addEventListener('click', addMessage);

    }, false);

    function addMessage(){
        let message = document.getElementById("message").value;
        if (message == "")return ;
        const obj = {message:message}

        fetch('http://localhost:3000/message/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        }).then(accept =>{
            if(accept.status == 200){

            }
            else {
            }
        });
        displayMassage();
    }

    function displayMassage(){
        fetch('http://localhost:3000/message/display')
            .then(data =>{
                data.json().then(messages =>{
                    for (let message of messages) {
                        addToList(message);
                    }
                })
            })
    }
    function addToList(message){
        let list = document.getElementById("message-list");
        let newM = document.createElement("li");
        newM.className = "list-group-item list-group-item-info";
        newM.innerHTML =  message.name + ": " + message.message;
        list.appendChild(newM);

    }

})();