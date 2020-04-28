const rootStyles = window.getComputedStyle(document.documentElement)

if(rootStyles.getPropertyValue('--book-cover-width-large') != null &&
rootStyles.getPropertyValue('--book-cover-width-large') != ''){
  ready()
}else{
  document.getElementById('main-css').addEventListener('load',ready)
}

function ready(){
  const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
  const coverAspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))


  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
  )
  
  FilePond.setOptions({
    stylePanelAspectRatio: coverWidth / coverAspectRatio,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150
  })
  
  FilePond.parse(document.body);
}