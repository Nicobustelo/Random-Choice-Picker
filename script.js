const tagsEl = document.getElementById('tags')
const textareaEl = document.getElementById('textarea')

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value=''
    }, 10)

    randomSelect()
  }
})

function createTags(input) {
  let tags = input.split(',').map(element => {
    if (/^\s||\s$/.test(element)) {
      element = element.replace(/^\s*/, '');
      element = element.replace(/\s*$/, '');
      return element
    } else {
      return element;
    }
  });
  tags = tags.filter(tag => tag !== '')

  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval= setInterval(function () {
    const randomTag= pickRandomTag()

    highlightTag(randomTag)

    setTimeout (()=> {
      unhighlightTag(randomTag);
    }, 100)
  }, 100);

  setTimeout (()=> {
    clearInterval(interval)

    setTimeout(()=> {
      const getRandomTag = pickRandomTag()

      highlightTag(getRandomTag)
    },100)
  }, times * 100)
}

function pickRandomTag( ) {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight')
}
