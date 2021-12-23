//Function for carousal scroll in group cards
// let scrollPosition = 0;
let cards = document.getElementsByClassName('groups-card');

function slide(direction){
    let container = document.getElementById('groups-cards-container');
    console.log(container.scrollWidth, cards.length)
    let scrollsize = (+container.scrollWidth + 10) / +cards.length;
    scrollCompleted = 0;
    let slideVar = setInterval(function(){
        if(direction == 'left'){
            container.scrollLeft -= scrollsize;
        } else {
            container.scrollLeft += scrollsize;
        }
        scrollCompleted += scrollsize;
        if(scrollCompleted >= 100){
            window.clearInterval(slideVar);
        }
    }, 50);

    // console.log(cards);
    // if (scrollPosition >= 0 && scrollPosition < cards.length ) {
    //     if (direction== 'left' && scrollPosition != 0) {
    //         cards[scrollPosition-1].scrollIntoView(false);
    //         scrollPosition = scrollPosition-1;
    //     } else if (direction== 'right' && scrollPosition != cards.length - 1){
    //         cards[scrollPosition+1].scrollIntoView(false);
    //         scrollPosition = scrollPosition+1;
    //     }
    // }


    // cards[1].scrollIntoView(false);

    
}


function activateNavbar (){
    let navbar = document.getElementById('navbar');
    let content = document.getElementById('content-container');
    navbar.classList.toggle("active");
    content.classList.toggle('deactive')
}


let groupName = document.getElementsByClassName('groups-table-2-group-name-text');
let groupOwner = document.getElementsByClassName('groups-table-2-group-owner');
let groupDate = document.getElementsByClassName('groups-table-2-group-date');
let clickName = 0;
let clickOwner = 0;
let clickDate = 0;


//sorting function for Name
function sortingName () {
    clickName++;
    let nameArr = [], ownerArr = [], dateArr = [], copyNameArr = [] ;
    for (let k = 0; k < groupName.length; k++) {
        nameArr.push(groupName[k].innerText);
        copyNameArr.push(groupName[k].innerText);
        ownerArr.push(groupOwner[k].innerText);
        dateArr.push(groupDate[k].innerText);
    }
    let sortedNameArr = [];
    if (clickName % 2 != 0) {
        sortedNameArr = nameArr.sort();
    } else {
        sortedNameArr = nameArr.sort().reverse();
    }
    let sortedOwnerArr = [], sortedDateArr = [];
    for (let i = 0; i < sortedNameArr.length; i++) {
        for (let j = 0; j < copyNameArr.length; j++) {
            if (sortedNameArr[i] === copyNameArr[j]) {
                sortedOwnerArr[i] = ownerArr[j];
                sortedDateArr[i] = dateArr[j];
                break;
            }
        }

        for (let m = 0; m < sortedNameArr.length; m++) {
            let element = document.getElementById(`${m}`);
            element.innerHTML = `<div class="groups-table-2-group">
            <input type="checkbox" name="check-box" id="check-box-1">
            <div class="groups-table-2-group-name">
              <img src="./images/Group_icon.png" class="user-group-icon" alt="user-group-icon">
              <p class="groups-table-2-group-name-text">${sortedNameArr[m]}</p>
            </div>
          </div>
          <div class="groups-table-2-group-owner-name">
            <img src="./images/Multiple.png" class="user-icon" alt="user-icon">
          <p class="groups-table-2-group-owner">${sortedOwnerArr[m]}</p>
          </div>
          <p class="groups-table-2-group-date">${sortedDateArr[m]}</p>
          <p class="groups-table-2-btn"><button class="join-group-btn">+ Join</button></p>`;
        }
    }

}

//sorting function for Owner
function sortingOwner () {
    clickOwner++;
    let nameArr = [], ownerArr = [], dateArr = [], copyOwnerArr = [] ;
    for (let k = 0; k < groupOwner.length; k++) {
        nameArr.push(groupName[k].innerText);
        ownerArr.push(groupOwner[k].innerText);
        copyOwnerArr.push(groupOwner[k].innerText);
        dateArr.push(groupDate[k].innerText);
    }
    let sortedOwnerArr = [];
    if (clickOwner % 2 != 0) {
        sortedOwnerArr = ownerArr.sort();
    } else {
        sortedOwnerArr = ownerArr.sort().reverse();
    }
    let sortedNameArr = [], sortedDateArr = [];
    for (let i = 0; i < sortedOwnerArr.length; i++) {
        for (let j = 0; j < copyOwnerArr.length; j++) {
            if (sortedOwnerArr[i] === copyOwnerArr[j]) {
                sortedNameArr[i] = nameArr[j];
                sortedDateArr[i] = dateArr[j];
                break;
            }
        }

        for (let m = 0; m < sortedOwnerArr.length; m++) {
            let element = document.getElementById(`${m}`);
            element.innerHTML = `<div class="groups-table-2-group">
            <input type="checkbox" name="check-box" id="check-box-1">
            <div class="groups-table-2-group-name">
              <img src="./images/Group_icon.png" class="user-group-icon" alt="user-group-icon">
              <p class="groups-table-2-group-name-text">${sortedNameArr[m]}</p>
            </div>
          </div>
          <div class="groups-table-2-group-owner-name">
            <img src="./images/Multiple.png" class="user-icon" alt="user-icon">
          <p class="groups-table-2-group-owner">${sortedOwnerArr[m]}</p>
          </div>
          <p class="groups-table-2-group-date">${sortedDateArr[m]}</p>
          <p class="groups-table-2-btn"><button class="join-group-btn">+ Join</button></p>`;
        }
    }

}


//sorting function for Date
function sortingDate () {
    clickDate++;
    let nameArr = [], ownerArr = [], dateArr = [], copyDateArr = [] ;
    for (let k = 0; k < groupDate.length; k++) {
        nameArr.push(groupName[k].innerText);
        ownerArr.push(groupOwner[k].innerText);
        dateArr.push(groupDate[k].innerText);
        copyDateArr.push(groupDate[k].innerText);
    }
    let sortedDateArr = [];
    if (clickDate % 2 != 0) {
        sortedDateArr = dateArr.sort();
    } else {
        sortedDateArr = dateArr.sort().reverse();
    }
    let sortedNameArr = [], sortedOwnerArr = [];
    for (let i = 0; i < sortedDateArr.length; i++) {
        for (let j = 0; j < copyDateArr.length; j++) {
            if (sortedDateArr[i] === copyDateArr[j]) {
                sortedNameArr[i] = nameArr[j];
                sortedOwnerArr[i] = ownerArr[j];
                break;
            }
        }

        for (let m = 0; m < sortedDateArr.length; m++) {
            let element = document.getElementById(`${m}`);
            element.innerHTML = `<div class="groups-table-2-group">
            <input type="checkbox" name="check-box" id="check-box-1">
            <div class="groups-table-2-group-name">
              <img src="./images/Group_icon.png" class="user-group-icon" alt="user-group-icon">
              <p class="groups-table-2-group-name-text">${sortedNameArr[m]}</p>
            </div>
          </div>
          <div class="groups-table-2-group-owner-name">
            <img src="./images/Multiple.png" class="user-icon" alt="user-icon">
          <p class="groups-table-2-group-owner">${sortedOwnerArr[m]}</p>
          </div>
          <p class="groups-table-2-group-date">${sortedDateArr[m]}</p>
          <p class="groups-table-2-btn"><button class="join-group-btn">+ Join</button></p>`;
        }
    }

}

// let counter = 0;
//search function 
function searchFn () {
    for (let i=0; i< groupName.length; i++) {
        document.getElementById(i).style.display = "none";
    }

    var input, filter;
    input = document.getElementById("search-field");
    filter = input.value.toUpperCase();

    for (let i=0; i< groupName.length; i++) {
        if (groupName[i].innerText.toUpperCase().includes(filter)) {
            document.getElementById(i).style.display = "";
        }
        if (groupOwner[i].innerText.toUpperCase().includes(filter)) {
            document.getElementById(i).style.display = "";
        }
    }
}

function debounce (fn, d) {
    let timer;
    return function () {
    let context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
            fn.apply(context, args);
        }, d)
    }
}

const debounceForSearch = debounce(searchFn, 300);










//Function for sorting tables
// function sortTable(n) {
//     var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//     table = document.getElementById("groups-bottom-portion");
//     switching = true;
//     //Set the sorting direction to ascending:
//     dir = "asc"; 
//     /*Make a loop that will continue until
//     no switching has been done:*/
//     while (switching) {
//       //start by saying: no switching is done:
//       switching = false;
//       rows = table.rows;
//       /*Loop through all table rows (except the
//       first, which contains table headers):*/
//       for (i = 1; i < (rows.length - 1); i++) {
//         //start by saying there should be no switching:
//         shouldSwitch = false;
//         /*Get the two elements you want to compare,
//         one from current row and one from the next:*/
//         x = rows[i].getElementsByTagName("TD")[n];
//         y = rows[i + 1].getElementsByTagName("TD")[n];
//         /*check if the two rows should switch place,
//         based on the direction, asc or desc:*/
//         if (dir == "asc") {
//           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//             //if so, mark as a switch and break the loop:
//             shouldSwitch= true;
//             break;
//           }
//         } else if (dir == "desc") {
//           if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//             //if so, mark as a switch and break the loop:
//             shouldSwitch = true;
//             break;
//           }
//         }
//       }
//       if (shouldSwitch) {
//         /*If a switch has been marked, make the switch
//         and mark that a switch has been done:*/
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//         //Each time a switch is done, increase this count by 1:
//         switchcount ++;      
//       } else {
//         /*If no switching has been done AND the direction is "asc",
//         set the direction to "desc" and run the while loop again.*/
//         if (switchcount == 0 && dir == "asc") {
//           dir = "desc";
//           switching = true;
//         }
//       }
//     }
//   }