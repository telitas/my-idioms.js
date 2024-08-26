(function copyContent() {
  const content = [
    "hello, world 1",
    "hello, world 2",
    "hello, world 3"
  ].join("\n");
  if (!navigator.clipboard) {
    const outputDocument = window.open().document;
    content.split("\n").forEach((content) => {
      outputDocument.body.append(content);
      outputDocument.body.append(outputDocument.createElement("br"));
    });
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
