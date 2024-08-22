(function copyContent() {
  const content = "hello, world";
  if (!navigator.clipboard) {
    window.open().document.body.append(content);
    return;
  } else {
    navigator.clipboard.writeText(content).then(
      () => {
        alert("copied to clipboard");
      },
      () => {
        alert("copy failed");
      },
    );
  }
})();
