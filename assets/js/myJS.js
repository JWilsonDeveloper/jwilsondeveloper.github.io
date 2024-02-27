// Translation mappings
const translationMap = {
    'a': 'a.svg',
    'b': 'b.svg',
    'c': 'c.svg',
    'd': 'd.svg',
    'e': 'e.svg',
    'f': 'f.svg',
    'g': 'g.svg',
    'h': 'h.svg',
    'i': 'i.svg',
    'j': 'j.svg',
    'k': 'k.svg',
    'l': 'l.svg',
    'm': 'm.svg',
    'n': 'n.svg',
    'o': 'o.svg',
    'p': 'p.svg',
    'q': 'q.svg',
    'r': 'r.svg',
    's': 's.svg',
    't': 't.svg',
    'u': 'u.svg',
    'v': 'v.svg',
    'w': 'w.svg',
    'x': 'x.svg',
    'y': 'y.svg',
    'z': 'z.svg',
    'A': 'a-cap.svg',
    'B': 'b-cap.svg',
    'C': 'c-cap.svg',
    'D': 'd-cap.svg',
    'E': 'e-cap.svg',
    'F': 'f-cap.svg',
    'G': 'g-cap.svg',
    'H': 'h-cap.svg',
    'I': 'i-cap.svg',
    'J': 'j-cap.svg',
    'K': 'k-cap.svg',
    'L': 'l-cap.svg',
    'M': 'm-cap.svg',
    'N': 'n-cap.svg',
    'O': 'o-cap.svg',
    'P': 'p-cap.svg',
    'Q': 'q-cap.svg',
    'R': 'r-cap.svg',
    'S': 's-cap.svg',
    'T': 't-cap.svg',
    'U': 'u-cap.svg',
    'V': 'v-cap.svg',
    'W': 'w-cap.svg',
    'X': 'x-cap.svg',
    'Y': 'y-cap.svg',
    'Z': 'z-cap.svg',
    '.': 'period.svg',
    ',': 'comma.svg',
    '?': 'question.svg',
    '!': 'exclamation.svg',
    ':': 'colon.svg',
    "'": 'apostrophe.svg',
    ' ': 'blank.svg'
};

const reverseTranslationMap = {
    'a.svg': 'a',
    'b.svg': 'b',
    'c.svg': 'c',
    'd.svg': 'd',
    'e.svg': 'e',
    'f.svg': 'f',
    'g.svg': 'g',
    'h.svg': 'h',
    'i.svg': 'i',
    'j.svg': 'j',
    'k.svg': 'k',
    'l.svg': 'l',
    'm.svg': 'm',
    'n.svg': 'n',
    'o.svg': 'o',
    'p.svg': 'p',
    'q.svg': 'q',
    'r.svg': 'r',
    's.svg': 's',
    't.svg': 't',
    'u.svg': 'u',
    'v.svg': 'v',
    'w.svg': 'w',
    'x.svg': 'x',
    'y.svg': 'y',
    'z.svg': 'z',
    'a-cap.svg': 'A',
    'b-cap.svg': 'B',
    'c-cap.svg': 'C',
    'd-cap.svg': 'D',
    'e-cap.svg': 'E',
    'f-cap.svg': 'F',
    'g-cap.svg': 'G',
    'h-cap.svg': 'H',
    'i-cap.svg': 'I',
    'j-cap.svg': 'J',
    'k-cap.svg': 'K',
    'l-cap.svg': 'L',
    'm-cap.svg': 'M',
    'n-cap.svg': 'N',
    'o-cap.svg': 'O',
    'p-cap.svg': 'P',
    'q-cap.svg': 'Q',
    'r-cap.svg': 'R',
    's-cap.svg': 'S',
    't-cap.svg': 'T',
    'u-cap.svg': 'U',
    'v-cap.svg': 'V',
    'w-cap.svg': 'W',
    'x-cap.svg': 'X',
    'y-cap.svg': 'Y',
    'z-cap.svg': 'Z',
    'period.svg': '.',
    'comma.svg': ',',
    'question.svg': '?',
    'exclamation.svg': '!',
    'colon.svg': ':',
    'apostrophe.svg': "'",
    'blank.svg': ' '
};

function showOverlay() {
    // Get the overlay div
    var overlay = document.getElementById('overlay')
    overlay.id = 'overlay';
    overlay.textContent = 'This is the overlay!';

    // Display the overlay
    overlay.style.display = 'block';
}


function addText(text) {
    // Get the overlay div
    var greetingContainer = document.getElementById('greeting');
    var greetingReflection = document.getElementById('greeting-reflection');

    CreateSymbolContainers(greetingReflection, 3, 0, 3);
    
    var newSymbolContainers = document.getElementsByClassName('new-symbol-container');
    
    // Create a new container for the text
    var textContainer = document.createElement('div');
    textContainer.classList.add('text-container')
    textContainer.classList.add('new-text-container'); // Add a class for styling if needed
    greetingContainer.appendChild(textContainer); // Append the text container to the greeting container
    
    // Set the initial text content
    textContainer.textContent = '';

    // Start adding letters
    addLetter(0, text, textContainer, newSymbolContainers);
}

// Function to add a letter to the overlay
function addLetter(letterIndex, text, textContainer, newSymbolContainers) {
    // Check if all letters are added
    if (letterIndex < text.length) {
        // Add the next letter to the text container
        textContainer.textContent += text.charAt(letterIndex);

        // Iterate through all elements with the class 'new-symbol-container'
        for (var i = 0; i < newSymbolContainers.length; i++) {
            var symbolContainer = newSymbolContainers[i];

            // Add the corresponding image to symbolContainer
            // Use the loadImageAndAddToContainer function for image loading
            loadImageAndAddToContainer(text.charAt(letterIndex), symbolContainer, i);
        }

        // Increment the letter index
        letterIndex++;

        // Schedule the next letter after 0.1 seconds
        setTimeout(function() {
            addLetter(letterIndex, text, textContainer, newSymbolContainers);
        }, 50);
    }
}

function loadImageAndAddToContainer(char, symbolContainer, index) {
    var img = new Image();
    var folder;

    switch (index % 10) {
        case 0:
            folder = "symbols7f7fd5";
            break;
        case 1:
            folder = "symbols8394d8";
            break;
        case 2:
            folder = "symbols86aadb";
            break;
        case 3:
            folder = "symbols8abfde";
            break;
        case 4:
            folder = "symbols8dd5e1";
            break;
        case 5:
            folder = "symbols91eae4";
            break;
        default:
            folder = "symbols7f7fd5";
            break;
    }

    img.src = "./" + folder + "/" + translationMap[char];
    img.onload = function () {
        img.alt = char;
        img.style.width = img.naturalWidth * 2;
        img.style.filter = 'blur(2px)';

        // Check if the symbolContainer is still in the document
        if (Array.from(document.getElementsByClassName('new-symbol-container')).indexOf(symbolContainer) !== -1) {
            symbolContainer.appendChild(img);
        }
    };
}

function moveOldText()
{
    // Mark text containers as old
    var newTextContainers = document.getElementsByClassName('new-text-container');
    for (var i = newTextContainers.length - 1; i >= 0; i--) {
        var newTextContainer = newTextContainers[i];
        newTextContainer.classList.add('old-text-container');
        newTextContainer.classList.remove('new-text-container');
    }
    // Move old text containers down
    var oldTextContainers = document.getElementsByClassName('old-text-container');
    for (var i = 0; i < oldTextContainers.length; i++) {
        var oldTextContainer = oldTextContainers[i];
        //oldTextContainer.style.transition = 'all 1s ease'; // Set transition property
        oldTextContainer.style.transform = 'translateY(-250%)'; // Apply the transform immediately
        // Add a class for fading out
        oldTextContainer.classList.add('fade-out');

        // Apply the opacity immediately
        oldTextContainer.style.opacity = '0';
    }
    // Remove old text containers
    setTimeout(function () {
        for(var i = oldTextContainers.length - 1; i >= 0; i--)
        {
            oldTextContainers[i].remove();
        }
      }, 1000);
}



function moveOldSymbols(){
    // Mark symbol containers as old
    var newSymbolContainers = document.getElementsByClassName('new-symbol-container');
    for (var i = newSymbolContainers.length - 1; i >= 0; i--) {
        var newSymbolContainer = newSymbolContainers[i];
        newSymbolContainer.classList.add('old-symbol-container');
        newSymbolContainer.classList.remove('new-symbol-container');
    }
    // Move old symbol containers down
    var oldSymbolContainers = document.getElementsByClassName('old-symbol-container');
    for (var i = 0; i < oldSymbolContainers.length; i++) {
        var oldSymbolContainer = oldSymbolContainers[i];
        oldSymbolContainer.style.transform = 'translateY(250%)'; // Apply the transform
        oldSymbolContainer.style.opacity = '0'; // Apply the opacity
    }
    // Remove old symbol containers
    setTimeout(function () {
        for(var i = oldSymbolContainers.length - 1; i >= 0; i--)
        {
            oldSymbolContainers[i].remove();
        }
      }, 1000);
}

function CreateSymbolContainers(targetContainer, numContainersToAdd, numExistingContainers, leftFactor){
    // Create and append the symbol containers
    for (i = numExistingContainers; i < numContainersToAdd + numExistingContainers; i++) {
        var symbolContainer = document.createElement('div');
        symbolContainer.classList.add('symbol-container' + i);
        symbolContainer.style.top = i*25 + '%';
        symbolContainer.style.left = (i*leftFactor) + 'vw';
        //var calcOpacity = (100 / (2 **(i % 3))) + '%';
        var calcOpacity = (100 - 25*(i % 3)) + '%';
        symbolContainer.style.opacity = calcOpacity;
        symbolContainer.classList.add('new-symbol-container');
        symbolContainer.classList.add('symbol-container');
        targetContainer.appendChild(symbolContainer);
    }
}

function GetName() {
    // Create a new input element
    var textField = document.createElement("input");

    // Set attributes for the input element
    textField.type = "text";
    textField.placeholder = "Type in your name and press Enter...";
    textField.maxLength = "100";
    textField.setAttribute("id", "editableTextField");

    // Get the reference to the container by its id
    var container = document.getElementById("greeting");

    // Append the input element to the container
    container.appendChild(textField);

    var greetingReflection = document.getElementById('greeting-reflection');

    CreateSymbolContainers(greetingReflection, 3, 0, 3);

    textField.select();

     // Add an event listener for the 'input' event
    textField.addEventListener('input', function (event) {
        var symbolContainers = document.getElementsByClassName('new-symbol-container');
        enteredName = event.target.value;

        // Clear content of each symbolContainer
        for (var j = 0; j < symbolContainers.length; j++) {
            symbolContainers[j].innerHTML = '';
        }

        // Add new content to symbolContainers
        for (var i = 0; i < enteredName.length; i++) {
            for (var j = 0; j < symbolContainers.length; j++) {
                loadImageAndAddToContainer(enteredName.charAt(i), symbolContainers[j], j);
            }
        }
    });

    // Add an event listener for the 'keydown' event
    textField.addEventListener('keydown', function (event) {
        // Check if the pressed key is "Enter" (key code 13)
        if (event.key === 'Enter') {
            textField.classList.add(('new-text-container'));
            moveOldText();
            moveOldSymbols();
            setTimeout(function(){loadMainPage()}, 1000);
        }
    });
}

function loadMainPage(){
    setNameField(enteredName);
    addNameToSummary(enteredName);
    var content = document.getElementById('content');
    content.style.transition = 'opacity 1s ease-in 0s';
    content.style.opacity = '1';
    
    var overlay = document.getElementById('overlay');
    overlay.style.zIndex = -1;         
}

function setNameField(name) {
    // Find Name field in form and add user input
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.value = name;
    }
}

function addNameToSummary(name) {
    // Find the summary container and add a greeting paragraph element
    const summary = document.getElementById('summary');
    if (summary) {
        const firstParagraph = summary.querySelector('p');
        if (firstParagraph) {
            let newParagraph = firstParagraph.cloneNode(true);
            newParagraph.textContent = `Hello, ${name}!`;
            summary.insertBefore(newParagraph, firstParagraph);
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var time = 500;
    var string1 = "Hi! I\'m James!";
    var string2 = "What\'s your name?"

    setTimeout(function () {
      addText(string1);
    }, time);

    time += 100 + (50 * string1.length)
    setTimeout(function () {
        moveOldText();
        moveOldSymbols();
      }, time);
      
    time += 300;
    setTimeout(function () {
        addText(string2);
      }, time);

    time += 100 + (50 * string2.length)
    setTimeout(function () {
        moveOldText();
        moveOldSymbols();
    }, time);

    time += 300;
    setTimeout(function () {
        GetName();
    }, time);
  });

  var enteredName;