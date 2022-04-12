const domainName = (url) => url.match(/(?:http[s]?:\/\/)?(?:www\.)?([\w-]+\b)/)[1];

console.log(domainName("http://github.com/carbonfive/raygun")); // github
console.log(domainName("http://www.zombie-bites.com")); // zombie-bites
console.log(domainName("https://www.cnet.com")); // cnet

