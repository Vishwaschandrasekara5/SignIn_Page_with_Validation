function submit() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    var data = new FormData();
    data.append("dataname", name);
    data.append("datapassword", password); 

    var test = new XMLHttpRequest();
    test.onreadystatechange = function () {
        if (test.readyState == 4 && test.status == 200) {
            var response = test.responseText;
            alert(response);
        }
    }

    test.open("POST", "data.php", true);
    test.send(data);
}