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
const response = await fetch("https://api.codetabs.com/v1/proxy?quest=" + url); //All the functions are async, because the only way to do await fetching is async, I just think it looks a bit confusing...
const data = await response.text();//All the functions have the same syntax as the fetch() function
return data; } // To use the function: website_get_contents("google.com").then((data) => do_what_you_want(data));
async function getTitleAndDescription(url) { 
try { // Fetch the URL content 
const response = await fetch("https://api.codetabs.com/v1/proxy?quest="+url); 
const html = await response.text(); // Create a DOM parser 
const parser = new DOMParser(); 
const doc = parser.parseFromString(html, 'text/html'); // Get title and meta description 
const title = doc.querySelector('title') ? doc.querySelector('title').innerText : ''; 
const description = doc.querySelector('meta[name="description"]') ? doc.querySelector('meta[name="description"]').getAttribute('content') : ''; //Check my repository, SearchDatabase.js if you want to combine it with this, it has a very large database
// Return the array with URL, title, and description 
return [url, title, description]; } catch (error) { console.error('Error fetching or parsing the URL:', error); return [url, '', '']; } } 
async function api_get_contents(url) { 
const response = await fetch(url); 
const data = await response.text(); 
return data; }
async function get_weather(city) { 
const response = await fetch("https://api.codetabs.com/v1/weather?city="+city); //Weather API
const data = await response.text(); 
return data; }
async function get_ip_ipv4() { 
const response = await fetch("https://api.ipify.org"); //Get your IP
const data = await response.text(); 
return data; }
async function gender_by_name(name) { 
const response = await fetch("https://api.genderize.io?name="+name); //Gender by name, could be used for different algorithms
const data = await response.text(); 
return data; }
async function ip_location(ip) { 
const response = await fetch("https://api.codetabs.com/v1/geolocation/json?q="+ip); //Finding location of an IP 
const data = await response.text(); //The IP can also be the domain of a website.
return data; }
async function duckduckgo_search(search_query) { 
const response = await fetch("https://api.duckduckgo.com/?q="+search_query+"&format=json"); //DuckDuckGo Search API
const data = await response.text(); 
return data; }
