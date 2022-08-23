// Create the Dog class here

class Dog {
  constructor(data) {
      Object.assign(this, data)
  }
  
  setMatchStatus(bool) {
      this.hasBeenLiked = bool
      this.hasBeenSwiped = true
  }
 
  setRate() {
    if (this.hasBeenSwiped) {
        let image = this.hasBeenLiked ? 
        "badge-like.png" : "badge-nope.png"
        const badge = document.createElement('img')
        badge.src = `./images/${image}`
        document.getElementById('dog-rated').appendChild(badge)
    }
  }
  

  getDogHtml() {
      const { name, avatar, age, bio} = this
      return `
          <div class="feature-suggestion">
              <div id="dog-rated"></div>
              <div class="dog-info">
                  <h4> ${name}, ${age} </h4>
                  <div class="dog-bio">
                      ${bio}
                  </div>
              </div>
              <img class="dog-img" src="${avatar}">
          </div>`
  }
}

export default Dog