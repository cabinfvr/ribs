window.addEventListener("load", function() {
    document.addEventListener("keydown", function(event) {
        typeAlert(event.key);
    });
});
  
function typeAlert(key) {
    if (key == 'Backspace') {
        document.querySelector('.type').innerHTML = document.querySelector('.type').innerHTML.slice(0, -1);
    } else { 
        document.querySelector('.type').innerHTML += key;
    }
}