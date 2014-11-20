require 'jekyll'
require 'shellwords.rb'

PROD_USER   = "83505"
PROD_SERVER = "git.dc2.gpaas.net"
PROD_HTDOCS = "readying.erisindustries.com"
AUX_REMOTES = %w(github ei csk)

task :default => [:publish]

desc "Prepare to Generate files"
task :prepare do
  message = "Site updated at #{Time.now.utc}"
  system "git checkout -- _config.yml"
  system "git add ."
  system "git commit -m #{message.shellescape}"
  AUX_REMOTES.each do |rem|
    system "git push #{rem} master"
  end
end

desc "Generate the site"
task :generate => [:prepare] do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site/htdocs"
  })).process
end

# call with rake site:publish
desc "Publish the generated sites"
task :publish => [:generate] do
  Dir.chdir "_site"
  system "git add ."
  message = "Site updated at #{Time.now.utc}"
  system "git commit -m #{message.shellescape}"
  system "git push origin master"
  system "ssh #{PROD_USER}@#{PROD_SERVER} 'deploy #{PROD_HTDOCS}.git master'"
end
