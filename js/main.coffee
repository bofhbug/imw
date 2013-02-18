


$(document).ready ->
  if(Function('/*@cc_on return document.documentMode===10@*/')())
    document.documentElement.className+=' ie10'

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


  currentContent = '.maincontent'
  animDur = 700


  # NAV
  deviceAgent = navigator.userAgent.toLowerCase()
  agentID = deviceAgent.match(/(iphone|ipod|ipad)/)
  offsetMod = 100
  if agentID
    #$('nav').css('display', 'none')
    #$('#mainwrap').css('margin-top', '90px')
    offsetMod = 0
    $('.header-container').css('position', 'absolute')


  $('.mini-nav').change (e) ->
    fadeBackToNormal()
    switch e.currentTarget.value
      when "1"
        $.smoothScroll
          offset: 4,
      when "2"
        targetOffset = $('.selected-segments').offset()
        $.smoothScroll
          offset: targetOffset.top - offsetMod,
      when "3"
        targetOffset = $('.business-models').offset()
        $.smoothScroll
          offset: targetOffset.top - offsetMod,
      when "4"
        targetOffset = $('footer').offset()
        $.smoothScroll
          offset: targetOffset.top - offsetMod,
    $('.mini-nav').val($(".mini-nav option:first").val())

  # PIE
  if (window.PIE)
    PIE.attach($('.dark')[0])
    PIE.attach($('.medium')[0])
    PIE.attach($('.light')[0])
    PIE.attach($('.main-nav')[0])
    $('.bordered').each ->
      PIE.attach(@)


  $('#link1').click (e) ->
    e.preventDefault()
    fadeBackToNormal()
    #$('#device').css('height', '200px')
    $.smoothScroll
      offset: 8
      #afterScroll: fixIt
  $('#link2').click (e) ->
    e.preventDefault()
    fadeBackToNormal()
    #$('#device').css('height', '200px')
    targetOffset = $('.selected-segments').offset()
    $.smoothScroll
      offset: targetOffset.top - offsetMod
      #afterScroll: fixIt
  $('#link3').click (e) ->
    e.preventDefault()
    fadeBackToNormal()
    #$('#device').css('height', '200px')
    targetOffset = $('.business-models').offset()
    $.smoothScroll
      offset: targetOffset.top - offsetMod
      #afterScroll: fixIt
  $('#link4').click (e) ->
    e.preventDefault()
    fadeBackToNormal()
    #$('#device').css('height', '200px')
    targetOffset = $('footer').offset()
    $.smoothScroll
      offset: targetOffset.top - offsetMod
      #afterScroll: fixIt
  
  setBodyClass = (to) ->
    $('body').removeClass()
    $('body').addClass to




  $(window).scroll ->
    val = $(@).scrollTop()
    valWin = $(@).scrollTop()+$(@).height()
    if currentContent == '.maincontent'
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
    else
      setBodyClass 'nuescht'



  $('.span3 h2').click (e) ->
    if ($(@).css('padding-left') == '20px')
      $(@).parent().find('.spanwrapper').toggle 'medium'
      $(@).toggleClass 'open'

  $('.span3 h3').click (e) ->
    if ($(@).css('padding-left') == '20px')
      $(@).parent().find('.spanwrapper').toggle 'fast'
      $(@).toggleClass 'open'
      $(@).parent().parent().find('.fillerbox').toggle 'medium'



  $('#link-imprint').click (e) ->
    e.preventDefault()
    $.smoothScroll
      offset: 0
      speed: animDur
      afterScroll: ->
        showSubcontent '.subcontent.imprint'

  $('#link-privacypolicy').click (e) ->
    e.preventDefault()
    $.smoothScroll
      offset: 0
      speed: animDur
      afterScroll: ->
        showSubcontent '.subcontent.privacypolicy'

  $('#link-legaldisclaimer').click (e) ->
    e.preventDefault()
    $.smoothScroll
      offset: 0
      speed: animDur
      afterScroll: ->
        showSubcontent '.subcontent.legaldisclaimer'


  showSubcontent = (what) ->
    setBodyClass 'nuescht'

    $(currentContent).slideUp animDur, 'swing', =>
      currentContent = what
    $(what).slideDown animDur


  fadeBackToNormal = ->
    if $('.subcontent').is(':visible')
      $('.maincontent').show()
      $(currentContent).hide 0, 'swing', ->
        currentContent = '.maincontent'




