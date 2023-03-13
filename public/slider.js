let links = ["photos/sunshine.jpg", "photos/sky.jpg", "photos/fleur.jpg", "photos/montagne.jpg"]

const containerSlider = document.getElementsByClassName('slides')[0]
console.log("coucou")
for (const i in links) {
  // Calcul des elements suivant/précédents
  const nextIndex = i === String(links.length-1) ? 1 : parseInt(i)+2
  const nextText = "("+links[nextIndex]+")"
  
  const prevIndex = i === "0" ? links.length : parseInt(i)
  const prevText = "("+links[prevIndex]+")"
  
  // Div container
//   let divContainerElement = document.createElement('div')
//   divContainerElement.setAttribute('class', 'carousel')

  // Ul partie

//   let ulElement = document.createElement('ul')
//   ulElement.setAttribute('class', 'slides')
  
  // Partie input
  let inputElement = document.createElement('input')
  inputElement.setAttribute('type', 'radio')
  inputElement.setAttribute('name', 'radio-buttons')
  inputElement.setAttribute('id', `img-${parseInt(i) + 1}`)
  inputElement.checked = true
//   inputElement.setAttribute('checked', '')

  //il partie
  let ilElement = document.createElement('li')
  ilElement.setAttribute('class', 'slide-container')

  //Div image partie
  let divImageElement = document.createElement('div')
  divImageElement.setAttribute('class', 'slide-image')

  //image partie
  let imageElement = document.createElement('img')
  imageElement.setAttribute('src', links[i])

  //On ajoute l'image dans la divImage
  divImageElement.appendChild(imageElement)

  // divLabel partie
  let divLabelElement = document.createElement('div')
  divLabelElement.setAttribute('class', 'carousel-controls')

  //Label partie
  let labelElement = document.createElement('label')
  labelElement.setAttribute('for', `img-${prevIndex}`)
  labelElement.setAttribute('class', 'prev-slide')
  
  //span partie
  let spanElement = document.createElement('span')
  spanElement.textContent = "‹"

  let label2Element = document.createElement('label')
  label2Element.setAttribute('for', `img-${nextIndex}`)
  label2Element.setAttribute('class', 'next-slide')

  let span2Element = document.createElement('span')
  span2Element.textContent = "›"

  //On ajoute les span dans les labels


  //On ajoute les label à la div
  labelElement.appendChild(spanElement)
  label2Element.appendChild(span2Element)

  divLabelElement.appendChild(labelElement)
  divLabelElement.appendChild(label2Element)

  //On ajoute les div dans le li
  ilElement.appendChild(divImageElement)
  ilElement.appendChild(divLabelElement)

  
  // On ajoute tout au div container
//   divContainerElement.appendChild(ulElement)
containerSlider.appendChild(inputElement)
containerSlider.appendChild(ilElement)
  
}