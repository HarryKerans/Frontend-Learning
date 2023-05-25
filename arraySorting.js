var msg = document.getElementById("arrayMsg");

var arrayNotSorted = ["dog", "buffalo", "cat", "zebra", "frog", "antelope", "aardvark", "elephant"];


//msg.textContent = "Original Order : [" + arrayNotSorted + "]";

msg.innerHTML += "<p><strong> Original Order : </strong> [" + arrayNotSorted + "]<p>";

var arraySorted = arrayNotSorted.sort();
msg.innerHTML += "<p><strong>New Order Deafult Sort: </strong> [" + arraySorted + "]<p>";

function lengthSort (a, b) {
    return a.length - b.length;
}


var arraySortedLength = arrayNotSorted.sort(lengthSort);
msg.innerHTML += "<p><strong>New Order Sorted By Length: </strong> [" + arraySortedLength + "]<p>";

