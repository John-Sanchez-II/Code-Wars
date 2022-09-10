// Remove anchor from URL

function removeUrlAnchor(url){
    //   .split to remove anchor(#)
    //   only want the url so i need to start at the index of 0 since-
    //   i dont want anything after the URL
        console.log(url.split('#')[0])
        return url.split('#')[0]
      }