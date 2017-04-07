function whoami(request, response) {
  const ip = request.ip,
    lang = request.headers['accept-language'].split(',')[0],
    software = request.headers['user-agent'];

  response.json({
    ipaddress: ip,
    language: lang,
    sofware: software
  });
}

module.exports = whoami;
