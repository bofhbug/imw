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



  # NAV
  deviceAgent = navigator.userAgent.toLowerCase()
  agentID = deviceAgent.match(/(iphone|ipod|ipad)/)
  #if agentID
    #$('nav').css('display', 'none')
    #$('#mainwrap').css('margin-top', '90px')
    #$('header').css('position', 'absolute')


  $('#link1').click (e) ->
    e.preventDefault()
    #$('#device').css('height', '200px')
    $.smoothScroll
      offset: 4,
      #afterScroll: fixIt
  $('#link2').click (e) ->
    e.preventDefault()
    #$('#device').css('height', '200px')
    targetOffset = $('.selected-segments').offset()
    $.smoothScroll
      offset: targetOffset.top - 100,
      #afterScroll: fixIt
  $('#link3').click (e) ->
    e.preventDefault()
    #$('#device').css('height', '200px')
    targetOffset = $('.business-models').offset()
    $.smoothScroll
      offset: targetOffset.top - 100,
      #afterScroll: fixIt
  $('#link4').click (e) ->
    e.preventDefault()
    #$('#device').css('height', '200px')
    $.smoothScroll
      offset: $(document).height(),
      #afterScroll: fixIt
  
  setBodyClass = (to) ->
    $('body').removeClass()
    $('body').addClass to



  $(window).scroll ->
    val = $(@).scrollTop()
    valWin = $(@).scrollTop()+$(@).height()
    if ($(@).scrollTop() + $(@).height()) > $(document).height() - 100
      setBodyClass 'contact-state'
    else if val > $('.business-models').offset().top-130
      setBodyClass 'business-models-state'
    else if val > $('.selected-segments').offset().top-130
      setBodyClass 'selected-segments-state'
    else if val > 5
      setBodyClass 'home-state'
    else
      setBodyClass 'nuescht'



  $('.span3 h2, .span3 h3').click (e) ->
    $(@).parent().find('.spanwrapper').toggle 'medium'

