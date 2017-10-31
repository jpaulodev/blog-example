import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'getch_post';
export const DELETE_POST = 'delete_post';

const API_KEY = '?key=ASH91HD0A002JF03RKLFJFI329412';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(callback);

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(postId) {
  const request = axios.get(`${ROOT_URL}/posts/${postId}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(postId, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${postId}${API_KEY}`).then(callback);

  return {
    type: DELETE_POST,
    payload: postId
  }
}
