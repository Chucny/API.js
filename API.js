//Copyright 2024 Chucny
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.
async function website_get_contents(url) { 
const response = await fetch("https://api.codetabs.com/v1/proxy?quest=" + url); 
const data = await response.text(); 
return data; } // To use the function: website_get_contents("google.com").then((data) => do_what_you_want(data));
async function getTitleAndDescription(url) { 
try { // Fetch the URL content 
const response = await fetch("https://api.codetabs.com/v1/proxy?quest="+url); 
const html = await response.text(); // Create a DOM parser 
const parser = new DOMParser(); 
const doc = parser.parseFromString(html, 'text/html'); // Get title and meta description 
const title = doc.querySelector('title') ? doc.querySelector('title').innerText : ''; 
const description = doc.querySelector('meta[name="description"]') ? doc.querySelector('meta[name="description"]').getAttribute('content') : ''; 
// Return the array with URL, title, and description 
return [url, title, description]; } catch (error) { console.error('Error fetching or parsing the URL:', error); return [url, '', '']; } } 
async function api_get_contents(url) { 
const response = await fetch(url); 
const data = await response.text(); 
return data; }
async function get_weather(city) { 
const response = await fetch("https://api.codetabs.com/v1/weather?city="+city); 
const data = await response.text(); 
return data; }
async function get_ip_ipv4() { 
const response = await fetch("https://api.ipify.org"); 
const data = await response.text(); 
return data; }
