import { postData } from "./data.js";
import { createPost, renderPosts } from "./post.js";

const ROOT = 'root';
const HEADER = 'info-area';
const POST = 'post-area';

const root = document.getElementById(ROOT);

const generateContainers = () => {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add(HEADER);

  const postDiv = document.createElement("div");
  postDiv.classList.add(POST);

  containerDiv.appendChild(headerDiv);
  containerDiv.appendChild(postDiv);

  root.appendChild(containerDiv);
}

const generateHeader = () => {

}

const generatePosts = () => {
  const posts = [];
  for (let i = 0; i < postData.length; i++) {
    const post = createPost(postData[i]);
    posts.push(post);
  }
  renderPosts(posts);
}

const init = () => {
  generateContainers();
  generateHeader();
  generatePosts();
}

init();