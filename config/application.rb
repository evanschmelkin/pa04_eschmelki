require_relative 'boot'
require 'rails/all'
require "rails"
require "propshaft"

require "sprockets/railtie"

module Pa04Eschmelki
  class Application < Rails::Application
    config.load_defaults 8.0
    config.autoload_paths += %W(#{config.root}/lib)
  end
end
