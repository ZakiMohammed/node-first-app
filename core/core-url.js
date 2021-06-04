const url = require('url')

const link = 'https://codeomelet.com/posts/first-post?id=100&name=John';

const fatUrl = new URL(link);

console.log(fatUrl.host);
console.log(fatUrl.hostname);
console.log(fatUrl.href);
console.log(fatUrl.origin);
console.log(fatUrl.search);