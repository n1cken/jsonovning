console.log('dw');

async function readPetsJson() {
    let jsonPets = await $.getJSON("pets.json");
    console.log(jsonPets);

    showPetsAsHtml(jsonPets)
}

async function readPersonsJson() {
    let jsonPersons = await $.getJSON("persons.json");
    console.log(jsonPersons);
}




function showPetsAsHtml(jsonPets) {
    for (let pet of jsonPets) {
        let $pet = $('<div class="pets"></div>');

        for (let key in pet) {
            let value = pet[key];
            $pet.append('<div><span>' + key + ': <span>' + value + '</div>');
        }
        $('body').append($pet);
        $('body').append("<br>");
    }
}

readPetsJson();


/* Added this comment */