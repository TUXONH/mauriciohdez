module.exports = {
  apps: [{
    name: 'mauriciohdez',
    script: 'npx',
    args: 'serve -s dist -l 3030',
    cwd: '/home/tuxonh/personal/mauriciohdez',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
