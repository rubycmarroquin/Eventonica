export default function validateTitleLocation(title, location) {
  if(title.length > 50 || title.length < 5) {
    return "Title must be at least 5 characters";
  } else if(location.length > 50 || location.length < 10) {
    return "Location must be at least 10 characters";
  } else return true;
}