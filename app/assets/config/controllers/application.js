// controllers/application.js

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

// Create the Stimulus application
const application = Application.start()

// Automatically load all controllers from the controllers folder
const context = require.context("controllers", true, /\.js$/)
application.load(definitionsFromContext(context))