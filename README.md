Install virtualbox:
https://www.virtualbox.org/wiki/Downloads

Install vagrant:
https://www.vagrantup.com/downloads

Then in the directory where you find this readme:

  vagrant up
  vagrant ssh

  cd /vagrant
  jekyll serve --watch 4000

This will create a VM, ssh into it, and run jekyll. Hit http://localhost:4000 to see it.