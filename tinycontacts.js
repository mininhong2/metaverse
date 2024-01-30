let win=null;
function showHTML() 
{
if(win == null || win.closed)
	win = window.open("", "outWin", "width=300,height=200");

let textArea = document.getElementById("srcText");
win.document.open();
win.document.write(textArea.value);
win.document.close();
}

function displayElementValue(id, text)
{
    var element = document.getElementById(id);
    element.value = text;
}

function getElementValue(id)
{
    var element = document.getElementById(id);
    return element.value;
}

function displayContactNotFound()
{
    alert("Not found");
}

function doSave() {
    alert("Saves a contact in the store");
}

function doFind()
{
    if(win == null || win.closed)
	win = window.open("", "outWin", "width=100,height=50");

let textArea = document.getElementById("srcText");
win.document.open();
win.document.write(textArea.value);
win.document.close();

let textArea1 = document.getElementById("srcText");
win.document.open();
win.document.write(textArea1.value);
win.document.close();
}