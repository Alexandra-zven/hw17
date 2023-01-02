
let data = [];

function save_travel(){
    let tempdata = {};
    let city = document.getElementById("city").value
    let country = document.getElementById("country").value
    let budget = document.getElementById("budget").value
    let datestart = document.getElementById("datestart").value;
    let dateend = document.getElementById("dateend").value;
    let persons = document.getElementById("persons_quantity").value;
    let transfer = document.getElementById("transfer_type").value;
        tempdata = {
            city: city,
            country: country,
            budget: budget,
            datestart: datestart,
            dateend: dateend,
            persons: persons,
            transfer: transfer
        };
        data.push(tempdata);
        travelhistory();
}

function travelhistory(){
    document.getElementById("result").innerHTML = "";
    data.map((el, index) =>
    {
        document.getElementById("result").innerHTML +=
        "<div class='one_travel'>" + "<h2 class='from_to_where'>" + "From Haifa to " + el.city
        + "<div class='images'>"
        + `<img id='img_edit' src='./images/edit.png' alt='edit'>`
        + `<img id='img_delete' onclick='deleteElement(${index})' src='./images/delete.png' alt='delete'>`
        + `<img id='img_more' src='./images/points.png' alt='more'>`
        + "</div>"
        + "</h2>" +
    "Expected budget: " + el.budget + " ILS" + "<br>"
    + el.datestart + " - " + el.dateend + " | " + el.persons + " persons" + " | " + el.transfer + "</div>"})
}

function deleteElement(index){
    data.splice(index,1);
    travelhistory();
}
