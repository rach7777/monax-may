require 'jekyll'
require 'shellwords.rb'

PROD_USER   = "83505"
PROD_SERVER = "git.dc2.gpaas.net"
PROD_HTDOCS = "erisindustries.com"
AUX_REMOTES = %w(github ei csk)

task :default => [:publish]


desc "Environment Setup"
task :setup do
  # ensure _site exists
  unless Dir.exists?(File.join(File.dirname(__FILE__), '_site'))
    Dir.mkdir(File.join(File.dirname(__FILE__), '_site'))
    Dir.mkdir(File.join(File.dirname(__FILE__), '_site', 'htdocs'))
    Dir.chdir(File.join(File.dirname(__FILE__), '_site'))

    system "git init ."
    system "git remote add origin git+ssh://#{PROD_USER}@#{PROD_SERVER}/#{PROD_HTDOCS}.git"

    print "Where am I?\n"
    print(system "pwd" + "\n")
    print(system "git remote -v" + "\n")
  else
    Dir.chdir(File.join(File.dirname(__FILE__), '_site'))
  end

  system "git pull origin master"

  Dir.chdir(File.join(File.dirname(__FILE__)))
end

desc "Ensure matches Template"
task :test do
  Dir.chdir(File.dirname(__FILE__))

  # unless compareTemplate.empty?
  #   print "WARNING: There are differences with the template directory.\n"
  #   compareTemplate.each{|c| print c + "\n"}
  #   raise RuntimeError, "FAIL! There are changes between the site and the Template."
  # end
end

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


desc "CircleCI Deploy only this site"
task :deploy do
  print "Building Jekyll Site.\n"
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site/htdocs"
  })).process

  Dir.chdir "_site"
  print "Current Directory: #{system "pwd"}."
  system "git add ."
  message = "Site updated at #{Time.now.utc}"
  system "git commit -m #{message.shellescape}"
  print "Pushing to Production.\n"
  system "git push origin master"

  system "ssh #{PROD_USER}@#{PROD_SERVER} 'deploy #{PROD_HTDOCS}.git master'"
end