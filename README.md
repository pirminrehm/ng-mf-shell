# Angular Multi-Repo Webpack Module Federation Example (Micro Frontends)

## The Shell App

This repository is part of an Angular mlti-repo Webpack Module Federation example, which is explained in this readme.
The example project consists of the followig repos:

- [Shell App (this repository)](https://github.com/pirminrehm/ng-mf-shell#readme)
- [Shared Lib](https://github.com/pirminrehm/ng-mf-lib#readme)
- [Notification Domain App](https://github.com/pirminrehm/ng-mf-notification#readme)
- [Weather Domain App](https://github.com/pirminrehm/ng-mf-weather#readme)

Module Federation can be used to composite multiple independet Angular apps on runtime in the Browser as so-called Micro Frontends (MFs).
For more information on Micro Frontends and Module Federation take a look at [Manfred Steyers Blog series](https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/).

### Provide the Shell App

To provide the lib, make sure you have provided the corresponding Shared Lib via registry on port `4873`, as described [here](https://github.com/pirminrehm/ng-mf-shell#readme).

Then run:

- `npm i`
- `ng serve`
- make sure, the other domains are also served as described in their readmes
  - Notification MF on port `5000`
  - Weather MF on port `5100`

## Overview of the Domains/Repos

- **Shell App**

  - is not a true domain, but has some functionality and orchestrates all other domains
  - loads Webpack Module Federation remote entry files
  - responsible for authentication (represented by adding an user name via input field in this example)
  - defins basic styles (Bootstrap 5 CSS code in this example)

- **Shared Lib**

  - used for communication between the MFs

- **Notification App**

  - all components from this domain have a blue border for easy identification
  - provides an overview page on all created notification alerts as module
  - provides a component "Add Notification" to add a notification alert for a given location and type

- **Weather App**
  - all components from this domain have a yellow border for easy identification
  - provides a weather info page as module

## Explanation for Example

follows soon
