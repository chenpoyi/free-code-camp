// Only change code below this line
function urlSlug(title) {
 
  return title.toLowerCase().split(/\W/).filter(element => element != '').join('-');
}
// Only change code above this line