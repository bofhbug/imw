jQuery ->

  replaceInitialImages = ->
    platform = "desktop"
    responsiveImages = $(".responsivize")
    noOfresponsiveImages = responsiveImages.length



    #test for available width in current browser window
    if screen.width <= 767
      platform = "mobile"

    #set initial source element on image
    for i in responsiveImages
      noScriptElem = $(i)

      img = window.document.createElement("img")
      #img.alt = noScriptElem.attr("data-alttext")
      if(platform == "mobile")
        img.src = noScriptElem.attr("data-mobilesrc")
      else
        img.src = noScriptElem.attr("data-fullsrc")
      
      img.className = "responsive"
      img.style.width = "100%"

      noScriptElem.before(img)
      noScriptElem.hide()

  replaceInitialImages()
