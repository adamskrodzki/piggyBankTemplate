
const noMetamaskTemplate = model => {
  var metaMaskClass = "hidden";
  if (model.metamaskEnabled) {
    metaMaskClass = "hidden";
  } else {
    metaMaskClass = "visible";
  }
  return `<h6 class="${metaMaskClass}">You need Web3 provider to use this app</h6>`;

}

export default noMetamaskTemplate;