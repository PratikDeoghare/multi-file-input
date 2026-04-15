import { FileListManager } from "./FileListManager.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("Documents");
  const list = document.getElementById("DocumentsList");

  if (input && list) {
    new FileListManager(input, list);
  }
});