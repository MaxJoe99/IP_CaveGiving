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


/*----------------------------------------- Desktop design-----------------------------------------*/
// Executes the function when the window fully loads
window.onload = function() {
  // Selects the search bar element
  const searchBar = document.querySelector('.searchbar');
  // Selects the result p element
  const result = document.querySelector('.result');
  const keywords = [
      ['employee'],
      ['emergency'],
      ['health'],
      ['behaviors'],
      ['log'],
      ['doc'],
      ['right'],
      ['contact'],
      ['hierarchy']

  ];

  // Input event listener to the search bar
  searchBar.addEventListener('input', function() {
      // Gets and trims the user input and converts it to lowercase  for ease of finding
      const searchText = this.value.trim().toLowerCase();
      let keywordFound = '';

      // Loops through the keyword arrays
      for (let i = 0; i < keywords.length; i++) {
          // Finds the keyword in the current array that contains or equals the user input
          keywordFound = keywords[i].find(kw => kw.includes(searchText));
          // Breaks the loop if keyword is found
          if (keywordFound) break;
      }

      // Checks if a keyword was found
      if (keywordFound && searchText !== '') {
          // Displays the keyword as a link, opening the corresponding HTML document in the iframe
          if (keywordFound == "employee") {
              result.innerHTML = `<a href="trainings/manager.html" target="content">What make a good Employee</a>`;
          }
          if (keywordFound == "emergency") {
              result.innerHTML = `<a href="trainings/trainingEE.html" target="content">Emergency Information </a>`;
          }
          if (keywordFound == "health") {
              result.innerHTML = `<a href="trainings/trainingGH.html" target="content">General Health </a>`;
          }
          if (keywordFound == "behaviors") {
              result.innerHTML = `<a href="trainings/trainingHB.html" target="content">Handling  Behaviors And The Right Response</a>`;
          }
          if (keywordFound == "log" || keywordFound == "doc") {
              result.innerHTML = `<a href="trainings/trainingLog.html" target="content">Documentation</a>`;
          }

          if (keywordFound == "car") {
              result.innerHTML = `<a href="trainings/TrainingCar.html" target="content">Company Car</a>`;
          }



      } else {
          // Clears the result p element if no keyword is found
          result.innerHTML = '';
      }
  });
};

/* sreen changer code is planned for the future. Use in desktop mode
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
*/




