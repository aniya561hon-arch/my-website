function addHomework() {
    let subject = document.getElementById("subject").value;
    let homework = document.getElementById("homework").value;
    let duedate = document.getElementById("duedate").value;

    if(subject && homework && duedate) {
        let table = document.getElementById("homeworkTable");
        let row = table.insertRow();
        row.insertCell(0).innerText = subject;
        row.insertCell(1).innerText = homework;
        row.insertCell(2).innerText = duedate;

        let statusCell = row.insertCell(3);
        let doneButton = document.createElement("button");
        doneButton.innerText = "Mark Complete";
        doneButton.onclick = function() {
            row.classList.add("completed");
        }
        statusCell.appendChild(doneButton);

        // Clear inputs
        document.getElementById("subject").value = "";
        document.getElementById("homework").value = "";
        document.getElementById("duedate").value = "";

        alert("Homework added! Reminder set for " + duedate);
    } else {
        alert("Please fill all fields!");
    }
}

// Library Search
function searchBooks() {
    let input = document.getElementById("searchBook").value.toUpperCase();
    let table = document.getElementById("libraryTable");
    let tr = table.getElementsByTagName("tr");

    for(let i=1; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let txt = td.textContent || td.innerText;
            tr[i].style.display = txt.toUpperCase().indexOf(input) > -1 ? "" : "none";
        }
    }
}

// Event Filter by Month
function showEvents() {
    let month = document.getElementById("eventMonth").value;
    let table = document.getElementById("eventTable");
    let tr = table.getElementsByTagName("tr");

    for(let i=1; i<tr.length; i++){
        let date = tr[i].getElementsByTagName("td")[0].innerText;
        tr[i].style.display = date.startsWith(month) ? "" : "none";
    }
}
C:\Users\AL SAMAD TRADERS\Desktop\aniya akbar school project 1\index.html