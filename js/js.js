/*

  // transtions are possible in the future
window.transitionToPage = function(href) {
          document.querySelector('body').style.opacity = 0
          setTimeout(function() { 
              window.location.href = href
          }, 2300)
      }
      document.addEventListener('DOMContentLoaded', function(event) {
          document.querySelector('body').style.opacity = 1
      })

*/



// my navigation for the menu when using mobile or 1000 px or less
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}




/*----------------------------------------- mobile design-----------------------------------------*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // goes through list of keywords
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
  }
  
  
  const data = [{
        keywords: ['*', 'manager', 'boss', 'employee'],
        text: 'What make a good Employee',
        link: 'trainings/manager.html'
    },
    {
        keywords: ['*', 'finances', 'money', 'cash'],
        text: 'Finances',
        link: 'trainings/finances.html'
    },
    {
        keywords: ['*', 'med', 'drug', 'pills'],
        text: 'Medications',
        link: 'trainings/Medication.html'
    },
    {
        keywords: ['*', 'car', 'vi', 'cars'],
        text: 'General Car',
        link: 'trainings/TrainingCar.html'
    },
    {
        keywords: ['*', 'info', 'emergancy', 'client'],
        text: 'Emergancy Info',
        link: 'trainings/trainingEE.html'
    },
    {
        keywords: ['*', 'health', 'general', 'rights'],
        text: 'General Health & Rights',
        link: 'trainings/trainingGH.html'
    },
    {
        keywords: ['*', 'PBSP', 'behavior', 'log'],
        text: 'Handling Behaviors',
        link: 'trainings/trainingHB.html'
    },
    {
        keywords: ['*', 'log', 'doc', 'APS'],
        text: 'Documentation',
        link: 'trainings/trainingLog.html'
    }
  ];
  // this function is for search bar filter
  function searchFilter() {
    const input = document.getElementById('search').value.toLowerCase();// gets search value and puts it as lower case
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  // links for the search bar below
    if (input === '') return;
    for (const item of data) {
        for (const keyword of item.keywords) {
            if (keyword.includes(input)) {
                const link = document.createElement('a');
                link.href = item.link;
                link.textContent = item.text;
                resultsDiv.appendChild(link);
                resultsDiv.appendChild(document.createElement('br'));
                break;
            }
        }
    }
  }










  
  
// -------------------------- not used 
    /* sreen changer code is planned for the future. Use in desktop mode*/
    function changeColor() {
        var body = document.querySelector('body');
        var button = document.querySelector('button');
        if (body.style.backgroundColor === 'white') {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
            button.innerHTML = 'Change Back';
        } else {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
            button.innerHTML = 'Change Color';
        }
      }




