javascript:(function(){var u=document.location.href;var l=u.match(/\/@([\d\.]+,[\d\.]+),((\d+)z)?/);open('https://www.ingress.com/intel?ll='+l[1]+(l[3]?'&z='+l[3]:''));})();