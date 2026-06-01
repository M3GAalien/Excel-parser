const row = {
    accountID,
    address,
    time
};

function validateForm(){
    const x = document.forms['excelData']['data'].value;
    const result = document.getElementById("result");
    if(x == ""){
        alert("aint notin in here");
        return false;
    }

    x.split("\n");
    x.forEach(processValues());
}

function processValues(row){
    // open account in Gaiia

    // convert time to one of three time windows
}