window.addEventListener("load", main, false);

function main(e) {
  const jsInitCheckTimer = setInterval(jsLoaded, 1000);
  function jsLoaded() {
    let spanTags = document.querySelectorAll('span');
    let spanHasPlus = Array.from(spanTags).some(span => span.textContent === 'Plus');
    if (spanHasPlus) {
      clearInterval(jsInitCheckTimer);
      url = new URL(document.location.href);
      // wait 1s doing nothing
      setTimeout(() => {
        let params = url.searchParams;
        let query = params.get("q");
        if (query) {
          const decodedQuery = decodeURIComponent(query);
          document.getElementById("prompt-textarea").value = decodedQuery;
          document.getElementById("prompt-textarea").dispatchEvent(new Event('input', { bubbles: true })); // activate send button
          document.getElementById("prompt-textarea").dispatchEvent(new KeyboardEvent('keydown', { keyCode: 13, bubbles: true }));
        }
      }, 1000);
    }
  }
}

