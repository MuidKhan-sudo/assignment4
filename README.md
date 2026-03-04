1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
getElementById: targets a section/element by Id
getElementByClassName: targets one or more elements at a time with class names
querySelector: targets and returns only  a single matching element. ignores rest of the elements.
querySelectorAll: targets all the matching elements. returns a nodelist

2.How do you create and insert a new element into the DOM?
ans: to create a new element we should use 'document.createElement("")' and to insert it into another element - .appendChild

3.What is Event Bubbling? And how does it work?
ans: event bubbling means when an event happens at first it happens into the targeted element. then it travels to the parent 
of that element. then it's parent's parent.finally to the document. like bubbles. that's why it's called event bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?
 ans: event delegation is instead of adding eventListener to child elements, add eventListener into parent element. we should
use event delegation for more cleaner and maintainable code. it's easy to control newly added function through it. it uses
event bubbling to control child elements.

5.What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault() stops the default behavior of a browser but it doesn't stop the bubbling of event. on the other hand, 
stopPropagation() method stops the event bubbling.

 
