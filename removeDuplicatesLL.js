// Write code to remove duplicates from an unsorted linked list


// This solution assumes that a linked list element has a value, and a next node.

var allElements = {};
var buffer;

var removeDuplicatesLL = (linkedList) => {
  if (allElements.hasOwnProperty(linkedList.value)) {
  	buffer.next = linkedList.next;
  	removeDuplicatesLL(linkedList.next);
  	return;
  }
  allElements[linkedList.value] = "javi";
  if (linkedList.next !== undefined) {
  	buffer = linkedList;
  	removeDuplicatesLL(linkedList.next);
  } else {
  	return;
  }
}