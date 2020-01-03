// test case
entries = [{name: 'soap', price: 2}, {name: 'soda', price: 3}, {name: 'spam', price: 99}];

initializeAutocomplete = (id) => {
    let div = document.createElement('div');
    div.id = 'autocomplete-population';
    document.getElementById(id).insertAdjacentElement('afterend', div);
    populateAutocomplete(entries);

    document.getElementById(id).addEventListener('input', (event) => {
        runAutocomplete(event.target.value);
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (document.activeElement.id === id) {
                selectAutocomplete(document.getElementById('autocomplete-population').firstChild.id || null);
            }
        }
    });
}

runAutocomplete = (string) => {
    matches = [];
    for (entry in entries) {
        if (entries[entry].name.indexOf(string) === 0) {
            matches.push(entries[entry]);
        }
    }
    populateAutocomplete(matches);
}

populateAutocomplete = (matches) => {
    let element = document.getElementById('autocomplete-population');
    
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    for (match in matches) {
        let div = document.createElement('div');
        div.innerText = matches[match].name;
        div.id = matches[match].name;
        div.addEventListener('click', (event) => {
            selectAutocomplete(event.target.id);
        });
        document.getElementById('autocomplete-population').appendChild(div);
    }
}

selectAutocomplete = (match) => {
    alert(match)
}
