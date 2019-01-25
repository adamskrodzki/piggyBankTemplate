
const helloTemplate = model => {
  var greetingsClass = "hidden";
  if (
    !model.metamaskEnabled ||
    model.address === "0x0000000000000000000000000000000000000000"
  ) {
    greetingsClass = "hidden";
  } else {
    greetingsClass = "visible";
  }
 return `<h6 class="${greetingsClass}">Witaj ${model.address}</h6>`;
}

export default helloTemplate;