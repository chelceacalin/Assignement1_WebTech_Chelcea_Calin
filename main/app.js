function hash(input, dictionary) {
    if (typeof input !== 'string')
        throw new Error("Input should be a string");

    let toateString = 1;
    dictionary.forEach(element => {
        if (typeof element !== 'string') {
            toateString = 0;
            throw new Error("Invalid dictionary format");
        }
    });

    const myArray = input.split(" ");
    if (toateString === 1) {
        let cnt = 0;
        for (var itemArray of myArray) {
            cnt++;
            for (var itemDict of dictionary) {
                if (itemArray.toLocaleLowerCase() === itemDict.toLocaleLowerCase()) {
                    var ElemReplaced = itemReplaced(itemArray);
                    myArray[cnt - 1] = ElemReplaced;
                }
            }
        }
        input = "";
        for (var s of myArray) {
            input += s + " ";
        }
        input = input.slice(0, -1);
    }


    return input;
}

function itemReplaced(element) {
    var elementCopy = element; // doi , trei
    for (var i = 0; i <= element.length; i++) {
        element[i] = "c";
    }
    var replaced = element.substring(0, 1);

    var len = 0;
    while (len < element.length - 2) {
        replaced += "#"
        len++;
    }
    replaced += element[element.length - 1];
    element = replaced;
    return element;
}



const app = {
    hash
};

module.exports = app;