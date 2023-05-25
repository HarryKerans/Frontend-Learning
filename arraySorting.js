var msg = document.getElementById("arrayMsg");

var arrayNotSorted = ["dog", "buffalo", "cat", "zebra", "frog", "antelope", "aardvark", "elephant"];


msg.textContent = "Original Order : [" + arrayNotSorted + "]";
msg.innerHTLM += "<strong> Original Order : </strong> [" + arrayNotSorted + "]";

var arraySorted = arrayNotSorted.sort();
document.write("New Order Deafult Sort: [" + arraySorted + "]");

function lengthSort (a, b) {
    return a.length - b.length;
}


var arraySortedLength = arrayNotSorted.sort(lengthSort);
document.write("New Order Sorted By Length: [" + arraySortedLength + "]");

