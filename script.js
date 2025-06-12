function change(selcted) {
    const fruit = selcted.value;
    document.getElementById("demo").innerHTML = fruit ? `you are selected ${fruit}` : 'select a fruit';

}