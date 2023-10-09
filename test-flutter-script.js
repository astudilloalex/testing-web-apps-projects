const iframeId = "w6cMVAd7SQESkwQYN1UUIf28uxxEMPdMFyD3KsUbANR3jsNt8j";
const iframeContainerId = "w6cMVAd7SQESkwQYN1UUIf28uxxEMPdMFyD3KsUbANR3jsalex";

const iframeContainer = document.createElement("div");
iframeContainer.id = iframeContainerId;
iframeContainer.style.display = "none";
iframeContainer.style.height = "500px";
iframeContainer.style.position = "fixed";
iframeContainer.style.bottom = "100px";
iframeContainer.style.right = "20px";
iframeContainer.style.borderRadius = "15px";
iframeContainer.style.border = "1px solid aliceblue";
iframeContainer.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.2)";

const iframe = document.createElement("iframe");

iframe.src = "https://public.alexastudillo.com"; // URL de la página que quieres cargar en el iframe
iframe.id = iframeId;
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.border = "none";
iframe.style.borderRadius = "15px";

iframeContainer.appendChild(iframe);
document.body.appendChild(iframeContainer);

const floatingButton = document.createElement("a");
// button style
floatingButton.style.position = "fixed";
floatingButton.style.bottom = "20px";
floatingButton.style.right = "20px";
floatingButton.style.backgroundColor = "#007BFF";
floatingButton.style.border = "none";
floatingButton.style.borderRadius = "50%";
floatingButton.style.width = "60px";
floatingButton.style.height = "60px";
floatingButton.style.cursor = "pointer";
floatingButton.style.boxShadow = "0px 3px 6px rgba(0, 0, 0, 0.3)";
floatingButton.style.display = "flex";
floatingButton.style.alignItems = "center";
floatingButton.style.justifyContent = "center";

const circleAvatar = document.createElement("img");
circleAvatar.src = "https://public.alexastudillo.com/ai-avatar.jpg";
circleAvatar.alt = "Avatar";
// Avatar style
circleAvatar.style.maxWidth = "100%";
circleAvatar.style.maxHeight = "100%";
circleAvatar.style.borderRadius = "50%";

floatingButton.appendChild(circleAvatar);

document.body.appendChild(floatingButton);

floatingButton.addEventListener("click", function () {
  if (iframeContainer.style.display === "none") {
    iframeContainer.style.display = "block";
  } else {
    iframeContainer.style.display = "none";
  }
});

window.addEventListener("load", adjustWidth);

window.addEventListener("resize", adjustWidth);

function adjustWidth() {
  const element = document.getElementById(iframeContainerId); // Reemplaza 'tu-elemento' con el ID de tu elemento
  element.style.right = "20px";
  console.log(window.innerWidth);
  if (window.innerWidth >= 500) {
    element.style.width = "300px";
  } else {
    element.style.width = window.innerWidth + "px";
    element.style.right = "1px";
  }
}

/* const base = document.createElement("base");
base.href = "https://public.alexastudillo.com/"; */

/* document.head.appendChild(base);
document.head.appendChild(script); */

/* window.addEventListener("load", function (ev) {
  // Download main.dart.js
  _flutter.loader.loadEntrypoint({
    serviceWorker: {
      serviceWorkerVersion: serviceWorkerVersion,
    },
    onEntrypointLoaded: function (engineInitializer) {
      engineInitializer.initializeEngine().then(function (appRunner) {
        appRunner.runApp();
      });
    },
  });
}); */
