// test case
entries = ['soap', 'soda', 'spam', 'secret_item', 'a_thing', 'b_thing'];

initializeAutocomplete = (id) => {
    let div = document.createElement('div');
    div.id = 'autocomplete-population';
    document.getElementById(id).insertAdjacentElement('afterend', div);
    populateAutocomplete(entries);

    document.getElementById(id).addEventListener('input', (event) => {
        runAutocomplete(event.target.value);
    });
}

runAutocomplete = (string) => {
    matches = [];
    for (entry in entries) {
        if (entries[entry].indexOf(string) === 0) {
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
        div.innerText = matches[match];
        document.getElementById('autocomplete-population').appendChild(div);
    }
}