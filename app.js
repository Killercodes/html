if('serviceWorker' in navigator){
      navigator.serviceWorker.register("/app-worker.js")
      .then(registeration => {
        console.log("SW registered");
        console.log(registeration);
      }).catch(error => {
        console.log("SW regestration failed");
        console.log(error);
      });
    }
