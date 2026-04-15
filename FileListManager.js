export class FileListManager {
  constructor(inputElement, listElement) {
    this.input = inputElement;
    this.list = listElement;
    this.allFiles = [];
    this.init();
  }

  init() {
    this.input.addEventListener("change", () => this.handleChange());
  }

  handleChange() {
    for (const file of this.input.files) {
      this.allFiles.push(file);
    }

    this.updateInputFiles();
    this.renderList();
  }

  updateInputFiles() {
    const dt = new DataTransfer();
    this.allFiles.forEach(file => dt.items.add(file));
    this.input.files = dt.files;
  }

  renderList() {
    this.list.innerHTML = "";

    this.allFiles.forEach((file, index) => {
      const td = document.createElement("td");
      td.textContent = file.name;

      const btn = document.createElement("button");
      btn.textContent = "Remove";
      btn.addEventListener("click", () => this.removeFile(index));

      const td0 = document.createElement("td");
      td0.appendChild(btn);

      const tr = document.createElement("tr");
      tr.appendChild(td0);
      tr.appendChild(td);

      this.list.appendChild(tr);
    });
  }

  removeFile(index) {
    this.allFiles.splice(index, 1);
    this.updateInputFiles();
    this.renderList();
  }
}