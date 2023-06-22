if (navigator.serviceWorker) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("serviceWorker.js").then(
      () => {
        console.log("Service Worker Registered !");
      },
      (err) => {
        console.log("Error Registering Service Worker !", err);
      }
    );
  });
}
