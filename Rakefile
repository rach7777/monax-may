require 'jekyll'
require 'shellwords.rb'

task :default => [:publish]

# call with rake site:publish
desc "Generate and publish blog"
task :publish do
  system "git add -A"
  message = "Site updated at #{Time.now.utc}"
  system "git commit -m #{message.shellescape}"
  system "git push github master"
  system "git push ei master"
  system "git push gandi master  --force"
	system "ssh 83505@git.dc2.gpaas.net 'deploy erisindustries.com.git master'"
end
