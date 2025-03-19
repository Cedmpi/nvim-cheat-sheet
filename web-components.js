class WordTooltip extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="https://neovim.io/doc/user/motion.html#WORD" target="_blank" style="text-decoration: none; color:#fff;" data-tooltip="A WORD consists of a sequence of non-blank characters, separated with white space. An empty line is also considered to be a WORD.">WORD</a>`;
  }
}

customElements.define("word-tooltip", WordTooltip);

class SentenceTooltip extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="https://neovim.io/doc/user/motion.html#sentence" target="_blank" style="text-decoration: none; color:#fff;" data-tooltip="A sequence of characters ending with ., !, or ? followed by whitespace or a newline.">sentence</a>`;
  }
}
customElements.define("sentence-tooltip", SentenceTooltip);

class ParagraphTooltip extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="https://neovim.io/doc/user/motion.html#paragraph" target="_blank" style="text-decoration: none; color:#fff;" data-tooltip="A block of text separated by one or more blank lines.">paragraph</a>`;
  }
}
customElements.define("paragraph-tooltip", ParagraphTooltip);
