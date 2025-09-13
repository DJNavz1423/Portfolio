const scriptURL = 'https://script.google.com/macros/s/AKfycbykb4cQq-Mi2jq_WXjLZNY3zeqAVY4LmWvtirDE3WMOaieFhcJNGLYticLTzAGDFgU_/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = ""
        }, 4000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })